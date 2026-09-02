import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATION_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "REVALIDATION_SECRET is not configured" },
      { status: 500 },
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { tag?: string; path?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (body.tag) {
    revalidateTag(body.tag, "max");
  }

  if (body.path) {
    revalidatePath(body.path);
  }

  if (!body.tag && !body.path) {
    revalidateTag("glossary", "max");
    revalidatePath("/glossary", "layout");
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
