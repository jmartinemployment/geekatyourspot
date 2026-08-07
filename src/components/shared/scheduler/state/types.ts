export interface TimeSlot {
  startTime: string;
  endTime: string;
  isoStart: string;
}

export interface Booking {
  date: string;
  slot: TimeSlot;
  timezone: 'America/New_York';
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
