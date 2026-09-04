export interface TimeSlot {
  startTime: string;
  endTime: string;
  isoStart: string;
  tags?: string[];
}

export interface Booking {
  date: string;
  slot: TimeSlot;
  timezone: "America/New_York";
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface SlotHold {
  holdEventId: string;
  expiresAt: string; // ISO
}
