import type { FC } from "react";
import { MessageCircle } from "lucide-react";

const Chats: FC = () => {
  return (
    <button className="flex flex-row gap-2 items-center text-stone-700 py-2 px-3 rounded-lg hover:bg-stone-200">
      <MessageCircle />
      <p>Chats</p>
    </button>
  );
};

export default Chats;
