import { renderIcon } from "./renderIcon";
import type { TVotingState } from "@/types";

export const UserActionLog = ({
  userActionLog,
}: {
  userActionLog: TVotingState;
}) => {
  return (
    <div className="bg-body py-[18px] pl-[15px] pr-5 rounded-1.5lg flex justify-between items-center mobile:flex-wrap">
      <div className="py-[3px] px-[10px] bg-white text-base leading-6 rounded-[5px]">
        {userActionLog.time}
      </div>
      <div className="flex items-center mobile:order-1">
        <p className="text-placeholder leading-6 ml-5 mobile:ml-0 mobile:mt-2.5">
          ImageID:{" "}
          <span className="text-black font-medium text-base">
            {userActionLog.image_id}
          </span>{" "}
          was added to {userActionLog.action}
        </p>
      </div>
      <div>{renderIcon(userActionLog.name)}</div>
    </div>
  );
};
