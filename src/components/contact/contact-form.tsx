"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/actions/submit-contact";
import { gtmClickId } from "@/lib/gtm/link-id";

type SubmitState = "idle" | "submitting" | "sent" | "error";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.exec(email) !== null;
}

function isValidPhone(phone: string): boolean {
  return phone.replace(/\D/g, "").length >= 10;
}

const FIELD = "bg-white text-[#0B162A] placeholder:text-slate-500";

/**
 * The contact page's message form. It posts through the submitContact server action, which the
 * security policy's form-action 'self' allows. `idSuffix` keeps the field ids unique between the
 * phone and desktop copies of the page.
 */
export function ContactForm({ idSuffix = "" }: Readonly<{ idSuffix?: string }>): React.JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const canSubmit =
    firstName.trim().length >= 2 &&
    lastName.trim().length >= 2 &&
    isValidPhone(phone) &&
    isValidEmail(email.trim()) &&
    message.trim().length > 0;

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitState("submitting");
    const result = await submitContact({ firstName, lastName, phone, email, message, website });
    setSubmitState(result.success ? "sent" : "error");
  }

  if (submitState === "sent") {
    return (
      <p className="pt-5 text-xl text-white shadow-text" role="status">
        Thank you. Your message is on its way, and Jeff will reply to the email address you gave.
      </p>
    );
  }

  const id = (name: string) => `contact-${name}${idSuffix}`;

  return (
    <form onSubmit={(e) => void handleSubmit(e)} className="flex flex-col gap-5 pt-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={id("first-name")} className="text-white">First name</Label>
          <Input
            id={id("first-name")}
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-required="true"
            className={FIELD}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={id("last-name")} className="text-white">Last name</Label>
          <Input
            id={id("last-name")}
            type="text"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            aria-required="true"
            className={FIELD}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={id("email")} className="text-white">Email address</Label>
          <Input
            id={id("email")}
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-required="true"
            className={FIELD}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={id("phone")} className="text-white">Phone number</Label>
          <Input
            id={id("phone")}
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-required="true"
            className={FIELD}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor={id("message")} className="text-white">Message</Label>
        <Textarea
          id={id("message")}
          rows={6}
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-required="true"
          className={`${FIELD} min-h-40`}
        />
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input
          id={id("website")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {submitState === "error" && (
        <p className="text-base font-bold text-white shadow-text" role="alert">
          Your message could not be sent. Please call (561) 526-3512 instead.
        </p>
      )}

      <div>
        <button
          id={gtmClickId(["contact", `send${idSuffix}`])}
          type="submit"
          disabled={!canSubmit || submitState === "submitting"}
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitState === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
