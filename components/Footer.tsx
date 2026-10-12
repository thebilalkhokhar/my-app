import Image from "next/image";

const certifications = ["f1", "f2", "f3", "f4", "f5", "f6"];

function SocialIcon({ name }: { name: "Facebook" | "Instagram" | "Pinterest" | "LinkedIn" }) {
  if (name === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "Pinterest") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2.5a9.5 9.5 0 0 0-3.46 18.35c-.03-.78-.01-1.72.19-2.57l1.39-5.89s-.35-.7-.35-1.73c0-1.62.94-2.83 2.12-2.83 1 0 1.49.75 1.49 1.65 0 1-.64 2.5-.97 3.89-.28 1.16.58 2.1 1.72 2.1 2.07 0 3.66-2.19 3.66-5.35 0-2.8-2.02-4.76-4.9-4.76-3.34 0-5.3 2.5-5.3 5.09 0 1.01.39 2.1.87 2.69a.35.35 0 0 1 .08.34l-.32 1.3c-.05.21-.17.26-.39.16-1.45-.68-2.35-2.81-2.35-4.52 0-3.68 2.67-7.06 7.7-7.06 4.04 0 7.18 2.88 7.18 6.73 0 4.02-2.53 7.25-6.05 7.25-1.18 0-2.3-.62-2.69-1.35l-.73 2.78c-.26 1.02-.97 2.29-1.45 3.07A9.5 9.5 0 1 0 12 2.5Z" />
      </svg>
    );
  }

  return (
    <span aria-hidden="true" className="text-sm font-bold leading-none">
      {name === "Facebook" ? "f" : "in"}
    </span>
  );
}

export default function Footer() {
  const socialLinks: Array<"Facebook" | "Instagram" | "Pinterest" | "LinkedIn"> = [
    "Facebook",
    "Instagram",
    "Pinterest",
    "LinkedIn",
  ];

  return (
    <footer className="mt-16 bg-ink text-white">
      <div className="mx-auto w-full max-w-360 px-4 pb-6 pt-8 sm:px-6 md:px-8 md:pt-10">
        <div className="flex justify-center">
          <Image
            src="/images/logo-white.png"
            alt="Print247"
            width={184}
            height={45}
            className="h-9 w-auto"
          />
        </div>

        <dl className="mx-auto mt-8 grid max-w-3xl gap-4 rounded-2xl border border-dashed border-white/50 px-5 py-4 text-xs sm:grid-cols-3 sm:gap-0">
          <div className="sm:border-r sm:border-white/50 sm:pr-6">
            <dt className="text-[10px] uppercase text-white/70">Phone</dt>
            <dd className="mt-1">
              <a href="tel:+18328073429" className="hover:underline">
                +1 (832) 807-3429
              </a>
            </dd>
          </div>
          <div className="sm:px-6">
            <dt className="text-[10px] uppercase text-white/70">Email</dt>
            <dd className="mt-1">
              <a href="mailto:support@print247.us" className="hover:underline">
                support@print247.us
              </a>
            </dd>
          </div>
          <div className="sm:border-l sm:border-white/50 sm:pl-6">
            <dt className="text-[10px] uppercase text-white/70">Address</dt>
            <dd className="mt-1">
              1631 Cottonwood School Rd, Rosenberg, TX 77471, USA
            </dd>
          </div>
        </dl>

        <nav className="mt-8 flex justify-center gap-3" aria-label="Social media">
          {socialLinks.map((name) => (
            <span
              key={name}
              aria-label={name}
              role="img"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white"
            >
              <SocialIcon name={name} />
            </span>
          ))}
        </nav>

        <div className="mt-8 text-center">
          <p className="text-[9px] uppercase text-white/70">Certified by</p>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-4">
            {certifications.map((name) => (
              <Image
                key={name}
                src={`/images/${name}.png`}
                alt={`Certification ${name.slice(1)}`}
                width={76}
                height={44}
                className="h-9 w-15 object-contain sm:h-11 sm:w-19"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-[10px] text-white/75 md:flex-row">
          <p>Print247.us © 2026. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>We accept all major credit cards</span>
            <span className="relative h-4 w-28">
              <Image
                src="/images/f-payment.png"
                alt="Accepted payment methods"
                fill
                className="object-contain"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
