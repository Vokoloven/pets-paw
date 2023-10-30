"use client";

import { Backtab } from "@/components/backtab";
import Image from "next/image";
import Cat from "../../../public/cat.jpg";
import { VotingButton, buttons } from "@/components/votingButtons";
import { UserActionLog } from "@/components/userActionLog";
import React, { useState } from "react";

export type TState = {
  id: string;
  time: string;
  action: string;
  picture?: string;
  name: string;
};

export default function Voting() {
  const [userActionLog, setUserActionLog] = useState<Array<TState>>([]);

  return (
    <Backtab flexProps="flex-col">
      <section className="pt-5">
        <h1 className="absolute left-[9999px] w-px h-px overflow-hidden">
          Voting
        </h1>
        <div className="relative">
          <Image
            src={Cat}
            alt="cat"
            className="rounded-2.5xl h-[360px] object-cover"
          />
          <div className="flex absolute bottom-0 left-2/4 -translate-x-1/2 translate-y-1/2">
            {buttons.map((button) => (
              <React.Fragment key={button.id}>
                <VotingButton button={button} setState={setUserActionLog} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mt-[52px] flex gap-[10px] flex-col">
          {userActionLog?.map((log) => (
            <React.Fragment key={log.id}>
              <UserActionLog userActionLog={log} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </Backtab>
  );
}
