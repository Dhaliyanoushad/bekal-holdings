import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Questrial } from "next/font/google";
const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bekal International Holding",
  description: "Official website of Bekal Holding company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={questrial.className}>{children}</body>
    </html>
  );
}
