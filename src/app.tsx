import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import PlusIcon from "../svg/plus.svg?react";
import BoxIcon from "../svg/box.svg?react";
import ServerIcon from "../svg/server.svg?react";
import ActivityIcon from "../svg/activity.svg?react";
import SettingsIcon from "../svg/settings.svg?react";
import MoonIcon from "../svg/moon.svg?react";
import SunIcon from "../svg/sun.svg?react";
import SendIcon from "../svg/send.svg?react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [input, setInput] = useState("");

  // Toggle dark mode class on body or wrapper
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`flex h-screen w-full transition-colors duration-300 ${darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Sidebar */}
      <aside
        className={`flex flex-col w-64 border-r transition-colors duration-300 ${darkMode ? "border-gray-800 bg-gray-900/50" : "border-gray-200 bg-white"}`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Basecamp
          </h1>
        </div>

        <nav className="flex-1 px-2 space-y-1">
          <button
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${darkMode ? "hover:bg-gray-800 text-gray-300 hover:text-white" : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`}
          >
            <PlusIcon />
            New Chat
          </button>

          <div className="pt-4 pb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tools</div>

          <button
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            <BoxIcon />
            Models
          </button>
          <button
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            <ServerIcon />
            MCP
          </button>
          <button
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            <ActivityIcon />
            Usage
          </button>
        </nav>

        <div className="p-2 border-t border-gray-200 dark:border-gray-800">
          <button
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            <SettingsIcon />
            Settings
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-full flex items-center gap-3 px-3 py-2 mt-1 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-3xl mx-auto space-y-8 py-12">
            {/* Welcome / Empty State */}
            <div className="text-center space-y-4">
              <h2 className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                Welcome to Basecamp
              </h2>
              <p className={`text-base ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
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
              className={`w-full pl-4 pr-12 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm ${
                darkMode
                  ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500/50"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
              }`}
            />
            <button
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
                input.trim()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : darkMode
                    ? "text-gray-600 bg-gray-800"
                    : "text-gray-400 bg-gray-100"
              }`}
              disabled={!input.trim()}
            >
              <SendIcon />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              AI can make mistakes. Please verify important information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

const root = createRoot(document.body);
root.render(<App />);
