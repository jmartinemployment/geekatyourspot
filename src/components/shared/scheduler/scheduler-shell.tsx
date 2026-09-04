"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { BookingWidget } from "@/components/shared/scheduler/booking-widget";
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
      id="consultationAppointment"
      className="w-full min-h-screen bg-[#C83803] lg:bg-[#8C2703]"
    >
      <div className="container grid grid-cols-1 place-items-center gap-6 py-8 min-h-screen lg:grid-cols-12 lg:gap-0 lg:h-screen lg:py-0">
        <div className="w-full lg:col-span-12 xl:col-span-6">
          <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text lg:pb-5">
            Schedule a Free
            <br />
            <span className="text-[#0B162A] tracking-tight">Consultation</span>
          </h2>
          <p className="text-white text-lg lg:text-xl shadow-text">
            South Florida technology consultancy serving small businesses in
            Broward, Palm Beach, and Miami-Dade.
          </p>
        </div>
        <div className="w-full lg:col-span-12 xl:col-span-6">
          {holdError && (
            <p className="mb-3 text-sm font-medium text-white/90">{holdError}</p>
          )}
          <BookingWidget
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
            availableSlots={availableSlots}
            onSlotsLoading={handleSlotsLoading}
            onSlotsLoaded={handleSlotsLoaded}
            onSlotsError={handleSlotsError}
            slotsLoading={slotsLoading}
            slotsError={slotsError}
            selectedSlot={selectedSlot}
            onSlotSelect={(slot) => {
              void handleSlotSelect(slot);
            }}
            selectingSlot={selectingSlot}
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
      </div>
    </article>
  );
}
