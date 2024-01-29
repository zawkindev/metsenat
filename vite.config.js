import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "~": "/",
      "@": "/src",
      components: "/src/components",
      views: "/src/views",
      layouts: "/src/layouts",
      assets: "/src/assets",
      images: "/src/assets/images",
      icons: "/src/assets/images/icons",
    },
  },
});
