"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  BookingWidget,
  SlotList,
} from "@/components/shared/scheduler/booking-widget";
import { ContactDrawer } from "@/components/shared/scheduler/contact-drawer";
import { holdSlot, releaseSlotHold } from "@/lib/actions/hold-slot";
import { emitVisitorEvent } from "@/lib/visitors/visitor-events";
import type {
  TimeSlot,
  SlotHold,
} from "@/components/shared/scheduler/state/types";

/**
 * The interactive half of the scheduler: calendar, contact drawer and time slots. SchedulerShell
 * renders the section, heading and copy on the server and loads this only when the section nears
 * the viewport, so react-day-picker, vaul and date-fns stay out of every page's first load.
 *
 * It returns two grid items for the shell's grid: the calendar column and the row of times.
 */
export default function SchedulerWidget(): React.JSX.Element {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hold, setHold] = useState<SlotHold | null>(null);
  const [selectingSlot, setSelectingSlot] = useState(false);
  const [holdError, setHoldError] = useState<string | null>(null);
  const holdRef = useRef<SlotHold | null>(null);

  useEffect(() => {
    holdRef.current = hold;
  }, [hold]);

  const releaseCurrentHold = useCallback(async () => {
    const current = holdRef.current;
    holdRef.current = null;
    setHold(null);
    if (current?.holdEventId) {
      await releaseSlotHold(current.holdEventId);
    }
  }, []);

  useEffect(() => {
    function onUnload(): void {
      const current = holdRef.current;
      if (!current?.holdEventId) return;
      // Best-effort: server action may not finish on unload; calendar hold still expires visually for others via freebusy until deleted.
      void releaseSlotHold(current.holdEventId);
    }
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, []);

  const handleDateChange = useCallback((date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setAvailableSlots([]);
    setSlotsError(false);
    setHoldError(null);
  }, []);

  const handleSlotsLoading = useCallback(() => {
    setSlotsLoading(true);
    setSlotsError(false);
  }, []);

  const handleSlotsLoaded = useCallback((slots: TimeSlot[]) => {
    setAvailableSlots(slots);
    setSlotsLoading(false);
    setSlotsError(false);
  }, []);

  const handleSlotsError = useCallback(() => {
    setSlotsLoading(false);
    setSlotsError(true);
  }, []);

  const handleSlotSelect = useCallback(
    async (slot: TimeSlot) => {
      setHoldError(null);
      setSelectingSlot(true);
      await releaseCurrentHold();

      const result = await holdSlot(slot.isoStart);
      setSelectingSlot(false);

      if (!result.success || !result.holdEventId || !result.expiresAt) {
        setHoldError(
          result.error ?? "That slot could not be held. Please pick another.",
        );
        return;
      }

      const nextHold: SlotHold = {
        holdEventId: result.holdEventId,
        expiresAt: result.expiresAt,
      };
      holdRef.current = nextHold;
      setHold(nextHold);
      setSelectedSlot(slot);
      setDrawerOpen(true);
      emitVisitorEvent("scheduler_slot_held");
    },
    [releaseCurrentHold],
  );

  const handleDrawerChange = useCallback(
    (open: boolean) => {
      setDrawerOpen(open);
      if (!open) {
        void releaseCurrentHold();
        setSelectedSlot(null);
      }
    },
    [releaseCurrentHold],
  );

  const handleHoldExpired = useCallback(() => {
    void releaseCurrentHold();
    setDrawerOpen(false);
    setSelectedSlot(null);
    setHoldError("Your hold expired. Please choose a time again.");
  }, [releaseCurrentHold]);

  return (
    <>
      <div className="w-full lg:col-span-4 2xl:col-span-3">
        {holdError && (
          <p className="mb-3 text-sm font-medium text-white/90">{holdError}</p>
        )}
        <BookingWidget
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          onSlotsLoading={handleSlotsLoading}
          onSlotsLoaded={handleSlotsLoaded}
          onSlotsError={handleSlotsError}
          slotsLoading={slotsLoading}
        />
        <ContactDrawer
          open={drawerOpen}
          onOpenChange={handleDrawerChange}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          hold={hold}
          onHoldExpired={handleHoldExpired}
        />
      </div>

      {/* Times sit on their own row, across the ten columns inside the gutters. */}
      <div className="w-full lg:col-start-2 lg:col-span-10">
        <SlotList
          key={selectedDate ?? "no-date"}
          availableSlots={availableSlots}
          selectedSlot={selectedSlot}
          onSlotSelect={(slot) => {
            void handleSlotSelect(slot);
          }}
          slotsLoading={slotsLoading}
          slotsError={slotsError}
          selectedDate={selectedDate}
          selectingSlot={selectingSlot}
        />
      </div>
    </>
  );
}
