/**
 * @see https://prettier.io/docs/en/configuration.html
 *
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    "@prettier/plugin-oxc",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss"
  ],

  // Prettier config
  semi: false,
  singleQuote: false,
  trailingComma: "none",
  tabWidth: 2,

  // @ianvs/prettier-plugin-sort-imports
  importOrderTypeScriptVersion: "5.6.3"
}

export default config
