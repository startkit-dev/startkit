/**
 * @see https://prettier.io/docs/en/configuration.html
 *
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    "@prettier/plugin-oxc", // should be first
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-jsdoc",
    "prettier-plugin-tailwindcss" // must be last
  ],

  // General config
  semi: false,
  singleQuote: false,
  trailingComma: "none",
  tabWidth: 2,

  // prettier-plugin-tailwindcss
  tailwindStylesheet: "./src/styles/app.css",
  tailwindFunctions: ["clsx", "cva", "cn"],

  // prettier-plugin-sort-imports
  importOrderTypeScriptVersion: "5"
}

export default config
