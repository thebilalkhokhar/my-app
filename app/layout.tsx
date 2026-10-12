import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Christmas Gift Boxes | Print247",
  description:
    "Branded Christmas boxes made in Texas. Low MOQ, free design support and online preview, 12-15 day turnaround with free shipping in the USA.",
  openGraph: {
    title: "Custom Christmas Gift Boxes | Print247",
    description:
      "Wrap your products in gift-ready, branded Christmas boxes. Free design support and fast turnaround.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${googleSansFlex.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
