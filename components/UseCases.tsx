import Image from "next/image";
import { useCases } from "data/content";

export default function UseCases() {
  return (
    <section className="mx-auto mt-16 w-full max-w-[1440px] px-4 md:px-8">
      <h2 className="mx-auto max-w-[720px] text-center text-3xl font-bold leading-[1.15] tracking-tight md:text-[38px]">
        Christmas Boxes for Every Brand That Offers Gift-Ready Products.
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.24fr] lg:gap-11">
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl">
          <Image
            src="/images/usecase.png"
            alt="Christmas boxes for different brands"
            fill
            sizes="(max-width: 1024px) 100vw, 620px"
            className="object-cover"
          />
        </div>

        <ol className="flex flex-col gap-2.5">
          {useCases.map((u, i) => (
            <li
              key={u.title}
              className="flex items-center gap-3 rounded-full bg-[#14452f] py-4 pl-3 pr-6 text-white lg:pr-8"
            >
              <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full bg-[#eedca8] text-lg font-bold text-[#b4110e]">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold leading-[22px]">
                  {u.title}
                </h3>
                <p className="mt-[3px] text-sm leading-[21px] text-white/90 lg:whitespace-pre-line">
                  {u.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
