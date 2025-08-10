import "./globals.css";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";
// import ScrollColorHandler from "../components/ScrollColorHandler";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

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
      <body className={`${questrial.className} bg-white`}>
        {/* <ScrollColorHandler /> */}
        {children}
      </body>
    </html>
  );
}
