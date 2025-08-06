// @ts-check

import eslint from "@eslint/js"
import router from "@tanstack/eslint-plugin-router"
import tsParser from "@typescript-eslint/parser"
import gitignore from "eslint-config-flat-gitignore"
import prettier from "eslint-config-prettier"
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript"
import { importX } from "eslint-plugin-import-x"
import tseslint from "typescript-eslint"

export default tseslint.config(
  gitignore(),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  ...router.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        warnOnUnsupportedTypeScriptVersion: false
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          bun: true
        })
      ]
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "inline-type-imports"
        }
      ]
    }
  },

  /**
   * Config files
   */
  {
    files: ["*.config.{js,mjs,cjs,ts}"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "import-x/no-named-as-default-member": "off"
    }
  },

  /**
   * Javascript files.
   *
   * Ignore type-checking
   */
  { files: ["**/*.{js,mjs,cjs}"], ...tseslint.configs.disableTypeChecked },

  prettier
)
