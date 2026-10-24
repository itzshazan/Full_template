"use client";

import { useState } from "react";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };
type Errors = Partial<Record<"name" | "email" | "phone" | "subject" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Appointment / enquiry form. `variant="compact"` is the two-column home-page
 * form; `"full"` is the contact-page form with a subject field.
 */
export function ContactForm({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Errors>({});
  const full = variant === "full";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please enter your name";
    if (!EMAIL_RE.test(data.email ?? "")) next.email = "Please enter your valid email";
    if (!data.phone?.trim()) next.phone = "Please enter your phone number";
    if (full && !data.subject?.trim()) next.subject = "Please enter a subject";
    if (!data.message?.trim()) next.message = "Please enter your message";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong");
      form.reset();
      setStatus({ kind: "ok", message: "Thank you! We will get back to you shortly." });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong" });
    }
  }

  const field = (name: keyof Errors, el: React.ReactNode, label?: string) => (
    <div className={`row${errors[name] ? " has-error" : ""}`}>
      {label && <label htmlFor={`${variant}-${name}`}>{label}</label>}
      {el}
      {errors[name] && <p className="field-error">{errors[name]}</p>}
    </div>
  );

  const input = (name: keyof Errors, placeholder: string, type = "text") => (
    <input
      id={`${variant}-${name}`}
      name={name}
      type={type}
      placeholder={full ? undefined : placeholder}
      aria-invalid={!!errors[name]}
      autoComplete={name === "subject" ? "off" : name === "phone" ? "tel" : name}
    />
  );

  const textarea = (
    <textarea id={`${variant}-message`} name="message" placeholder={full ? undefined : "Message"} aria-invalid={!!errors.message} />
  );

  const feedback = status.message && (
    <p className={`form-status form-status--${status.kind}`} role="status">
      {status.message}
    </p>
  );

  const submit = (
    <input type="submit" value={status.kind === "sending" ? "Sending…" : full ? "Submit" : "Submit Your Query"} disabled={status.kind === "sending"} />
  );

  if (full) {
    return (
      <form className="contact-form-full" onSubmit={onSubmit} noValidate>
        <div className="grid2">
          {field("name", input("name", "Name"), "Name*")}
          {field("email", input("email", "Email", "email"), "Email*")}
          {field("phone", input("phone", "Phone", "tel"), "Phone*")}
          {field("subject", input("subject", "Subject"), "Subject*")}
        </div>
        {field("message", textarea, "Message*")}
        <div className="row submit">{submit}</div>
        {feedback}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h3>Request your consultation today!</h3>
      <div className="form-cols">
        <div className="fleft">
          {field("name", input("name", "Your Name"))}
          {field("email", input("email", "Email Address", "email"))}
          {field("phone", input("phone", "Phone Number", "tel"))}
        </div>
        <div className="fright">
          {field("message", textarea)}
          <div className="row">{submit}</div>
        </div>
      </div>
      {feedback}
    </form>
  );
}
