module.exports = {
  env: {
    node: true,
    // "browser": true,
    // "es2021": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [ "react", "react-hooks", "@typescript-eslint" ],
  rules: {
    indent: [ "error", 2, { SwitchCase: 1 } ],
    quotes: [ "error", "double", { avoidEscape: true } ],
    semi: [ "error", "always" ],
    "no-console": "error",
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "linebreak-style": [ "error", "unix" ],
    "no-empty-function'": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name2": "off",
    "react/prop-types": "off",
  },
};
