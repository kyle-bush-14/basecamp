import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./index.css";

import { MessageCircle, Box, Server, Activity, Settings, Moon, Sun } from "lucide-react";

import Chat from "./pages/Chat";
import Models from "./pages/Models";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  // Toggle dark mode class on body or wrapper
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const isActive = (path: string) => location.pathname === path;

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
          <Link to="/">
            <button
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                isActive("/")
                  ? darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-900"
                  : darkMode
                    ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                    : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
              }`}
            >
              <MessageCircle className="size-5" />
              New Chat
            </button>
          </Link>

          <div className="pt-4 pb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tools</div>

          <Link to="/models">
            <button
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/models")
                  ? darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-900"
                  : darkMode
                    ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                    : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
              }`}
            >
              <Box className="size-5" />
              Models
            </button>
          </Link>

          <button
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            <Server className="size-5" />
            MCP
          </button>
          <button
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            <Activity className="size-5" />
            Usage
          </button>
        </nav>

        <div className="p-2 border-t border-gray-200 dark:border-gray-800">
          <button
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            <Settings className="size-5" />
            Settings
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-full flex items-center gap-3 px-3 py-2 mt-1 text-sm font-medium rounded-lg transition-all duration-200 ${darkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`}
          >
            {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/models" element={<Models />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
};

const root = createRoot(document.body);
root.render(<App />);
