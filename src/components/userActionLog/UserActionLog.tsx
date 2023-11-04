import { TState } from "@/app/voting/page";
import { handleIcon } from "./handleIcon";

export const UserActionLog = ({ userActionLog }: { userActionLog: TState }) => {
  return (
    <div className="bg-body py-[18px] pl-[15px] pr-5 rounded-1.5lg flex justify-between">
      <div className="flex items-center">
        <div className="py-[3px] px-[10px] bg-white text-base leading-6 rounded-[5px]">
          {userActionLog.time}
        </div>
        <p className="text-placeholder leading-6 ml-5">
          ImageID:{" "}
          <span className="text-black font-medium text-base">
            {userActionLog.image_id}
          </span>{" "}
          was added to {userActionLog.action}
        </p>
      </div>
      <div>{handleIcon(userActionLog.name)}</div>
    </div>
  );
};
