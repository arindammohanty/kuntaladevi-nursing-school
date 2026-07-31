import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuntaladevi Nursing School | Excellence in Nursing Education",
  description: "A premier nursing college dedicated to holistic student development, rigorous clinical practice, and producing compassionate healthcare professionals.",
  openGraph: {
    title: "Kuntaladevi Nursing School",
    description: "Shaping the future of healthcare through excellence in nursing education.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
