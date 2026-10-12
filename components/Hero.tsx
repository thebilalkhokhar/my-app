import Image from "next/image";
import QuoteForm from "./QuoteForm";

const bullets = [
  "Plenty of customizations with low MOQ of 1000 pieces",
  "Free design support and online preview before printing",
  "12 - 15 business days turnaround with free shipping in the USA",
];

const heroImages = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
];

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8">
      <div className="grid gap-10 rounded-[35px] bg-[#1d4a35] p-6 text-white md:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <h1 className="text-3xl font-semibold leading-[1.2] md:text-[40px]">
            Wrap Your Products in Print247&apos;s Gift-Ready, Branded Christmas
            Boxes
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            From folding cartons to kraft boxes, we customize every Christmas
            gift box as per your branding and product presentation needs. All
            box solutions are made right here in Texas.
          </p>

          <ul className="mt-5 space-y-3 text-base">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#b3121b] text-xs"
                >
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
            {heroImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[5/4] overflow-hidden rounded-[10px]"
              >
                <Image
                  src={src}
                  alt={`Custom Christmas box example ${i + 1}`}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 30vw, 220px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
