import Image from "next/image";
import { boxStyles } from "data/content";

export default function BoxStyles() {
  return (
    <section className="mx-auto mt-16 w-full max-w-[1440px] px-4 md:mt-20 md:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-[38px]">
          Choose Your Christmas Box Style.
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-[#111111] md:text-[15px]">
          No matter the product type your business deals in, we are sure to have
          a suitable packaging solution for you.
        </p>
      </div>

      <div className="mt-10 grid gap-2.5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {boxStyles.map((b) => (
          <article
            key={b.title}
            className="overflow-hidden rounded-[20px] border border-neutral-300 bg-white"
          >
            <div className="relative aspect-[5/4]">
              <Image
                src={b.image}
                alt={b.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                {b.text}
              </p>
              <a
                href="#quote"
                className="mt-3 inline-block text-[13px] text-blue-700 underline"
              >
                Get Custom Quote
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
