import globals from "globals";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintReact from "@eslint-react/eslint-plugin";

export default tseslint.config([
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["docs/*", ".idea/*"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      eslintReact.configs["recommended-typescript"],
    ],
    rules: {
      "@eslint-react/no-missing-key": "warn",
      "@eslint-react/dom/no-missing-button-type": "off",
    },
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
  },
]);
