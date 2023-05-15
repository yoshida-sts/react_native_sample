export default {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double", { avoidEscape: true }],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-empty-function'": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name2": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
  },
};
