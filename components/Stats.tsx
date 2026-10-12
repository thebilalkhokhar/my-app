import { stats } from "data/content";

export default function Stats() {
  return (
    <section className="mx-auto mt-12 w-full max-w-[1440px] px-4 md:px-8">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-8 rounded-3xl border border-neutral-800 px-6 py-8 text-center md:grid-cols-4 md:rounded-[44px] md:px-14 md:py-10">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="text-3xl font-bold leading-[1.1] tracking-tight text-[#b3121b] md:text-[44px]">
              {s.value}
            </dd>
            <dt className="mt-1 text-sm text-[#111111] md:mt-2 md:text-base">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
