"use client";

import { Backtab } from "@/components/backtab";
import Image from "next/image";
import { VotingButton, buttons } from "@/components/votingButtons";
import { UserActionLog } from "@/components/userActionLog";
import React, { useState } from "react";
import { useVoting } from "@/hooks";
import { TVotingState } from "@/types";

export default function Voting() {
  const [userActionLog, setUserActionLog] = useState<Array<TVotingState>>([]);
  const [vote, setVote] = useState<{ value: number; image_id: string } | null>(
    null
  );

  const { image } = useVoting(vote);

  return (
    <Backtab childrenProps="flex flex-col" heading="Voting">
      <div className="relative pt-5">
        {Boolean(image.length) && (
          <Image
            src={image[0].url}
            alt="Cat"
            width={image[0].width}
            height={image[0].height}
            priority
            placeholder="blur"
            blurDataURL={image[0].url}
            className="rounded-2.5xl object-cover h-full w-full"
          />
        )}
        <div className="flex absolute bottom-0 left-2/4 -translate-x-1/2 translate-y-1/2">
          {buttons.map((button) => (
            <React.Fragment key={button.id}>
              <VotingButton
                button={button}
                setState={setUserActionLog}
                image_id={image[0]?.id}
                setVote={setVote}
              />
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
    </Backtab>
  );
}
