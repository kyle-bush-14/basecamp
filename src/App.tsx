import type { FC } from "react";
import Sidebar from "./sidebar/Sidebar";
import ChatBox from "./chat/ChatBox";

const App: FC = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="relative flex bg-stone-50">
        <ChatBox />
      </div>
    </div>
  );
};

export default App;
