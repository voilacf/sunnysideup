import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import angularEslint from "angular-eslint";
import ngrxEslint from "@ngrx/eslint-plugin/v9";
import jestEslint from "eslint-plugin-jest";

const sharedExtends = [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...angularEslint.configs.tsRecommended,
  ...ngrxEslint.configs.all
];

export default tsEslint.config(
  {
    files: ["**/*.ts"],
    ignores: ["**/*.spec.ts"],
    extends: sharedExtends,
    rules: {
      "no-console": "error",
      "@angular-eslint/prefer-standalone": "off",
      "@ngrx/avoid-dispatching-multiple-actions-sequentially": "off",
      "@ngrx/no-dispatch-in-effects": "off",
      "@typescript-eslint/explicit-function-return-type": "error"
    }
  },
  {
    files: ["**/*.spec.ts"],
    plugins: {
      jest: jestEslint
    },
    languageOptions: {
      globals: jestEslint.environments.globals.globals
    },
    extends: [
      sharedExtends,
      jestEslint.configs["flat/recommended"]
    ],
    rules: {
      "no-console": "error",
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angularEslint.configs.templateRecommended
    ]
  }
);

