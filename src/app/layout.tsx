import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Dashboard } from "@/components/dashboard/Dashboard";

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
      <body className={`${jost.className} bg-[#F8F8F7]`}>
        <div className="flex">
          <Dashboard />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
