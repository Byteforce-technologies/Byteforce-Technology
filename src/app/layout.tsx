import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://byteforce.global"),
  title: {
    default: "ByteForce Global — Technology Built for Africa's Next Chapter",
    template: "%s | ByteForce Global",
  },
  description:
    "We build technology that drives efficiency, growth and impact for businesses across Africa and beyond. Custom software engineering, AI & intelligent systems, data ecosystems, and cloud solutions.",
  keywords: [
    "ByteForce Global",
    "ByteForce",
    "Software Engineering Africa",
    "AI Africa",
    "Data & Analytics Ghana",
    "Digital Transformation",
    "FinTech Solutions",
    "Supply Chain Technology",
  ],
  authors: [{ name: "ByteForce Global" }],
  icons: {
    icon: "/brand-logo-mark.png",
    apple: "/brand-logo-mark.png",
  },
  openGraph: {
    title: "ByteForce Global — Technology Built for Africa's Next Chapter",
    description:
      "We build technology that drives efficiency, growth and impact for businesses across Africa and beyond.",
    url: "https://byteforce.global",
    siteName: "ByteForce Global",
    images: [
      {
        url: "/brand-logo-mark.png",
        width: 800,
        height: 800,
        alt: "ByteForce Global Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-brand-slate-900 selection:bg-brand-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
