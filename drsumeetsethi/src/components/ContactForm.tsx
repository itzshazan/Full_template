"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/config/site";

/**
 * Set this to your form endpoint (e.g. "https://formspree.io/f/xxxx").
 * While empty, the form runs in demo mode and nothing is sent.
 */
const FORM_ENDPOINT = "";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!FORM_ENDPOINT) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(res.statusText);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const note = {
    idle: "",
    sending: "Sending…",
    sent: FORM_ENDPOINT
      ? "Thank you! We'll get back to you shortly."
      : "Thank you! (Demo mode — set FORM_ENDPOINT in src/components/ContactForm.tsx to receive messages.)",
    error: "Sorry, something went wrong. Please call us instead.",
  }[status];

  return (
    <form className="contact-form reveal" onSubmit={onSubmit}>
      <span className="eyebrow">Contact Us Anytime</span>
      <h2>Request An Appointment</h2>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="name" required />
        </div>
        <div className="field">
          <label htmlFor="f-email">Your Email</label>
          <input id="f-email" name="email" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Your Number</label>
          <input id="f-phone" name="phone" type="tel" required />
        </div>
        <div className="field">
          <label htmlFor="f-treatment">Select Treatment</label>
          <select id="f-treatment" name="treatment" defaultValue="">
            <option value="">Select Treatment</option>
            {[...SITE.services, ...SITE.conditions].map((t) => (
              <option key={t.id}>{t.title}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="f-msg">Message</label>
          <textarea id="f-msg" name="message" />
        </div>
        <div className="full">
          <button className="btn btn-red" type="submit" disabled={status === "sending"}>Send Message</button>
        </div>
      </div>
      <p className="form-note" aria-live="polite">{note}</p>
    </form>
  );
}
