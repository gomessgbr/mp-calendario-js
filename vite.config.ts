/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig(() => {

//     plugins: [react()],
//     test: {
//       environment: 'jsdom', // Define o ambiente do teste como jsdom
//       setupFiles: './src/test/setup.ts', // Caminho para o arquivo de setup do RTL
//       globals: true, // Permite usar funções globais como `describe` e `it`
//     },

// })
export default defineConfig(() => ({
  plugins: [react()],
  test: {
    environment: "jsdom", // Define o ambiente do teste como jsdom
  },
}));
