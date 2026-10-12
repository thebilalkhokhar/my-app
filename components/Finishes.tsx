import Image from "next/image";
import { finishes } from "data/content";

export default function Finishes() {
  return (
    <section className="mx-auto mt-16 w-full max-w-[1440px] px-4 md:px-8">
      <div className="text-center">
        <h2 className="mx-auto max-w-[640px] text-3xl font-bold leading-[1.15] tracking-tight md:text-[38px]">
          Select Finish to Make Christmas Bags Feel Premium.
        </h2>
        <p className="mx-auto mt-6 max-w-[665px] text-sm leading-6 text-neutral-600">
          Every finish can change how your bag feels in hand and looks on
          shelves. Pick one, or ask us which fits your product the best.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {finishes.map((f) => (
          <li
            key={f.name}
            className="overflow-hidden rounded-2xl border border-[#e3dccb] bg-[#fdf9f0]"
          >
            <div className="relative aspect-[6/5]">
              <Image
                src={f.image}
                alt={`${f.name} finish sample`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                className="object-cover"
              />
            </div>
            <div className="px-4 pb-5 pt-3">
              <h3 className="text-[13px] font-bold leading-[18px]">{f.name}</h3>
              <p className="mt-0.5 text-[11px] leading-4 text-neutral-600">
                {f.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
