export default {
  plugins: ["stylelint-prettier"],
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["apply", "layer", "responsive", "reference", "screen", "tailwind", "variants"],
      },
    ],
    "no-descending-specificity": true,
    "import-notation": "string",
  },
};
