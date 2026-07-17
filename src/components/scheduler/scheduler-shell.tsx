"use client";

import React, { useState, useCallback } from "react";
import { BookingWidget } from "@/components/scheduler/booking-widget";
import { ContactDrawer } from "@/components/scheduler/contact-drawer";
import type { TimeSlot } from "@/components/scheduler/state/types";
import { DrawerHeader } from "@/components/ui/drawer";

export function SchedulerShell(): React.JSX.Element {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDateChange = useCallback((date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setAvailableSlots([]);
    setSlotsError(false);
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

  const handleSlotSelect = useCallback((slot: TimeSlot) => {
    setSelectedSlot(slot);
    setDrawerOpen(true);
  }, []);

  const handleDrawerChange = useCallback((open: boolean) => {
    setDrawerOpen(open);
    if (!open) setSelectedSlot(null);
  }, []);

  return (
    <>
      <section
        id="consultationAppointmentxs"
        className="w-full bg-[#8C2703] min-h-screen lg:hidden"
      >
        <div className="grid grid-cols-12 gap-0 place-items-center h-screen container">
          <div className="col-span-12">
            <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Schedule a Free
              <br />
              <span className="text-[#023059]">Consultation</span>
            </h2>
            <p className="text-white text-lg shadow-text">
              South Florida technology consultancy serving small businesses in
              Broward, Palm Beach, and Miami-Dade.
            </p>
          </div>
          <div className="col-span-12">
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
              onSlotSelect={handleSlotSelect}
            />
            <ContactDrawer
              open={drawerOpen}
              onOpenChange={handleDrawerChange}
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
            />
          </div>
        </div>
      </section>
      <section
        id="consultationAppointmentlg"
        className="w-full bg-[#8C2703] min-h-screen hidden lg:block xl:hidden"
      >
        <div className="grid grid-cols-12 gap-0 place-items-center h-screen container">
          <div className="col-span-12">
            <h2 className="text-white lg:text-7xl 2xl:text-[6.5rem]  leading-[0.95] font-black font-[var(--font-sora)] shadow-text pb-5">
              Schedule a Free
              <br />
              <span className="text-[#023059]">Consultation</span>
            </h2>
            <p className="text-white text-xl shadow-text">
              South Florida technology consultancy serving small businesses in
              Broward, Palm Beach, and Miami-Dade.
            </p>
          </div>
          <div className="col-span-12">
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
              onSlotSelect={handleSlotSelect}
            />
            <ContactDrawer
              open={drawerOpen}
              onOpenChange={handleDrawerChange}
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
            />
          </div>
        </div>
      </section>
      <section
        id="consultationAppointment2xl"
        className="w-full bg-[#8C2703] min-h-screen hidden xl:block"
      >
        <div className="grid grid-cols-12 gap-0 place-items-center h-screen container">
          <div className="col-span-6">
            <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] 2xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Schedule a Free
              <br />
              <span className="text-[#023059]">Consultation</span>
            </h2>
            <p className="text-white text-xl shadow-text">
              South Florida technology consultancy serving small businesses in
              Broward, Palm Beach, and Miami-Dade.
            </p>
          </div>
          <div className="col-span-6">
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
              onSlotSelect={handleSlotSelect}
            />
            <ContactDrawer
              open={drawerOpen}
              onOpenChange={handleDrawerChange}
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
            />
          </div>
        </div>
      </section>
      {/* <section id="consultationAppointment" className="w-full bg-[#8C2703] min-h-screen hidden xl:block">
        <div className="grid grid-cols-12 gap-4 container h-screen">
          <div className="col-span-6 place-items-center">
            <h2 className="lg:text-7xl leading-[0.95] font-black font-(--font-sora) shadow-text">
              Schedule a Free
              <br />
              <span className="text-[#023059]">Consultation</span>
            </h2>
            <p className="text-white text-xl font-normal shadow-text ">
              South Florida technology consultancy serving small businesses in
              Broward, Palm Beach, and Miami-Dade.
            </p>
          </div>

          <div className="col-span-6 flex flex-col justify-center">
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
              onSlotSelect={handleSlotSelect}
            />
            <ContactDrawer
              open={drawerOpen}
              onOpenChange={handleDrawerChange}
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
            />
          </div>
        </div>
      </section> */}
    </>
  );
}
