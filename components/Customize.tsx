import { customize } from "data/content";

export default function Customize() {
  return (
    <section className="mx-auto mt-[60px] w-full max-w-[1440px] px-4 md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-[32px] md:leading-[1.2]">
            Customize Every Detail of Your Christmas Boxes.
          </h2>
          <p className="mt-2 text-sm text-neutral-600 md:text-[15px]">
            Mix and match. Matching an existing pack? Send the spec sheet and we
            quote against it.
          </p>
        </div>
        <a
          href="#quote"
          className="inline-flex h-[49px] items-center rounded-full bg-[#b3121b] px-[30px] text-[15px] font-semibold text-white"
        >
          Get Custom Quote
        </a>
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-3">
        {customize.map((c) => (
          <div key={c.heading} className="rounded-2xl bg-white px-6 pb-5 pt-5">
            <h3 className="text-[15px] font-bold leading-5">{c.heading}</h3>
            <ul className="mt-2.5">
              {c.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-[#ebe4d4] py-[9px] text-[13px] leading-[18px] text-[#222222] last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
