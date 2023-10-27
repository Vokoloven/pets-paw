"use client";

import { Backtab } from "@/components/backtab";
import Image from "next/image";
import Cat from "../../../public/cat.jpg";
import { VotingButton } from "@/components/votingButtons";

export default function Voting() {
  return (
    <Backtab>
      <div className="relative">
        <Image
          src={Cat}
          alt="cat"
          className="rounded-2.5xl h-[360px] object-cover"
        />
        <VotingButton />
      </div>
    </Backtab>
  );
}
