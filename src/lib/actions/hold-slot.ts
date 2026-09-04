"use server";

import {
  createSoftHold,
  releaseSoftHold,
} from "@/services/google-calendar.service";

export interface HoldSlotResult {
  success: boolean;
  holdEventId?: string;
  expiresAt?: string;
  error?: string;
}

export async function holdSlot(isoStart: string): Promise<HoldSlotResult> {
  try {
    if (!isoStart.trim()) {
      return { success: false, error: "Missing slot" };
    }
    const hold = await createSoftHold(isoStart);
    return {
      success: true,
      holdEventId: hold.holdEventId,
      expiresAt: hold.expiresAt,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Hold failed";
    return { success: false, error: message };
  }
}

export async function releaseSlotHold(
  holdEventId: string | null | undefined,
): Promise<void> {
  if (!holdEventId) return;
  await releaseSoftHold(holdEventId);
}
