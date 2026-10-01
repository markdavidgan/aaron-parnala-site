"use client";
import { useState, useRef, useEffect } from "react";
export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const confirmation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (submitted) {
      confirmation.current?.focus({ preventScroll: true });
      confirmation.current?.scrollIntoView({
        block: "center",
        behavior: "instant",
      });
    }
  }, [submitted]);
  if (submitted)
    return (
      <div
        ref={confirmation}
        tabIndex={-1}
        role="status"
        className="form-confirmation"
      >
        <span className="confirmation-mark" aria-hidden="true">
          ✓
        </span>
        <h2>
          A conversation,
          <br />
          imagined.
        </h2>
        <p>
          Your inquiry was simulated. Nothing has been sent or saved. For a real
          conversation, contact Aaron directly.
        </p>
        <a className="text-link" href="mailto:aaronparnala@gmail.com">
          Email Aaron
        </a>
        <button className="text-link" onClick={() => setSubmitted(false)}>
          Try the form again
        </button>
      </div>
    );
  return (
    <form
      className="inquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-pair">
        <label>
          Your name
          <input name="name" autoComplete="name" required placeholder="Name" />
        </label>
        <label>
          Email or phone
          <input name="contact" required placeholder="How to reach you" />
        </label>
      </div>
      <div className="form-pair">
        <label>
          What kind of space?
          <select name="type" defaultValue="Home">
            <option>Home</option>
            <option>Commercial / Clinic</option>
            <option>Hospitality / Cafe</option>
            <option>Office</option>
            <option>Fit-out</option>
            <option>Something else</option>
          </select>
        </label>
        <label>
          Location
          <input name="location" placeholder="City or neighborhood" />
        </label>
      </div>
      <div className="form-pair">
        <label>
          Approximate floor area
          <input name="area" placeholder="Square meters, if known" />
        </label>
        <label>
          When are you planning?
          <select name="timeline" defaultValue="Still exploring">
            <option>Still exploring</option>
            <option>Within 3 months</option>
            <option>Within 3–6 months</option>
            <option>Later this year</option>
          </select>
        </label>
      </div>
      <label>
        Tell us about your space
        <textarea
          name="vision"
          rows={5}
          placeholder="What is there now? What would you like it to become?"
        />
      </label>
      <div className="form-end">
        <p>
          This is a prototype.
          <br />
          No inquiry will be delivered.
        </p>
        <button type="submit" className="solid-button">
          Preview inquiry
        </button>
      </div>
    </form>
  );
}
