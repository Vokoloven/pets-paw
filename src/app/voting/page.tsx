"use client";

import { Backtab } from "@/components/backtab";
import Image from "next/image";
import Cat from "../../../public/cat.jpg";
import { VotingButton } from "@/components/votingButtons";

export default function Voting() {
  return (
    <Backtab>
      <section className="relative">
        <h1 className="absolute left-[9999px] w-px h-px overflow-hidden">
          Voting
        </h1>
        <Image
          src={Cat}
          alt="cat"
          className="rounded-2.5xl h-[360px] object-cover"
        />
        <VotingButton />
      </section>
    </Backtab>
  );
}
