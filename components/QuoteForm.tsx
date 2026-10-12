"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteState } from "app/actions";

const initial: QuoteState = { ok: false, message: "" };

const field =
  "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-[11px] outline-none focus:border-forest";
const label = "mb-1 block text-[10px] font-medium text-neutral-700";

export default function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, initial);

  return (
    <form
      id="quote"
      action={action}
      className="rounded-[18px] bg-white p-5 text-ink shadow-xl"
    >
      <h2 className="text-sm font-semibold">
        Start Your Branded Christmas Box Order
      </h2>
      <p className="mb-3 text-[10px] text-neutral-500">
        Submit a quote request for your bespoke Christmas boxes and get fast
        pricing
      </p>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="style" className={label}>
            Box style
          </label>
          <select
            id="style"
            name="style"
            className={field}
            defaultValue="two-piece"
          >
            <option value="two-piece">Two piece boxes</option>
            <option value="mailer">Mailer boxes</option>
            <option value="folding">Folding cartons</option>
            <option value="window">Window boxes</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className={label}>
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min={1000}
            placeholder="1,000 minimum"
            required
            className={field}
          />
        </div>
      </div>

      <div className="mt-2 grid grid-cols-4 gap-2">
        <div>
          <label htmlFor="width" className={label}>
            Width
          </label>
          <input
            id="width"
            name="width"
            type="number"
            min={1}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="height" className={label}>
            Height
          </label>
          <input
            id="height"
            name="height"
            type="number"
            min={1}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="depth" className={label}>
            Depth
          </label>
          <input
            id="depth"
            name="depth"
            type="number"
            min={1}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="unit" className={label}>
            Unit
          </label>
          <select id="unit" name="unit" className={field} defaultValue="in">
            <option value="in">In</option>
            <option value="cm">Cm</option>
            <option value="mm">Mm</option>
          </select>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="name" className={label}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>

      <div className="mt-2">
        <label htmlFor="email" className={label}>
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div className="mt-2">
        <label htmlFor="notes" className={label}>
          Additional information
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={2}
          placeholder="Have any special requirements for the Christmas boxes? List them here."
          className={field}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-3 w-full rounded-full bg-brand py-2.5 text-xs font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Sending..." : "Get A Free Custom Quote"}
      </button>

      {state.message && (
        <p
          role="status"
          className={`mt-2 text-[11px] ${state.ok ? "text-green-700" : "text-red-700"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
