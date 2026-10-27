import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Kit de l'application 6 : remplace vite.config.js, puis redémarrez npm run dev.
// Le serveur de dev relaie /api/… vers json-server (http://localhost:3000/…) :
// le navigateur ne voit qu'une seule origine, donc pas de problème CORS (6.6).
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
