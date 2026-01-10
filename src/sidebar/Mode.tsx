import { type FC, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

const Mode: FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="flex flex-row items-center gap-2 rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-200"
      onClick={toggleMode}
    >
      {mode === "light" ? <SunIcon /> : <MoonIcon />}
      {mode === "light" ? "Light mode" : "Dark mode"}
    </button>
  );
};

export default Mode;
