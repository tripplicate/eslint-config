module.exports = {
  extends: [
    'stylelint-config-clean-order',
    'stylelint-config-html'
  ],
  plugins: [
    '@stylistic/stylelint-plugin'
  ],
  overrides: [
    {
      files: ['**/*.vue', '*.vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global', 'slotted'],
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          }
        ],
        'function-no-unknown': [true, {
          ignoreFunctions: ['v-bind'],
        }],
      },
    }
  ],
  rules: {
    // Essentials
    'no-irregular-whitespace': true,
    'no-descending-specificity': null,

    'annotation-no-unknown': [true, {
      ignoreAnnotations: ['default'],
    }],
    'function-no-unknown': true,
    'at-rule-no-unknown': true,

    'custom-property-empty-line-before': ['always', {
      except: ['after-comment', 'first-nested', 'after-custom-property'],
      ignore: ['inside-single-line-block'],
    }],

    // At-rule
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    }],
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-required-list': {
      'font-face': ['font-display', 'font-family', 'font-style', 'src'],
      property: ['syntax', 'inherits', 'initial-value'],
      'scroll-timeline': ['source', 'orientation', 'scroll-offsets'],
    },

    // Declaration-block
    'declaration-block-single-line-max-declarations': null,

    // Notation
    'font-weight-notation': ['named-where-possible'],
    'selector-class-pattern': null,
    'selector-nested-pattern': null,
    'selector-id-pattern': null,

    // @stylistic
    '@stylistic/indentation': 2,
    '@stylistic/max-empty-lines': 1,
    '@stylistic/max-line-length': [120, {
      ignore: ['comments'],
    }],
    '@stylistic/no-empty-first-line': true,
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': true,
    '@stylistic/unicode-bom': ['never'],
    '@stylistic/string-quotes': ['double'],

    '@stylistic/declaration-bang-space-before': ['always'],
    '@stylistic/declaration-bang-space-after': ['never'],

    '@stylistic/declaration-colon-newline-after': ['always-multi-line'],
    '@stylistic/declaration-colon-space-before': ['never'],
    '@stylistic/declaration-colon-space-after': ['always-single-line'],

    '@stylistic/declaration-block-semicolon-space-before': ['never'],
    '@stylistic/declaration-block-semicolon-space-after': ['always-single-line'],
    '@stylistic/declaration-block-semicolon-newline-before': ['never-multi-line'],
    '@stylistic/declaration-block-semicolon-newline-after': ['always-multi-line'],
    '@stylistic/declaration-block-trailing-semicolon': ['always'],

    '@stylistic/block-closing-brace-empty-line-before': ['never'],
    '@stylistic/block-closing-brace-newline-before': ['always-multi-line'],
    '@stylistic/block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else'],
    }],
    '@stylistic/block-closing-brace-space-before': ['always-single-line'],
    '@stylistic/block-closing-brace-space-after': null,

    '@stylistic/block-opening-brace-newline-before': null,
    '@stylistic/block-opening-brace-newline-after': ['always-multi-line'],
    '@stylistic/block-opening-brace-space-before': ['always'],
    '@stylistic/block-opening-brace-space-after': null,

    '@stylistic/selector-attribute-brackets-space-inside': ['never'],
    '@stylistic/selector-attribute-operator-space-after': ['never'],
    '@stylistic/selector-attribute-operator-space-before': ['never'],

    '@stylistic/selector-combinator-space-before': ['always'],
    '@stylistic/selector-combinator-space-after': ['always'],

    '@stylistic/selector-descendant-combinator-no-non-space': true,

    '@stylistic/selector-max-empty-lines': 0,

    '@stylistic/selector-pseudo-class-case': 'lower',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': ['never'],
    '@stylistic/selector-pseudo-element-case': 'lower',
    '@stylistic/selector-list-comma-newline-before': ['never-multi-line'],
    '@stylistic/selector-list-comma-newline-after': ['always-multi-line'],
    '@stylistic/selector-list-comma-space-before': ['never'],
    '@stylistic/selector-list-comma-space-after': ['always-single-line'],

    '@stylistic/media-feature-colon-space-before': ['never'],
    '@stylistic/media-feature-colon-space-after': ['always'],
    '@stylistic/media-feature-name-case': ['lower'],
    '@stylistic/media-feature-parentheses-space-inside': ['never'],
    '@stylistic/media-feature-range-operator-space-before': ['always'],
    '@stylistic/media-feature-range-operator-space-after': ['always'],

    '@stylistic/media-query-list-comma-newline-before': ['never-multi-line'],
    '@stylistic/media-query-list-comma-newline-after': ['never-multi-line'],
    '@stylistic/media-query-list-comma-space-before': ['never'],
    '@stylistic/media-query-list-comma-space-after': ['always'],

    '@stylistic/at-rule-name-case': ['lower'],
    '@stylistic/at-rule-name-newline-after': ['always-multi-line'],
    '@stylistic/at-rule-name-space-after': ['always-single-line'],

    '@stylistic/at-rule-semicolon-newline-after': ['always'],
    '@stylistic/at-rule-semicolon-space-before': ['never'],

    '@stylistic/number-no-trailing-zeros': true,
    '@stylistic/number-leading-zero': ['always'],

    '@stylistic/property-case': ['lower'],
  },
};
