# Eslint

This eslint configuration designed to work with Javascript, Typescript, Vue, JSX, JSON, YAML, Markdown out-of-box with auto fix for **formatting without prettier**

## Installation

Install dependency

```sh
# pnpm
pnpm i -D @trpl/eslint-config

# yarn
yarn add @tprl/eslint-config

#npm
npm install @trpl/eslint-config
```

And create [eslint configuration file](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) in your project root:

```js
// .eslintrc.cjs

module.exports = {
  extends: ["@trpl"],
};
```
Add scripts for package.json

```json
{
  "scripts": {
    "eslint": "eslint .",
    "eslint:fix": "eslint . --fix"
  }
}
```

## VSCode support with auto fix on save

First of all need to install [Eslint VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), after that add the following settings to your `settings.json` or if you prefer settings only for your workspace add settings to `.vscode/settings.json`

```jsonc
{

  // Disable prettier and default formatters on save
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```
