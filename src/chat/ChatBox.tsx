import type { FC } from "react";

import Attach from "./Attach";
import Thinking from "./Thinking";
import Settings from "./Settings";
import ModelSelection from "./ModelSelection";
import Send from "./Send";

const ChatBox: FC = () => {
  return (
    <div className="absolute bottom-10 flex h-40 w-200 flex-col rounded-lg border border-stone-300 bg-stone-100 p-2 shadow-md">
      <div className="grow p-2">
        <textarea
          className="h-full w-full resize-none bg-transparent text-stone-700 outline-none"
          placeholder="Just start typing..."
        />
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="flex grow flex-row text-stone-700">
          <Attach />
          <Thinking />
          <Settings />
        </div>
        <ModelSelection />
        <Send />
      </div>
    </div>
  );
};

export default ChatBox;
