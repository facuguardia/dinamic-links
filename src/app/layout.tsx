import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montse = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "My Networks",
  description: "Enlaces a mis redes sociales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-screen">
      <body className={montse.className}>{children}</body>
    </html>
  );
}
