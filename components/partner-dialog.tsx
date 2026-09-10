"use client";

import { CheckCircle, X } from "@phosphor-icons/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { emptyPartnerForm, PartnerFormErrors, PartnerFormValues, validatePartnerForm } from "@/lib/partner-form";

const partnerTypes = ["Bank", "Service provider", "Merchant", "Payment agent", "Government", "Other"];

export function PartnerDialog() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<PartnerFormValues>(emptyPartnerForm);
  const [errors, setErrors] = useState<PartnerFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handlePartnerTrigger(event: MouseEvent) {
      const target = event.target as Element | null;
      if (!target?.closest("[data-partner-trigger]")) return;
      event.preventDefault();
      setOpen(true);
      setSubmitted(false);
    }
    document.addEventListener("click", handlePartnerTrigger);
    return () => document.removeEventListener("click", handlePartnerTrigger);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  function updateField(field: keyof PartnerFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validatePartnerForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div id="partner-inquiry" className="hs-overlay partner-overlay open" role="presentation" onMouseDown={(event) => {
      if (event.currentTarget === event.target) setOpen(false);
    }}>
      <section className="partner-dialog" role="dialog" aria-modal="true" aria-labelledby="partner-title">
        <button ref={closeButtonRef} className="dialog-close" type="button" aria-label="Close partner inquiry" onClick={() => setOpen(false)}>
          <X aria-hidden="true" size={22} />
        </button>
        {submitted ? (
          <div className="success-state" role="status">
            <CheckCircle aria-hidden="true" size={52} weight="fill" />
            <p className="eyebrow">INQUIRY SAVED LOCALLY</p>
            <h2 id="partner-title">Your inquiry is ready for our partnership team.</h2>
            <p>This prototype does not transmit data. In production, this confirmation would connect to YARQINPAY&apos;s partnership workflow.</p>
            <button className="button button-primary" type="button" onClick={() => setOpen(false)}>Close</button>
          </div>
        ) : (
          <>
            <p className="eyebrow">BECOME A PARTNER</p>
            <h2 id="partner-title">Let&apos;s build the next payment channel.</h2>
            <p className="dialog-intro">Tell us where you operate and what you want to connect.</p>
            <form onSubmit={submitInquiry} noValidate>
              <div className="form-grid">
                <Field label="Organization" name="organization" value={values.organization} error={errors.organization} onChange={updateField} />
                <Field label="Contact name" name="contactName" value={values.contactName} error={errors.contactName} onChange={updateField} />
              </div>
              <label className="form-field">
                <span>Work email</span>
                <input type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                {errors.email ? <small id="email-error" className="form-error">{errors.email}</small> : null}
              </label>
              <label className="form-field">
                <span>Partner type</span>
                <select value={values.partnerType} onChange={(event) => updateField("partnerType", event.target.value)} aria-invalid={Boolean(errors.partnerType)} aria-describedby={errors.partnerType ? "partnerType-error" : undefined}>
                  <option value="">Choose one</option>
                  {partnerTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
                {errors.partnerType ? <small id="partnerType-error" className="form-error">{errors.partnerType}</small> : null}
              </label>
              <label className="form-field">
                <span>What would you like to connect?</span>
                <textarea rows={3} value={values.message} onChange={(event) => updateField("message", event.target.value)} />
              </label>
              <button className="button button-primary dialog-submit" type="submit">Send inquiry</button>
              <p className="form-note">Prototype only — no information is transmitted.</p>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

function Field({ label, name, value, error, onChange }: {
  label: string;
  name: "organization" | "contactName";
  value: string;
  error?: string;
  onChange: (field: keyof PartnerFormValues, value: string) => void;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="form-field">
      <span>{label}</span>
      <input value={value} onChange={(event) => onChange(name, event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
      {error ? <small id={errorId} className="form-error">{error}</small> : null}
    </label>
  );
}

