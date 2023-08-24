module.exports = {
  extends: ["plugin:svelte/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      extends: ["plugin:svelte/recommended"],
      parserOptions: {
        parser: {
          // Specify a parser for each lang.
          ts: "@typescript-eslint/parser",
          typescript: "@typescript-eslint/parser",
        },
      },
      rules: {
        "svelte/block-lang": ["error", { "script": ["ts"], "style": ["scss"] }],
        "svelte/button-has-type": ["error", {
          "button": true,
          "submit": true,
          "reset": true
        }],
        "svelte/no-reactive-functions": "error",
        "svelte/no-useless-mustaches": "warn",
        "svelte/require-each-key": "error",
        "svelte/infinite-reactive-loop": "error",
        "svelte/no-dom-manipulating": "error",
        "svelte/no-dupe-else-if-blocks": "error",
        "svelte/valid-compile": [
          "error",
          {
            "ignoreWarnings": false
          }
        ]
      }
    },
  ],
  rules: {
    indent: ["error", 2],
  }
}