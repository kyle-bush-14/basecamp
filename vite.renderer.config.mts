import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [tailwindcss(), svgr()],
});
