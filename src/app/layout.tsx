import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Navboard } from "@/components/navboard";
import { SearchPanel } from "@/components/searchPanel/SearchPanel";

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
      <body className={`${jost.className} bg-body overflow-hidden`}>
        <div className="container flex justify-center py-8">
          <Navboard />
          <div className="laptop:max-w-[520px] desktop:max-w-[680px] flex flex-col laptop:w-full">
            <SearchPanel />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
