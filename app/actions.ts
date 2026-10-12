"use server";

export type QuoteState = { ok: boolean; message: string };

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const data = Object.fromEntries(formData.entries());

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const quantity = Number(data.quantity);

  if (name.length < 2) return { ok: false, message: "Please enter your full name." };
  if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, message: "Please enter a valid email." };
  if (!Number.isFinite(quantity) || quantity < 1000) {
    return { ok: false, message: "Minimum order quantity is 1,000 boxes." };
  }

  // TODO: send via Resend / Nodemailer or save to your DB / CRM.
  console.log("New quote request:", data);

  return { ok: true, message: "Thanks! We will reply with pricing within 1 business day." };
}
