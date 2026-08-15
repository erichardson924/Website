/**
 * Contact form — two paths: request a consult, or say hi.
 *
 * There is no server behind this yet. Submit opens the visitor's email app
 * with a message addressed to the address in lib/content.ts, so you receive
 * it in Gmail. The address is also shown as a normal mailto link.
 */

"use client";

import { useState, type FormEvent } from "react";
import { contact, site } from "@/lib/content";

type Mode = "consult" | "hello";

const inputClass =
  "mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-clay";

export function ContactForm() {
  const [mode, setMode] = useState<Mode>("consult");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [stage, setStage] = useState(contact.stages[0].value);
  const [timeline, setTimeline] = useState(contact.timelines[0].value);
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function toggleService(id: string) {
    setServices((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSent(false);

    if (!name.trim() || !email.trim()) {
      setError("Please add your name and email.");
      return;
    }

    if (mode === "consult" && services.length === 0) {
      setError("Choose at least one service, or “Not sure yet.”");
      return;
    }

    if (mode === "hello" && !message.trim()) {
      setError("Write a short note so I know how to reply.");
      return;
    }

    const serviceLabels = contact.services
      .filter((service) => services.includes(service.id))
      .map((service) => service.label);
    const stageLabel =
      contact.stages.find((item) => item.value === stage)?.label ?? stage;
    const timelineLabel =
      contact.timelines.find((item) => item.value === timeline)?.label ??
      timeline;

    const subject =
      mode === "consult"
        ? `Consult request from ${name.trim()}`
        : `Hello from ${name.trim()}`;

    const body =
      mode === "consult"
        ? [
            `Name: ${name.trim()}`,
            `Email: ${email.trim()}`,
            `Services: ${serviceLabels.join(", ")}`,
            `Where they are: ${stageLabel}`,
            `Timing: ${timelineLabel}`,
            notes.trim() ? `Notes:\n${notes.trim()}` : "Notes: (none)",
          ].join("\n")
        : [
            `Name: ${name.trim()}`,
            `Email: ${email.trim()}`,
            "",
            message.trim(),
          ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <div>
      <div
        className="flex gap-2"
        role="tablist"
        aria-label="How would you like to get in touch"
      >
        <ModeButton
          selected={mode === "consult"}
          onClick={() => {
            setMode("consult");
            setError("");
            setSent(false);
          }}
        >
          Request a consult
        </ModeButton>
        <ModeButton
          selected={mode === "hello"}
          onClick={() => {
            setMode("hello");
            setError("");
            setSent(false);
          }}
        >
          Say hi
        </ModeButton>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-ink/65">
        {mode === "consult" ? contact.consultHelp : contact.helloHelp}
      </p>

      <form onSubmit={onSubmit} className="mt-10 space-y-8" noValidate>
        <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClass}
            required
          />
        </label>

        <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClass}
            required
          />
        </label>

        {mode === "consult" ? (
          <>
            <fieldset>
              <legend className="text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
                What do you need?
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {contact.services.map((service) => {
                  const checked = services.includes(service.id);
                  return (
                    <label
                      key={service.id}
                      className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors ${
                        checked
                          ? "border-clay bg-sand/60"
                          : "border-ink/15 hover:border-ink/35"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleService(service.id)}
                        className="size-4 accent-clay"
                      />
                      {service.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
                Where are you in the process?
                <select
                  value={stage}
                  onChange={(event) => setStage(event.target.value)}
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  {contact.stages.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
                Timing
                <select
                  value={timeline}
                  onChange={(event) => setTimeline(event.target.value)}
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  {contact.timelines.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
              Anything to know before we talk?
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={4}
                placeholder="Optional"
                className={`${inputClass} resize-y`}
              />
            </label>
          </>
        ) : (
          <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-olive">
            Message
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              className={`${inputClass} resize-y`}
              required
            />
          </label>
        )}

        {error ? (
          <p className="text-sm text-clay" role="alert">
            {error}
          </p>
        ) : null}

        {sent ? (
          <p className="text-sm leading-relaxed text-olive">
            Your email app should open with the note addressed to{" "}
            <a href={`mailto:${site.email}`} className="underline decoration-olive/40">
              {site.email}
            </a>
            . If nothing opens, send it there directly.
          </p>
        ) : null}

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-opacity hover:opacity-80"
        >
          {mode === "consult" ? "Send consult request" : "Send note"}
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}

function ModeButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onClick}
      className={`border px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors ${
        selected
          ? "border-ink bg-ink text-cream"
          : "border-ink/20 text-ink hover:border-ink/50"
      }`}
    >
      {children}
    </button>
  );
}
