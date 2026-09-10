export type PartnerFormValues = {
  organization: string;
  contactName: string;
  email: string;
  partnerType: string;
  message: string;
};

export type PartnerFormErrors = Partial<Record<keyof PartnerFormValues, string>>;

export const emptyPartnerForm: PartnerFormValues = {
  organization: "",
  contactName: "",
  email: "",
  partnerType: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validatePartnerForm(values: PartnerFormValues): PartnerFormErrors {
  const errors: PartnerFormErrors = {};

  if (!values.organization.trim()) errors.organization = "Organization is required.";
  if (!values.contactName.trim()) errors.contactName = "Contact name is required.";
  if (!values.email.trim()) errors.email = "Work email is required.";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "Enter a valid work email.";
  if (!values.partnerType) errors.partnerType = "Choose a partner type.";

  return errors;
}
