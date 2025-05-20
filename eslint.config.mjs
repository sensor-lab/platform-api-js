// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// eslint.config.js
import { globalIgnores } from "eslint/config";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    globalIgnores(["dist", "build", "coverage", "node_modules"]),
    {
        rules: {
            "semi": ["error", "always"],
            "indent": ["error", 4],
            "space-before-function-paren": ["error", "never"],
            "no-case-declarations": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { "argsIgnorePattern": "^_" }
            ],
        },
    },
);