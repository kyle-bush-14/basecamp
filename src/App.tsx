import type { FC } from "react";
import Sidebar from "./sidebar/Sidebar";
import ChatBox from "./chat/ChatBox";

const App: FC = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="flex items-center justify-center bg-stone-50">
        <ChatBox />
      </div>
    </div>
  );
};

export default App;
