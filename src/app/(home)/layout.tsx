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
        <div className="laptop:max-w-[520px] desktop:max-w-[680px] w-full flex flex-col mobile:px-5 tablet:px-[30px] laptop:px-0">
          <SearchPanel />
          <main>{children}</main>
        </div>
      </RouteRender>
    </div>
  );
}
