module.exports = {
  extends: [
    '@trpl/stylelint-config-standard'
  ],
  plugins: [
    'stylelint-scss'
  ],
  overrides: [
    {
      files: ['**/*.scss', '*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.vue', '*.vue'],
      rules: {
        'scss/function-no-unknown': [true, {
          ignoreFunctions: ['v-bind'],
        }],
      },
    }
  ],
  rules: {
    // Essentials
    'scss/no-dollar-variables': null,
    'scss/no-duplicate-dollar-variables': [true, {
      ignoreInsideAtRules: ['each', 'for', 'while'],
      ignoreDefaults: true,
    }],
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': true,

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'function-no-unknown': null,
    'scss/function-no-unknown': true,

    'property-no-unknown': null,
    'scss/property-no-unknown': [true, {
      checkPrefixed: true,
    }],

    'comment-no-empty': null,
    'scss/comment-no-empty': true,

    'media-query-no-invalid': null,

    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['use', 'forward'],
      }
    ],

    // Each
    'scss/at-each-key-value-single-line': true,

    // If
    'scss/at-if-closing-brace-newline-after': ['always-last-in-chain'],
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-if-no-null': true,

    // Import, Use, Load, Partial
    'scss/load-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-import-partial-extension-whitelist': ['normalize.css', 'reset.css'],
    'scss/partial-no-import': null,
    'scss/at-use-no-unnamespaced': null,
    'scss/at-use-no-redundant-alias': true,

    // Mixin
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',

    // Rule
    'scss/at-rule-conditional-no-parentheses': true,

    // Else
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-if-parentheses-space-before': 'never',
    'scss/at-else-empty-line-before': 'never',

    // Variable
    'scss/dollar-variable-first-in-block': [true, {
      ignore: ['imports', 'comments'],
    }],
    'scss/dollar-variable-empty-line-before': ['always', {
      except: ['after-comment', 'first-nested', 'after-dollar-variable'],
      ignore: ['inside-single-line-block'],
    }],
    'scss/dollar-variable-empty-line-after': ['always', {
      except: ['before-dollar-variable', 'last-nested'],
      ignore: ['before-comment'],
    }],
    'scss/dollar-variable-colon-newline-after': ['always-multi-line'],
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-default': [true, {
      ignore: 'local',
    }],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-no-namespaced-assignment': true,

    // Comment
    'scss/comment-no-loud': null,
    'scss/double-slash-comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['between-comments', 'stylelint-commands'],
    }],
    'scss/double-slash-comment-inline': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',

    // Block
    'scss/block-no-redundant-nesting': null,

    // Declaration
    'scss/declaration-nested-properties': null,
    'scss/declaration-nested-properties-no-divided-groups': null,

    // Dimension
    'scss/dimension-no-non-numeric-values': true,

    // Function
    'scss/at-function-named-arguments': ['never', {
      ignore: ['single-argument'],
    }],
    'scss/at-function-parentheses-space-before': 'never',
    'scss/function-calculation-no-interpolation': true,
    'scss/function-color-relative': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,

    // Map
    'scss/map-keys-quotes': 'always',

    // Media feature
    'scss/media-feature-value-dollar-variable': null,

    // Operator
    'scss/operator-no-newline-before': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,

    // Selector
    'scss/selector-nest-combinators': null,
    'scss/selector-no-redundant-nesting-selector': null,
    'scss/selector-no-union-class-name': null,
  },
};
