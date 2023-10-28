"use client";

import { Backtab } from "@/components/backtab";
import Image from "next/image";
import Cat from "../../../public/cat.jpg";
import { VotingButton, buttons } from "@/components/votingButtons";
import { UserActionLog } from "@/components/userActionLog";

export default function Voting() {
  return (
    <Backtab>
      <section>
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
           {buttons.map(button => <VotingButton button={button}/>)}
          </div>
        </div>
        <UserActionLog />
      </section>
    </Backtab>
  );
}
