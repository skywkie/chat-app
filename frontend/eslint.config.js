import globals from "globals";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config([
  globalIgnores(["docs"]),
  {
    files: ["**/*.{ts,tsx}"],
    ignores: [".idea/*"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
  },
]);
