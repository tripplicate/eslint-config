module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: [
    'import',
    'unused-imports',
    'import-newlines',
    'perfectionist'
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.cjs', '.mjs'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.cjs', '.mjs'],
      },
    },
  },
  rules: {
    'unused-imports/no-unused-imports': ['error'],

    'import/first': ['error'],
    'import/newline-after-import': ['error'],

    'import-newlines/enforce': [
      'error',
      {
        items: 3,
        'max-len': 120,
      }
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'builtin',
          'react',
          'react-type',
          'vue',
          'vue-type',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'side-effect',
          'side-effect-style',
          'builtin-type',
          'external-type',
          'internal-type',
          'parent-type',
          'sibling-type',
          'index-type',
          'style',
          'object'

        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
            vue: ['vue', '@vue*'],
          },
          type: {
            react: 'react',
            vue: 'vue',
          },
        },
        'newlines-between': 'always',
      }
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      }
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      }
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'line-length',
        order: 'asc',
      }
    ],
    'import/consistent-type-specifier-style': ['off'],
    'import/no-deprecated': ['warn'],

    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/no-duplicates': ['error', {
      'prefer-inline': false,
    }],
    'import/no-mutable-exports': ['error'],
    'import/no-named-default': ['error'],
    'import/no-self-import': ['error'],
    'import/no-webpack-loader-syntax': ['error'],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-relative-packages': ['error'],
  },
};
