export type ContactSubmitResult =
  | { ok: true }
  | { error: string; ok: false };

const DEFAULT_CONTACT_SUBMIT_ERROR = "Something went wrong. Please try again.";

export async function submitContactForm(form: HTMLFormElement): Promise<ContactSubmitResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: new FormData(form),
  });

  if (response.ok) {
    return { ok: true };
  }

  const result = (await response.json().catch(() => null)) as { error?: string } | null;
  return {
    error: result?.error ?? DEFAULT_CONTACT_SUBMIT_ERROR,
    ok: false,
  };
}
