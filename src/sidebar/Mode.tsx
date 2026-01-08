import { type FC, useState } from "react";
import { Sun, Moon } from "lucide-react";

const Mode: FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="flex flex-row gap-2 items-center text-stone-700 py-2 px-3 rounded-lg hover:bg-stone-200"
      onClick={toggleMode}
    >
      {mode === "light" ? <Sun /> : <Moon />}
      {mode === "light" ? "Light mode" : "Dark mode"}
    </button>
  );
};

export default Mode;
