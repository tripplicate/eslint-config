module.exports = {
  extends: ['plugin:jsdoc/recommended'],
  plugins: [
    'jsdoc'
  ],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx', '**/*.vue'],
      rules: {
        'jsdoc/require-jsdoc': ['off'],
        'jsdoc/sort-tags': ['error'],
        'jsdoc/require-param-description': ['off'],
        'jsdoc/no-undefined-types': ['off'],
      },
    }
  ],
};
