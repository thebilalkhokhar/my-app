import Image from "next/image";
import { reviews } from "data/content";

function VerifiedIcon() {
  return (
    <svg
      aria-hidden
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-none"
    >
      <circle cx="8" cy="8" r="7" stroke="#4caf50" strokeWidth="1" />
      <path
        d="M5 8.2l2 2 4-4.2"
        stroke="#4caf50"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className="flex items-center gap-0.5 text-amber-500"
    >
      {Array.from({ length: 5 }, (_, index) => {
        const isFull = index < Math.floor(rating);
        const isHalf = !isFull && index < rating;

        return (
          <svg
            key={index}
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
          >
            <path
              d="M12 2.5 14.9 8.4l6.6 1-4.75 4.63 1.12 6.55L12 17.5l-5.87 3.08 1.12-6.55L2.5 9.4l6.6-1L12 2.5Z"
              fill={isFull ? "currentColor" : "#d6d3d1"}
            />
            {isHalf && (
              <path
                d="M12 2.5 14.9 8.4l6.6 1-4.75 4.63 1.12 6.55L12 17.5l-5.87 3.08 1.12-6.55L2.5 9.4l6.6-1L12 2.5Z"
                fill="currentColor"
                clipPath="inset(0 50% 0 0)"
              />
            )}
          </svg>
        );
      })}
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="mx-auto mt-20 w-full max-w-[1440px] px-4 md:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight md:text-[38px]">
          What Our Christmas Box Customers Are Saying
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-sm leading-[25px] text-neutral-700">
          We have earned commendation from thousands of our satisfied clients.
          They have found us diligent and expert in our work. Check some below.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <div className="flex items-center gap-5">
          <span className="text-4xl font-normal leading-none">4.8</span>
          <div className="flex flex-col gap-1">
            <StarRating rating={4.8} />
            <span className="text-[11px] text-neutral-600">
              5000+ Satisfied Customers
            </span>
          </div>
        </div>

        <div className="flex h-[41px] items-center gap-10 rounded-full border border-neutral-400 px-6">
          <Image
            src="/images/trust-pilot.png"
            alt="Trustpilot"
            width={104}
            height={15}
            className="h-[15px] w-auto"
          />
          <Image
            src="/images/google-rating.png"
            alt="Google rating"
            width={102}
            height={15}
            className="h-[15px] w-auto"
          />
        </div>
      </div>

      <div className="mt-3 grid gap-2.5 md:grid-cols-2">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="rounded-xl border border-[#e3dccb] bg-white px-6 pb-9 pt-7 md:px-8"
          >
            <figcaption className="text-lg font-medium leading-6">
              {r.name}
            </figcaption>
            <div className="mt-3">
              <StarRating rating={5} />
            </div>
            <blockquote className="mt-4 text-[13px] leading-[27px] text-neutral-600">
              {r.text}
            </blockquote>
            <p className="mt-3 flex items-center gap-1.5 text-[11px] leading-4 text-neutral-600">
              <VerifiedIcon />
              Verified Buyer
            </p>
          </figure>
        ))}
      </div>
    </section>
  );
}
