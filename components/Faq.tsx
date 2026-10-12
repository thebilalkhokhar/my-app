import { faqs } from "data/content";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="mx-auto mt-20 grid w-full max-w-360 grid-cols-1 gap-8 px-4 pb-16 md:grid-cols-[1fr_1.6fr] md:gap-12 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Left CTA Card */}
      <div className="flex flex-col justify-center rounded-2xl bg-forest p-6 text-white shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          Order Your Christmas
          <br />
          Boxes Bulk Now
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-white/85">
          Customize your Christmas gift boxes today by getting in touch with our
          packaging experts. They&apos;ll help you finalize all the box details,
          send you a preview, and commence production after approval.
        </p>

        <div className="mt-6 border-t border-white/15 pt-5">
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Get Custom Quote
          </a>
        </div>
      </div>

      {/* Right FAQ Accordion */}
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            open={i === 0}
            className="group rounded-xl border border-[#cfc7b9] bg-white px-5 py-4 shadow-sm transition-all"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[#252525] md:text-base [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>

              <span
                aria-hidden="true"
                className="relative flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#f4f1ea] transition-colors group-hover:bg-[#eae4d5]"
              >
                <span className="absolute h-0.5 w-3 bg-[#333]" />
                <span className="absolute h-3 w-0.5 bg-[#333] transition-transform duration-200 group-open:scale-y-0" />
              </span>
            </summary>

            <p className="mt-3 pr-6 text-sm leading-relaxed text-[#66615a]">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
