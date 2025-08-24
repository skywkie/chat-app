import js from "@eslint/js";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config([
  js.configs.recommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,ts}"],
    rules: {
      "@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true }],
    },
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.node,
    },
  },
]);
