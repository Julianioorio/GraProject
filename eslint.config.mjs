import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  {
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
  },
  {
    rules: {
      "no-empty": "off",
      "prettier/prettier": [
        "warn",
        {
          endOfline: "auto",
        },
      ],
    },
  },
]);