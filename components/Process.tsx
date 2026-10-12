import { steps } from "data/content";

export default function Process() {
  return (
    <section className="mx-auto mt-20 w-full max-w-[1440px] px-4 md:px-8">
      <div className="rounded-3xl border border-neutral-800 px-4 py-10 md:rounded-[44px] md:px-10 md:py-16 xl:px-[70px]">
        <h2 className="mx-auto max-w-[620px] text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-[38px]">
          Design Your Branded Christmas Boxes In a Few Steps
        </h2>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[33px]">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div
                className={[
                  "flex flex-col items-center rounded-[18px] bg-white px-6 py-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
                  i % 2 === 0 ? "-rotate-[1.2deg]" : "rotate-[1.2deg]",
                ].join(" ")}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#b3121b] text-[13px] font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-[15px] font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[22px] text-neutral-600">
                  {s.text}
                </p>
              </div>

              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-full top-[34px] hidden h-[2px] w-[33px] bg-[repeating-linear-gradient(90deg,#1d4a35_0_4px,transparent_4px_7px)] lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
