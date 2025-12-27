import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { includeIgnoreFile } from "@eslint/compat";

import tseslint from "typescript-eslint";

import globals from "globals";

import { fileURLToPath, URL } from "node:url";

const gitignorePath = fileURLToPath(new URL("../.gitignore", import.meta.url));

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat["recommended-latest"],
  reactRefresh.configs.recommended,
  react.configs.flat.recommended,
  [
    includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
    {
      files: ["**/*.{ts,tsx}"],
      plugins: {},
      extends: [
        // reactHooks.configs["recommended-latest"],
        // reactRefresh.configs.vite,
        // eslintReact.configs["recommended-typescript"],
      ],
      rules: {
        "react/react-in-jsx-scope": "off",
        // "eslint-react/no-missing-key": "warn",
        // "eslint-react/dom/no-missing-button-type": "off",
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        ecmaVersion: "latest",
        globals: globals.browser,
      },
    },
  ],
);
