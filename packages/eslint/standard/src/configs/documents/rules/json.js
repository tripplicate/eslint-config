module.exports = {
  extends: [
    'plugin:jsonc/recommended-with-json5'
  ],
  overrides: [
    {

      files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
      rules: {
        '@stylistic/no-multiple-empty-lines': ['error', {
          max: 0,
          maxBOF: 0,
          maxEOF: 0,
        }],
        'jsonc/indent': ['error', 2],
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/key-spacing': ['error', {
          afterColon: true,
          beforeColon: false,
        }],
        'jsonc/object-curly-newline': ['error', {
          consistent: true,
          multiline: true,
        }],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': ['error', {
          allowMultiplePropertiesPerLine: true,
        }],
        'jsonc/quote-props': 'error',
        'jsonc/quotes': 'error',
      },
    },
    {
      files: ['**/package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error', {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'author',
              'description',
              'keywords',
              'contributors',
              'license',
              'repository',
              'homepage',
              'bugs',
              'funding',
              'packageManager',
              'private',
              'publishConfig',
              'type',
              'sideEffects',
              'browser',
              'engines',
              'workspaces',
              'main',
              'types',
              'typesVersions',
              'files',
              'import',
              'directories',
              'bin',
              'man',
              'scripts',
              'peerDependencies',
              'dependencies',
              'devDependencies'
            ],
          }
        ],
        'jsonc/no-dupe-keys': ['off'],
      },
    },
    {
      files: ['**/tsconfig.json', '**/tsconfig.*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'extends',
              'compilerOptions',
              'references',
              'files',
              'include',
              'exclude'
            ],
          },
          {
            pathPattern: '^compilerOptions$',
            order: [

              'incremental',
              'composite',
              'tsBuildInfoFile',
              'disableSourceOfProjectReferenceRedirect',
              'disableSolutionSearching',
              'disableReferencedProjectLoad',

              'target',
              'lib',
              'jsx',
              'experimentalDecorators',
              'emitDecoratorMetadata',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'reactNamespace',
              'noLib',
              'useDefineForClassFields',
              'moduleDetection',

              'module',
              'rootDir',
              'moduleResolution',
              'baseUrl',
              'paths',
              'rootDirs',
              'typeRoots',
              'types',
              'allowUmdGlobalAccess',
              'moduleSuffixes',
              'allowImportingTsExtensions',
              'resolvePackageJsonExports',
              'resolvePackageJsonImports',
              'customConditions',
              'resolveJsonModule',
              'allowArbitraryExtensions',
              'noResolve',

              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',

              'declaration',
              'declarationMap',
              'emitDeclarationOnly',
              'sourceMap',
              'inlineSourceMap',
              'outFile',
              'outDir',
              'removeComments',
              'noEmit',
              'importHelpers',
              'importsNotUsedAsValues',
              'downlevelIteration',
              'sourceRoot',
              'mapRoot',
              'inlineSources',
              'emitBOM',
              'newLine',
              'stripInternal',
              'noEmitHelpers',
              'noEmitOnError',
              'preserveConstEnums',
              'declarationDir',
              'preserveValueImports',

              'isolatedModules',
              'verbatimModuleSyntax',
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'preserveSymlinks',
              'forceConsistentCasingInFileNames',

              'strict',
              'strictBindCallApply',
              'strictFunctionTypes',
              'strictNullChecks',
              'strictPropertyInitialization',
              'allowUnreachableCode',
              'allowUnusedLabels',
              'alwaysStrict',
              'exactOptionalPropertyTypes',
              'noFallthroughCasesInSwitch',
              'noImplicitAny',
              'noImplicitOverride',
              'noImplicitReturns',
              'noImplicitThis',
              'noPropertyAccessFromIndexSignature',
              'noUncheckedIndexedAccess',
              'noUnusedLocals',
              'noUnusedParameters',
              'useUnknownInCatchVariables',

              'skipDefaultLibCheck',
              'skipLibCheck'
            ],
          }
        ],
      },
    }
  ],
};
