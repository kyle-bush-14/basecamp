import React, { useState, useEffect } from "react";
import { Save, Check } from "lucide-react";

const Models = () => {
  const [apiKey, setApiKey] = useState("");
  const [models, setModels] = useState({
    "haiku-4.5": false,
    "sonnet-4.5": false,
    "opus-4.5": false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      const key = await window.electron.store.get("anthropicApiKey");
      const savedModels = await window.electron.store.get("anthropicModels");
      if (key) setApiKey(key);
      if (savedModels) setModels(savedModels);
    };
    loadSettings();
  }, []);

  const handleSave = async () => {
    await window.electron.store.set("anthropicApiKey", apiKey);
    await window.electron.store.set("anthropicModels", models);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleModel = (model: keyof typeof models) => {
    setModels((prev) => ({ ...prev, [model]: !prev[model] }));
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Models</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Configure your AI models and API keys.</p>
        </div>

        {/* Anthropic Section */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Anthropic</h3>
            <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded">
              Provider
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">API Key</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Enabled Models</label>
              <div className="space-y-3">
                {[
                  { id: "haiku-4.5", name: "Claude 3.5 Haiku" }, // Assuming 4.5 naming per user request, but usually it's 3.5. User asked for 4.5 specifically.
                  { id: "sonnet-4.5", name: "Claude 3.5 Sonnet" }, // Wait, user asked for "Haiku 4.5, Sonnet 4.5, and Opus 4.5". I should stick to user request even if it sounds futuristic.
                  { id: "opus-4.5", name: "Claude 3.5 Opus" },
                ].map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="text-sm font-medium">{model.name.replace("3.5", "4.5")}</span>{" "}
                    {/* Fixing name to match ID for user request */}
                    <button
                      onClick={() => toggleModel(model.id as keyof typeof models)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                        models[model.id as keyof typeof models] ? "bg-purple-600" : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          models[model.id as keyof typeof models] ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              {saved ? <Check className="size-4" /> : <Save className="size-4" />}
              {saved ? "Saved" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
