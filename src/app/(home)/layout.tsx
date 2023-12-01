"use client";

import { Navboard } from "@/components/navboard";
import { SearchPanel } from "@/components/searchPanel";
import { RouteRender } from "@/routes";
import { useTheme } from "@/hooks";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container flex justify-center py-8">
      <RouteRender route={"home"}>
        <Navboard props={{theme, setTheme}} />
      </RouteRender>
      <RouteRender>
        <div className="laptop:min-w-[520px] desktop:max-w-[680px] w-full flex flex-col">
          <SearchPanel />
          <main>{children}</main>
        </div>
      </RouteRender>
    </div>
  );
}
