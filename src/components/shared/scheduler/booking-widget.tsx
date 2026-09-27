"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  firstSelectableBusinessDay,
  isSelectableBusinessDay,
  listNextBusinessDayKeys,
  toDateKey,
} from "@/lib/booking/scarcity";
import type { TimeSlot } from "./state/types";

const MAX_ATTEMPTS = 4;
const RETRY_DELAY_MS = 1200;

interface BookingWidgetProps {
  selectedDate: string | null;
  onDateChange: (date: string) => void;
  onSlotsLoading: () => void;
  onSlotsLoaded: (slots: TimeSlot[]) => void;
  onSlotsError: () => void;
  slotsLoading: boolean;
}

interface SlotListProps {
  availableSlots: TimeSlot[];
  selectedSlot: TimeSlot | null;
  onSlotSelect: (slot: TimeSlot) => void;
  slotsLoading: boolean;
  slotsError: boolean;
  selectedDate: string | null;
  selectingSlot?: boolean;
}

/**
 * Rendered as its own row of the scheduler grid rather than beside the
 * calendar, so every slot for the day is laid out across the full content
 * width. All of them show: there is no longer a reveal control, so a limit
 * here would put times permanently out of reach.
 */
export function SlotList({
  availableSlots,
  selectedSlot,
  onSlotSelect,
  slotsLoading,
  slotsError,
  selectedDate,
  selectingSlot,
}: Readonly<SlotListProps>): React.JSX.Element {
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
        <div
          className={cn(
            "grid grid-cols-2 gap-2 transition-opacity duration-200 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6",
            (slotsLoading || selectingSlot) &&
              "opacity-40 pointer-events-none",
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
      )}
    </div>
  );
}

export function BookingWidget({
  selectedDate,
  onDateChange,
  onSlotsLoading,
  onSlotsLoaded,
  onSlotsError,
  slotsLoading,
}: Readonly<BookingWidgetProps>): React.JSX.Element {
  const attemptRef = useRef(0);
  const cancelledRef = useRef(false);

  const allowedDayKeys = useMemo(() => listNextBusinessDayKeys(), []);
  const allowedSet = useMemo(() => new Set(allowedDayKeys), [allowedDayKeys]);

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

  return (
    <div
      className={cn(
        "w-full transition-opacity duration-200",
        slotsLoading && "opacity-80",
      )}
    >
      {/*
        Every colour here is explicit. The calendar sits on the scheduler's rust
        ground with no surface of its own, and the shadcn defaults it would
        otherwise inherit (`text-muted-foreground`, the ghost button's inherited
        colour) resolve near-black against it — which is why the selectable days
        and the month label read as missing until hover paints a background
        behind them. `selected` and `today` are the react-day-picker v9 keys;
        the v8 spellings this used before (`day_selected`, `day_today`,
        `day_button`) are silently ignored by v9 and styled nothing.
      */}
      <Calendar
        mode="single"
        selected={selectedDateObj}
        onSelect={handleDateSelect}
        disabled={isDisabled}
        startMonth={startMonth}
        endMonth={endMonth}
        className="mx-auto w-fit max-w-full rounded-md border border-white/20 font-semibold text-white shadow lg:mx-0 lg:[--cell-size:--spacing(10)]"
        classNames={{
          months: "relative flex w-fit max-w-full flex-col gap-2",
          month: "flex w-fit max-w-full flex-col gap-2",
          table: "w-fit max-w-full border-collapse",
          caption_label: "select-none text-base font-semibold text-white lg:text-lg",
          weekday:
            "flex-1 select-none text-[0.8rem] font-normal text-white/70",
          day: "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center text-white select-none",
          selected: "rounded-(--cell-radius) bg-[#8C2703] text-white",
          today: "rounded-(--cell-radius) font-bold text-white",
          disabled: "text-white/40 opacity-100",
          outside: "text-white/30 opacity-100",
        }}
      />
    </div>
  );
}
