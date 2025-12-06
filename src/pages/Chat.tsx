import React, { useState } from "react";
import { Send } from "lucide-react";

const Chat = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden h-full">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
        <div className="max-w-3xl mx-auto space-y-8 py-12">
          {/* Welcome / Empty State */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Welcome to Basecamp</h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Start a conversation with an LLM of your choice.
            </p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-transparent backdrop-blur-sm">
        <div className="max-w-3xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message..."
            className="w-full pl-4 pr-12 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-500/50"
          />
          <button
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
              input.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "text-gray-400 bg-gray-100 dark:text-gray-600 dark:bg-gray-800"
            }`}
            disabled={!input.trim()}
          >
            <Send className="size-5" />
          </button>
        </div>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            AI can make mistakes. Please verify important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
