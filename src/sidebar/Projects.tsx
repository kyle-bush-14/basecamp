import type { FC } from "react";
import { Folder } from "lucide-react";

const Projects: FC = () => {
  return (
    <button className="flex flex-row gap-2 items-center text-stone-700 py-2 px-3 rounded-lg hover:bg-stone-200">
      <Folder />
      <p>Projects</p>
    </button>
  );
};

export default Projects;
