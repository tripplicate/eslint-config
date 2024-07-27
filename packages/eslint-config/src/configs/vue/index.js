const { getPackageInfoSync } = require('local-pkg');

const vue = getPackageInfoSync('vue');
const nuxt = getPackageInfoSync('nuxt');

const hasNuxt = nuxt && nuxt.version;
const isNuxt2 = nuxt && nuxt.version && nuxt.version.startsWith('2');

const isVue2 = vue && vue.version && vue.version.startsWith('2');

const config = {
  extends: [],
  rules: {},
};

const vue2Rules = {
  'vue/multi-word-component-names': 'error',
  'vue/no-multiple-template-root': 'error',
};

const vue3Rules = {
  'vue/multi-word-component-names': 'off',
  'vue/no-multiple-template-root': 'off',
};

if (hasNuxt) {
  if (isNuxt2) {
    config.extends.push('plugin:vue/recommended');

    config.rules = vue2Rules;
  } else {
    config.extends.push('plugin:vue/vue3-recommended');

    config.rules = vue3Rules;
  }
} else {
  if (isVue2) {
    config.extends.push('plugin:vue/recommended');

    config.rules = vue2Rules;
  } else {
    config.extends.push('plugin:vue/vue3-recommended');

    config.rules = vue3Rules;
  }
}

module.exports = {
  extends: [
    ...config.extends,
    '../typescript'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        source: 'module',
        parser: '@typescript-eslint/parser',
      },
    }
  ],
  rules: {
    'vue/no-multiple-template-root': ['error'],
    'vue/block-lang': ['error', {
      template: {
        lang: 'html',
      },
    }],
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error', {
        order: [
          'defineOptions',
          'defineModel',
          'defineProps',
          'defineEmits',
          'defineSlots'
        ],
        defineExposeLast: true,
      }
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],

    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', {
      allowKeywords: true,
    }],
    'vue/eqeqeq': ['error'],
    'vue/html-indent': ['error', require('../javascript/rules/styles').rules['@stylistic/indent'][1]],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-button-has-type': ['error'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', {
      nonwords: false,
      words: true,
    }],

    'vue/new-line-between-multi-line-property': ['error'],
    'vue/padding-line-between-blocks': ['error'],
    'vue/padding-line-between-tags': ['error'],
    'vue/prefer-define-options': ['error'],
    'vue/prefer-true-attribute-shorthand': ['error'],
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-template': 'error',

    'vue/require-emit-validator': 'error',
    'vue/require-name-property': 'error',
    'vue/require-prop-comment': ['error', {
      type: 'JSDoc',
    }],
    'vue/require-typed-object-prop': 'error',
    'vue/require-typed-ref': 'error',
    'vue/require-macro-variable-name': ['error', {
      defineProps: 'props',
      defineEmits: 'emit',
      defineSlots: 'slots',
      useSlots: 'slots',
      useAttrs: 'attrs',
    }],

    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-handler-style': 'off',

    'vue/no-empty-component-block': ['error'],
    'vue/no-undef-components': ['off'],
    'vue/no-undef-properties': ['off'],
    'vue/no-unused-properties': ['error'],
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'vue/no-static-inline-styles': ['error'],
    'vue/no-template-target-blank': ['error'],
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/no-sparse-arrays': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
      }
    ],
    ...config.rules,
  },
};
