module.exports = {
  extends: [
    'plugin:unicorn/recommended'
  ],
  rules: {
    'unicorn/consistent-destructuring': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-abusive-eslint-disable': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-push-push': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-invalid-remove-event-listener': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-add-event-listener': [
      'error', {
        excludedPackages: [
          'koa',
          'sax'
        ],
      }
    ],
    'unicorn/prefer-export-from': 'off',
    'unicorn/prefer-logical-operator-over-ternary': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-set-size': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-switch': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/require-array-join-separator': 'off',
    'unicorn/require-number-to-fixed-digits-argument': 'off',
  },
};
