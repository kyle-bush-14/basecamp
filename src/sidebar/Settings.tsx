import type { FC } from "react";
import { SettingsIcon } from "lucide-react";

const Settings: FC = () => {
  return (
    <button className="flex flex-row items-center gap-2 rounded-lg px-3 py-2 text-stone-700 hover:bg-stone-200">
      <SettingsIcon />
      <p>Settings</p>
    </button>
  );
};

export default Settings;
