import { describe, expect, it } from "vitest";
import { emptyPartnerForm, validatePartnerForm } from "./partner-form";

describe("validatePartnerForm", () => {
  it("requires organization, contact name, email, and partner type", () => {
    expect(validatePartnerForm(emptyPartnerForm)).toEqual({
      organization: "Organization is required.",
      contactName: "Contact name is required.",
      email: "Work email is required.",
      partnerType: "Choose a partner type.",
    });
  });

  it("rejects a malformed email", () => {
    expect(
      validatePartnerForm({
        ...emptyPartnerForm,
        organization: "Example Bank",
        contactName: "Amina",
        email: "amina-at-example",
        partnerType: "Bank",
      }),
    ).toEqual({ email: "Enter a valid work email." });
  });

  it("accepts a complete partner inquiry", () => {
    expect(
      validatePartnerForm({
        organization: "Example Bank",
        contactName: "Amina Rahimi",
        email: "amina@example.af",
        partnerType: "Bank",
        message: "We want to connect our branch network.",
      }),
    ).toEqual({});
  });
});
