"use client";
// import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Navboard } from "@/components/navboard";
import { SearchPanel } from "@/components/searchPanel/SearchPanel";
import { useClearPathname, useScreenDimensions } from "@/hooks";

const jost = Jost({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "PetsPaw",
//   description: "All about cats",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = useClearPathname();
  const { screen } = useScreenDimensions();

  return (
    <html lang="en">
      <body className={`${jost.className} bg-body overflow-hidden`}>
        <div className="container flex justify-center py-8">
          {(((screen === "mobile" || screen === "tablet") &&
            pathname === "/") ||
            screen === "laptop" ||
            screen === "desktop") && <Navboard />}

          {(((screen === "mobile" || screen === "tablet") &&
            pathname !== "/") ||
            screen === "laptop" ||
            screen === "desktop") && (
            <div className="laptop:max-w-[520px] desktop:max-w-[680px] w-full flex flex-col mobile:px-5 tablet:px-[30px]">
              <SearchPanel />
              <main>{children}</main>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
