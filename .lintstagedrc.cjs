module.exports = {
  'packages/**/*.{js,json,yaml,yml,md}': "pnpm exec nx affected -t eslint --files"
}
