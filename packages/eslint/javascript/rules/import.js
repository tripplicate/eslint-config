module.exports = {
  extends: [
    'plugin:import/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.mjs', '.js', '.json'
        ],
      },
    },
    'import/extensions': [
      '.js', '.mjs', '.jsx'
    ],
    'import/ignore': [
      'node_modules'
    ],
  },
  rules: {
    'import/first': [
      'error'
    ],
    'import/consistent-type-specifier-style': [
      'error', 'prefer-top-level'
    ],
    'import/exports-last': [
      'error'
    ],
    'import/no-default-export' : 'off',
    'import/extensions'        : [
      'error', 'ignorePackages', {
        js  : 'never',
        mjs : 'never',
        jsx : 'never',
        ts  : 'never',
        tsx : 'never',
      }
    ],
    'import/newline-after-import': [
      'error', { count: 1, considerComments: true, }
    ],
    'import/no-absolute-path': [
      'error'
    ],
    'import/no-amd': [
      'error'
    ],
    'import/no-anonymous-default-export': [
      'off', {
        allowArray             : false,
        allowArrowFunction     : false,
        allowAnonymousClass    : false,
        allowAnonymousFunction : false,
        allowLiteral           : false,
        allowObject            : false,
      }
    ],
    'import/no-commonjs': [
      'off'
    ],
    'import/no-cycle': [
      'error', { maxDepth: '∞', }
    ],
    'import/no-deprecated': [
      'warn'
    ],
    'import/no-unresolved': [
      'error', { commonjs: true, caseSensitive: true, }
    ],
    'import/no-dynamic-require'    : 'error',
    'import/no-empty-named-blocks' : [
      'error'
    ],
    'import/no-extraneous-dependencies': [
      'off'
    ],
    'import/no-import-module-exports': [
      'error'
    ],
    'import/no-mutable-exports': [
      'error'
    ],
    'import/no-named-default'           : 'error',
    'import/no-named-export'            : 'off',
    'import/no-namespace'               : 'off',
    'import/no-nodejs-modules'          : 'off',
    'import/no-relative-packages'       : 'error',
    'import/no-relative-parent-imports' : 'off',
    'import/no-restricted-paths'        : 'off',
    'import/no-self-import'             : [
      'error'
    ],
    'import/no-unassigned-import' : 'off',
    'import/no-unused-modules'    : [
      'off', {
        ignoreExports: [
        ],
        missingExports : true,
        unusedExports  : true,
      }
    ],
    'import/no-useless-path-segments': [
      'error', { commonjs: true, }
    ],
    'import/no-webpack-loader-syntax' : 'error',
    'import/order'                    : [
      'error', {
        'newlines-between' : 'always',
        groups             : [
          'builtin', 'external', 'internal', 'parent', 'sibling', 'type'
        ],
      }
    ],
    'import/unambiguous': 'off',
  },
};