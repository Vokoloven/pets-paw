"use client";

import { Navboard } from "@/components/navboard";
import { SearchPanel } from "@/components/searchPanel";
import { RouteRender } from "@/routes";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex justify-center py-8">
      <RouteRender route={"home"}>
        <Navboard />
      </RouteRender>
      <RouteRender>
        <div className="laptop:min-w-[520px] w-full flex flex-col">
          <SearchPanel />
          <main>{children}</main>
        </div>
      </RouteRender>
    </div>
  );
}
