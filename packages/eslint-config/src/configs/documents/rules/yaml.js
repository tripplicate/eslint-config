module.exports = {
  extends: [
    'plugin:yml/standard'
  ],
  overrides: [
    {
      files: ['**/*.yaml', '**/*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        '@stylistic/no-multiple-empty-lines': ['error', {
          max: 0,
          maxBOF: 0,
          maxEOF: 0,
        }],
      },
    }
  ],
};
