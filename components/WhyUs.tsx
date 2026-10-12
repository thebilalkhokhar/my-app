import Image from "next/image";
import { whyUs } from "data/content";

export default function WhyUs() {
  return (
    <section className="mx-auto mt-20 grid w-full max-w-[1440px] gap-10 px-4 md:mt-28 md:px-8 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:gap-6">
      <div>
        <h2 className="text-3xl font-bold leading-[1.2] tracking-tight md:text-[40px]">
          Why Businesses Trust Print247
          <br />
          for Christmas gift boxes?
        </h2>
        <p className="mt-7 max-w-[680px] text-[15px] leading-[1.4] text-[#111111]">
          We are a one stop solution your business needs to beat the market this
          Christmas season. Have a look to why brands trust us for their festive
          box packaging needs.
        </p>

        <ol className="mt-10 grid sm:grid-cols-2">
          {whyUs.map((w, i) => (
            <li
              key={w.n}
              className={[
                "border-[#e3dccb]",
                i > 0 ? "border-t" : "",
                i === 1 ? "sm:border-t-0" : "",
                i % 2 === 1 ? "sm:border-l sm:pl-8" : "",
                i < 2 ? "py-6 sm:pb-8 sm:pt-4" : "py-6 sm:pb-9 sm:pt-8",
                "pl-5 pr-4",
              ].join(" ")}
            >
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-medium text-[#b3121b]">
                {w.n}
              </span>
              <h3 className="mt-5 text-base font-semibold">{w.title}</h3>
              <p className="mt-4 max-w-[390px] text-[15px] leading-[22px] text-[#333333]">
                {w.text}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative mx-auto aspect-[3/4] w-full max-w-[500px] overflow-hidden rounded-[14px] lg:mx-0">
        <Image
          src="/images/why.png"
          alt="Print247 Christmas gift box"
          fill
          sizes="(max-width: 1024px) 100vw, 500px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
