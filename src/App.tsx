import type { FC } from "react";
import Sidebar from "./sidebar/Sidebar";

const App: FC = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="flex items-center justify-center">
        <h1 className="font-thin text-3xl">Context</h1>
      </div>
    </div>
  );
};

export default App;
