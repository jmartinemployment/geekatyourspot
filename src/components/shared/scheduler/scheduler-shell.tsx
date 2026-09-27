"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  BookingWidget,
  SlotList,
} from "@/components/shared/scheduler/booking-widget";
import { ContactDrawer } from "@/components/shared/scheduler/contact-drawer";
import { holdSlot, releaseSlotHold } from "@/lib/actions/hold-slot";
import type {
  TimeSlot,
  SlotHold,
} from "@/components/shared/scheduler/state/types";

export function SchedulerShell(): React.JSX.Element {
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
    <article
      id="consultationAppointment2xl"
      className="w-full min-h-screen bg-[#C83803] lg:bg-[#8C2703]"
    >
      {/*
        Full-bleed rather than `container`, so the scheduler widens with the
        viewport instead of stopping at the container's 1320px cap. The twelve
        columns divide 1 / 7 / 3 / 1: a gutter column each side, heading seven,
        calendar three. Below `lg` the grid is a single column and those spacers
        collapse, so `px-4` carries the padding `container` used to supply.
      */}
      <div className="grid min-h-screen content-center items-center grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-12 lg:px-0 lg:py-16 xl:gap-10">
        <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

        <div className="min-w-0 w-full lg:col-span-7">
          <h2 className="max-w-full text-white text-[12vw] sm:text-6xl md:text-7xl lg:text-7xl xl:text-[4rem] 2xl:text-[4.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text lg:pb-5">
            Schedule a Free
            <br />
            <span className="text-[#0B162A] tracking-tight">Consultation</span>
          </h2>
          <p className="text-white text-2xl text-center shadow-text pt-5">
            South Florida technology consultancy serving small businesses in
            Broward, Palm Beach, and Miami-Dade.
          </p>
        </div>
        <div className="w-full lg:col-span-3">
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

        <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />
      </div>
    </article>
  );
}
