import { NextRequest, NextResponse } from "next/server";
import { getSlotsForDate } from "@/services/google-calendar.service";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const date = request.nextUrl.searchParams.get("date")?.trim();

  if (!date || !DATE_RE.test(date)) {
    return NextResponse.json(
      { message: "Missing or invalid date (expected YYYY-MM-DD)" },
      { status: 400 },
    );
  }

  try {
    const slots = await getSlotsForDate(date);
    return NextResponse.json({ slots });
  } catch (error) {
    console.error("[calendar] available-slots failed:", error);
    return NextResponse.json(
      { message: "Could not load availability" },
      { status: 500 },
    );
  }
}
