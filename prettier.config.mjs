/**
 * @see https://prettier.io/docs/en/configuration.html
 *
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "none",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  plugins: [
    "@prettier/plugin-oxc",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss"
  ]
}

export default config
