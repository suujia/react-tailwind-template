module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb", "prettier", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 10,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-redundant-roles": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/label-has-associated-control": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: [".", "src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
