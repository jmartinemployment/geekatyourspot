"use client";

import React, { useEffect, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import type { TimeSlot } from "./state/types";

const MAX_ATTEMPTS = 4;
const RETRY_DELAY_MS = 1200;

function nextWeekday(): string {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const day = date.getDay();
  if (day === 6) date.setDate(date.getDate() + 2); // Saturday → Monday
  if (day === 0) date.setDate(date.getDate() + 1); // Sunday → Monday
  return date.toLocaleDateString("en-CA");
}

interface BookingWidgetProps {
  selectedDate: string | null;
  onDateChange: (date: string) => void;
  availableSlots: TimeSlot[];
  onSlotsLoading: () => void;
  onSlotsLoaded: (slots: TimeSlot[]) => void;
  onSlotsError: () => void;
  slotsLoading: boolean;
  slotsError: boolean;
  selectedSlot: TimeSlot | null;
  onSlotSelect: (slot: TimeSlot) => void;
}

export function BookingWidget({
  selectedDate,
  onDateChange,
  availableSlots,
  onSlotsLoading,
  onSlotsLoaded,
  onSlotsError,
  slotsLoading,
  slotsError,
  selectedSlot,
  onSlotSelect,
}: Readonly<BookingWidgetProps>): React.JSX.Element {
  const attemptRef = useRef(0);
  const cancelledRef = useRef(false);

  // Auto-select today on mount
  useEffect(() => {
    onDateChange(nextWeekday());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch slots when date changes
  useEffect(() => {
    if (!selectedDate) return;

    cancelledRef.current = false;
    attemptRef.current = 0;
    const date = selectedDate;
    onSlotsLoading();

    async function attempt(): Promise<void> {
      if (cancelledRef.current) return;
      attemptRef.current += 1;
      try {
        const res = await fetch(`/api/calendar/available-slots?date=${date}`);
        if (!res.ok) throw new Error(`HTTP ${String(res.status)}`);
        const data = (await res.json()) as { slots: TimeSlot[] };
        if (!cancelledRef.current) onSlotsLoaded(data.slots);
      } catch {
        if (cancelledRef.current) return;
        if (attemptRef.current < MAX_ATTEMPTS) {
          await new Promise<void>((resolve) =>
            setTimeout(resolve, RETRY_DELAY_MS),
          );
          await attempt();
        } else {
          onSlotsError();
        }
      }
    }

    void attempt();
    return () => {
      cancelledRef.current = true;
    };
  }, [selectedDate, onSlotsLoading, onSlotsLoaded, onSlotsError]);

  function handleDateSelect(date: Date | undefined): void {
    if (!date) return;
    onDateChange(date.toLocaleDateString("en-CA"));
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDateObj = selectedDate
    ? new Date(`${selectedDate}T00:00:00`)
    : undefined;

  return (
    <>
      <div className="grid grid-cols-12 gap-2 place-items-center md:hidden">
        <div className="col-span-6 mx-auto w-full">
          <Calendar
            mode="single"
            className="w-full border rounded-md shadow font-semibold"
            classNames={{
              day: "",
              month: "space-y-4 text-xl",
              day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
              day_today: "font-bold",
              caption_label: "text-lg font-semibold",
            }}
            selected={selectedDateObj}
            onSelect={handleDateSelect}
            disabled={(date) => {
              const d = new Date(date);
              d.setHours(0, 0, 0, 0);
              return d < today || d.getDay() === 0 || d.getDay() === 6;
            }}
          />
        </div>
        <div className="col-span-6 mx-auto w-full">
          {!slotsError &&
            !slotsLoading &&
            selectedDate &&
            availableSlots.length === 0 && (
              <p className="text-white/60 text-sm">
                No availability on this date. please choose another day.
              </p>
            )}

          {availableSlots.length > 0 && (
            <div
              className={cn(
                "grid grid-cols-2 gap-2 transition-opacity duration-200",
                slotsLoading && "opacity-40 pointer-events-none",
              )}
            >
              {availableSlots.map((slot) => {
                const isSelected = selectedSlot?.isoStart === slot.isoStart;
                return (
                  <button
                    key={slot.isoStart}
                    type="button"
                    onClick={() => onSlotSelect(slot)}
                    className={cn(
                      "rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      isSelected
                        ? "border-[#8C2703] bg-[#8C2703] text-white"
                        : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
                    )}
                  >
                    {slot.startTime}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block xl:hidden py-5">
        <div className="grid grid-cols-12 gap-4 place-items-center py-5">
          <div className="col-span-6 mx-auto">
            <Calendar
              mode="single"
              className="w-full h-full border rounded-md shadow font-semibold"
              classNames={{
                day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100",
                month: "space-y-4 text-xl",
                day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
                day_today: "font-bold",
                caption_label: "text-lg font-semibold",
              }}
              selected={selectedDateObj}
              onSelect={handleDateSelect}
              disabled={(date) => {
                const d = new Date(date);
                d.setHours(0, 0, 0, 0);
                return d < today || d.getDay() === 0 || d.getDay() === 6;
              }}
            />
          </div>
          <div className="col-span-6 mx-auto">
            {!slotsError &&
              !slotsLoading &&
              selectedDate &&
              availableSlots.length === 0 && (
                <p className="text-white/60 text-sm">
                  No availability on this date. please choose another day.
                </p>
              )}

            {availableSlots.length > 0 && (
              <div
                className={cn(
                  "grid grid-cols-2 gap-2 transition-opacity duration-200",
                  slotsLoading && "opacity-40 pointer-events-none",
                )}
              >
                {availableSlots.map((slot) => {
                  const isSelected = selectedSlot?.isoStart === slot.isoStart;
                  return (
                    <button
                      key={slot.isoStart}
                      type="button"
                      onClick={() => onSlotSelect(slot)}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        isSelected
                          ? "border-[#8C2703] bg-[#8C2703] text-white"
                          : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
                      )}
                    >
                      {slot.startTime}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden xl:block 2xl:hidden py-5">
        <div className="grid grid-cols-12 gap-4 place-items-center py-5">
          <div className="col-span-6 mx-auto">
            <Calendar
              mode="single"
              className="border rounded-md shadow font-semibold"
              classNames={{
                month: "space-y-4 text-xl",
                day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
                day_today: "font-bold",
                caption_label: "text-lg font-semibold",
              }}
              selected={selectedDateObj}
              onSelect={handleDateSelect}
              disabled={(date) => {
                const d = new Date(date);
                d.setHours(0, 0, 0, 0);
                return d < today || d.getDay() === 0 || d.getDay() === 6;
              }}
            />
          </div>
          <div className="col-span-6 mx-auto ps-5">
            {!slotsError &&
              !slotsLoading &&
              selectedDate &&
              availableSlots.length === 0 && (
                <p className="text-white/60 text-sm">
                  No availability on this date. please choose another day.
                </p>
              )}

            {availableSlots.length > 0 && (
              <div
                className={cn(
                  "grid grid-cols-2 gap-2 transition-opacity duration-200",
                  slotsLoading && "opacity-40 pointer-events-none",
                )}
              >
                {availableSlots.map((slot) => {
                  const isSelected = selectedSlot?.isoStart === slot.isoStart;
                  return (
                    <button
                      key={slot.isoStart}
                      type="button"
                      onClick={() => onSlotSelect(slot)}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        isSelected
                          ? "border-[#8C2703] bg-[#8C2703] text-white"
                          : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
                      )}
                    >
                      {slot.startTime}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden xl:hidden 2xl:block py-5">
        <div className="grid grid-cols-12 gap-4 place-items-center py-5">
          <div className="col-span-6 mx-auto">
            <Calendar
              mode="single"
              className="w-full h-full border rounded-md shadow font-semibold"
              classNames={{
                day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100",
                month: "space-y-4 text-xl",
                day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
                day_today: "font-bold",
                caption_label: "text-lg font-semibold",
              }}
              selected={selectedDateObj}
              onSelect={handleDateSelect}
              disabled={(date) => {
                const d = new Date(date);
                d.setHours(0, 0, 0, 0);
                return d < today || d.getDay() === 0 || d.getDay() === 6;
              }}
            />
          </div>
          <div className="col-span-6 mx-auto ps-5">
            {!slotsError &&
              !slotsLoading &&
              selectedDate &&
              availableSlots.length === 0 && (
                <p className="text-white/60 text-sm">
                  No availability on this date. please choose another day.
                </p>
              )}

            {availableSlots.length > 0 && (
              <div
                className={cn(
                  "grid grid-cols-2 gap-2 transition-opacity duration-200",
                  slotsLoading && "opacity-40 pointer-events-none",
                )}
              >
                {availableSlots.map((slot) => {
                  const isSelected = selectedSlot?.isoStart === slot.isoStart;
                  return (
                    <button
                      key={slot.isoStart}
                      type="button"
                      onClick={() => onSlotSelect(slot)}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        isSelected
                          ? "border-[#8C2703] bg-[#8C2703] text-white"
                          : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
                      )}
                    >
                      {slot.startTime}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
    // <div className="grid grid-cols-12 gap-0 hidden 2xl:hidden h-screen">
    //   <div className="col-span-6 gap-4 flex place-items-center mx-auto h-screen">
    //     <Calendar
    //       mode="single"
    //       className="rounded-md border shadow w-full  caption_label: text-lg font-semibold"
    //       selected={selectedDateObj}
    //       onSelect={handleDateSelect}
    //       disabled={(date) => {
    //         const d = new Date(date);
    //         d.setHours(0, 0, 0, 0);
    //         return d < today || d.getDay() === 0 || d.getDay() === 6;
    //       }}
    //       classNames={{
    //         day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100",
    //         month: "space-y-4 text-xl",
    //         day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
    //         day_today: "font-bold",
    //         caption_label: "text-lg font-semibold",
    //       }}
    //     />
    //   </div>
    //   <div className="col-span-6 gap-4 flex place-items-center mx-auto h-full">
    //     {!slotsError &&
    //       !slotsLoading &&
    //       selectedDate &&
    //       availableSlots.length === 0 && (
    //         <p className="text-white/60 text-sm">
    //           No availability on this date. please choose another day.
    //         </p>
    //       )}

    //     {availableSlots.length > 0 && (
    //       <div
    //         className={cn(
    //           "grid grid-cols-2 gap-2 transition-opacity duration-200",
    //           slotsLoading && "opacity-40 pointer-events-none",
    //         )}
    //       >
    //         {availableSlots.map((slot) => {
    //           const isSelected = selectedSlot?.isoStart === slot.isoStart;
    //           return (
    //             <button
    //               key={slot.isoStart}
    //               type="button"
    //               onClick={() => onSlotSelect(slot)}
    //               className={cn(
    //                 "rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
    //                 isSelected
    //                   ? "border-[#8C2703] bg-[#8C2703] text-white"
    //                   : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
    //               )}
    //             >
    //               {slot.startTime}
    //             </button>
    //           );
    //         })}
    //       </div>
    //     )}
    //   </div>
    // </div>
    //     months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
    // month: "space-y-4 w-full flex flex-col",
    // table: "w-full h-full border-collapse space-y-1",
    // head_cell: "text-muted-foreground rounded-md w-12 font-normal text-[1rem]", // Larger headers
    // day: "h-12 w-12 text-lg p-0 font-normal aria-selected:opacity-100", // Larger cells
    // caption_label: "text-xl font-medium", // Larger month name
    // }}
  );
}
