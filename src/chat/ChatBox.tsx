import type { FC } from "react";

import Attach from "./Attach";
import Thinking from "./Thinking";
import Settings from "./Settings";
import ModelSelection from "./ModelSelection";
import Send from "./Send";

const ChatBox: FC = () => {
  return (
    <div className="flex flex-col w-200 h-37.5 border border-stone-300 bg-stone-100 rounded-lg p-2">
      <div className="grow p-2">
        <textarea
          className="w-full h-full outline-none text-stone-700 resize-none bg-transparent"
          placeholder="Just start typing..."
        />
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row text-stone-700 grow">
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
