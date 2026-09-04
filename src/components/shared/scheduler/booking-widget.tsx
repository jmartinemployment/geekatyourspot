"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  firstSelectableBusinessDay,
  isSelectableBusinessDay,
  listNextBusinessDayKeys,
  toDateKey,
  visibleSlotLimit,
} from "@/lib/booking/scarcity";
import type { TimeSlot } from "./state/types";

const MAX_ATTEMPTS = 4;
const RETRY_DELAY_MS = 1200;

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
  selectingSlot?: boolean;
}

function SlotList({
  availableSlots,
  selectedSlot,
  onSlotSelect,
  slotsLoading,
  slotsError,
  selectedDate,
  columns,
  selectingSlot,
}: {
  availableSlots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSlotSelect: (slot: TimeSlot) => void;
  slotsLoading: boolean;
  slotsError: boolean;
  selectedDate: string | null;
  columns: 1 | 2;
  selectingSlot?: boolean;
}): React.JSX.Element {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [selectedDate]);

  const limit = visibleSlotLimit(availableSlots.length);
  const visible = expanded
    ? availableSlots
    : availableSlots.slice(0, limit);
  const hiddenCount = availableSlots.length - visible.length;
  const spotLabel =
    availableSlots.length === 1
      ? "1 spot left this day"
      : `${String(availableSlots.length)} spots left this day`;

  return (
    <div className="w-full space-y-3">
      {!slotsError &&
        !slotsLoading &&
        selectedDate &&
        availableSlots.length === 0 && (
          <p className="text-white/60 text-sm">
            No availability on this date. Please choose another day.
          </p>
        )}

      {availableSlots.length > 0 && (
        <>
          <p className="text-white text-sm font-semibold tracking-wide">
            {spotLabel}
          </p>
          <div
            className={cn(
              "grid gap-2 transition-opacity duration-200",
              columns === 1 ? "grid-cols-1" : "grid-cols-2",
              (slotsLoading || selectingSlot) &&
                "opacity-40 pointer-events-none",
            )}
          >
            {visible.map((slot) => {
              const isSelected = selectedSlot?.isoStart === slot.isoStart;
              return (
                <button
                  key={slot.isoStart}
                  type="button"
                  onClick={() => onSlotSelect(slot)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 text-left",
                    isSelected
                      ? "border-[#8C2703] bg-[#8C2703] text-white"
                      : "border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
                  )}
                >
                  <span className="block">{slot.startTime}</span>
                  {slot.tags && slot.tags.length > 0 && (
                    <span className="mt-0.5 block text-[11px] font-normal text-white/70">
                      {slot.tags.join(" · ")}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              Show more times
            </button>
          )}
        </>
      )}
    </div>
  );
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
  selectingSlot = false,
}: Readonly<BookingWidgetProps>): React.JSX.Element {
  const attemptRef = useRef(0);
  const cancelledRef = useRef(false);

  const allowedDayKeys = useMemo(
    () => listNextBusinessDayKeys(),
    // Recompute once per mount / day boundary is fine for a booking session
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const allowedSet = useMemo(
    () => new Set(allowedDayKeys),
    [allowedDayKeys],
  );

  const startMonth = useMemo(() => {
    const first = firstSelectableBusinessDay();
    return new Date(first.getFullYear(), first.getMonth(), 1);
  }, []);

  const endMonth = useMemo(() => {
    const lastKey = allowedDayKeys[allowedDayKeys.length - 1];
    const [y, m] = lastKey.split("-").map(Number);
    return new Date(y, m - 1, 1);
  }, [allowedDayKeys]);

  useEffect(() => {
    onDateChange(toDateKey(firstSelectableBusinessDay()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (!isSelectableBusinessDay(date, allowedSet)) return;
    onDateChange(toDateKey(date));
  }

  const selectedDateObj = selectedDate
    ? new Date(`${selectedDate}T00:00:00`)
    : undefined;

  function isDisabled(date: Date): boolean {
    return !isSelectableBusinessDay(date, allowedSet);
  }

  const calendarShared = {
    mode: "single" as const,
    selected: selectedDateObj,
    onSelect: handleDateSelect,
    disabled: isDisabled,
    startMonth,
    endMonth,
  };

  return (
    <>
      <div className="lg:hidden py-5 space-y-4 w-full">
        <Calendar
          {...calendarShared}
          className="mx-auto w-fit border rounded-md shadow font-semibold"
          classNames={{
            months: "relative flex w-fit flex-col gap-2",
            month: "flex w-fit flex-col gap-2",
            table: "w-fit border-collapse",
            day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
            day_today: "font-bold",
            caption_label: "text-lg font-semibold",
          }}
        />
        <SlotList
          availableSlots={availableSlots}
          selectedSlot={selectedSlot}
          onSlotSelect={onSlotSelect}
          slotsLoading={slotsLoading}
          slotsError={slotsError}
          selectedDate={selectedDate}
          columns={1}
          selectingSlot={selectingSlot}
        />
      </div>

      <div className="hidden lg:block xl:hidden py-5">
        <div className="grid grid-cols-12 gap-4 place-items-center py-5">
          <div className="col-span-6 mx-auto">
            <Calendar
              {...calendarShared}
              className="w-full h-full border rounded-md shadow font-semibold"
              classNames={{
                day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100",
                month: "space-y-4 text-xl",
                day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
                day_today: "font-bold",
                caption_label: "text-lg font-semibold",
              }}
            />
          </div>
          <div className="col-span-6 mx-auto w-full">
            <SlotList
              availableSlots={availableSlots}
              selectedSlot={selectedSlot}
              onSlotSelect={onSlotSelect}
              slotsLoading={slotsLoading}
              slotsError={slotsError}
              selectedDate={selectedDate}
              columns={2}
              selectingSlot={selectingSlot}
            />
          </div>
        </div>
      </div>

      <div className="hidden xl:block 2xl:hidden py-5">
        <div className="grid grid-cols-12 gap-4 place-items-center py-5">
          <div className="col-span-6 mx-auto">
            <Calendar
              {...calendarShared}
              className="border rounded-md shadow font-semibold"
              classNames={{
                month: "space-y-4 text-xl",
                day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
                day_today: "font-bold",
                caption_label: "text-lg font-semibold",
              }}
            />
          </div>
          <div className="col-span-6 mx-auto ps-5 w-full">
            <SlotList
              availableSlots={availableSlots}
              selectedSlot={selectedSlot}
              onSlotSelect={onSlotSelect}
              slotsLoading={slotsLoading}
              slotsError={slotsError}
              selectedDate={selectedDate}
              columns={2}
              selectingSlot={selectingSlot}
            />
          </div>
        </div>
      </div>

      <div className="hidden xl:hidden 2xl:block py-5">
        <div className="grid grid-cols-12 gap-4 place-items-center py-5">
          <div className="col-span-6 mx-auto">
            <Calendar
              {...calendarShared}
              className="w-full h-full border rounded-md shadow font-semibold"
              classNames={{
                day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100",
                month: "space-y-4 text-xl",
                day_selected: "bg-[#8C2703] text-white hover:bg-[#8C2703]",
                day_today: "font-bold",
                caption_label: "text-lg font-semibold",
              }}
            />
          </div>
          <div className="col-span-6 mx-auto ps-5 w-full">
            <SlotList
              availableSlots={availableSlots}
              selectedSlot={selectedSlot}
              onSlotSelect={onSlotSelect}
              slotsLoading={slotsLoading}
              slotsError={slotsError}
              selectedDate={selectedDate}
              columns={2}
              selectingSlot={selectingSlot}
            />
          </div>
        </div>
      </div>
    </>
  );
}
