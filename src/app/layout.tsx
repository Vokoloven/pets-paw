import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const jost = Jost({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetsPaw",
  description: "All about cats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-body dark:bg-nightBlack`}>
        {children}
      </body>
    </html>
  );
}
