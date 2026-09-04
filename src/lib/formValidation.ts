export const UK_PHONE_PATTERN = String.raw`(?:\+44[ ()-]*\d(?:[ ()-]*\d){9}|0044[ ()-]*\d(?:[ ()-]*\d){9}|0\d(?:[ ()-]*\d){9})`;
export const UK_PHONE_MESSAGE = "Enter a valid UK phone number, for example 07123 456789 or +44 7123 456789.";

export function isValidUkPhone(value: FormDataEntryValue | null): boolean {
  if (typeof value !== "string") return false;
  const normalized = value.replace(/[\s().-]/g, "");
  return /^(?:\+44\d{10}|0044\d{10}|0\d{10})$/.test(normalized);
}
