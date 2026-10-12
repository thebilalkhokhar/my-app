import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto grid w-full max-w-[1760px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-4 md:px-8">
      <Link href="/" aria-label="Print247 home" className="flex-none">
        <Image
          src="/images/logo.png"
          alt="Print247"
          width={137}
          height={40}
          priority
          className="h-9 w-auto md:h-10"
        />
      </Link>

      <p className="hidden items-center gap-1.5 text-xs lg:flex">
        <span
          aria-label="Rated 4.8 out of 5"
          role="img"
          className="flex items-center gap-0.5 text-amber-400"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3 w-3"
              fill="currentColor"
            >
              <path d="M12 2.5 14.9 8.4l6.6 1-4.75 4.63 1.12 6.55L12 17.5l-5.87 3.08 1.12-6.55L2.5 9.4l6.6-1L12 2.5Z" />
            </svg>
          ))}
        </span>
        <span className="font-semibold">4.8</span>
        <span>from 5,000+ brands</span>
      </p>

      <div className="flex items-center justify-self-end gap-2">
        <a
          href="tel:+18328073429"
          className="hidden h-10 items-center rounded-full bg-brand px-5 text-xs font-medium text-white sm:inline-flex"
        >
          +1 (832) 807-3429
        </a>
        <a
          href="#quote"
          className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-xs font-medium text-white"
        >
          Get Custom Quote
        </a>
      </div>
    </header>
  );
}
