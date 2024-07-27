module.exports = {
  extends: [
    '../javascript'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended'
      ],
      excludedFiles: ['**/*.md/*.*'],
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        type: 'module',
        extraFileExtensions: ['.vue'],
        EXPERIMENTAL_useProjectService: true,
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', {
          ignoreTypeReferences: true,
        }],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',

        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/consistent-type-exports': ['error', {
          fixMixedExportsWithInlineTypeSpecifier: false,
        }],
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
        }],
        '@typescript-eslint/no-import-type-side-effects': ['error'],
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'unused-imports/no-unused-vars': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    }
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
