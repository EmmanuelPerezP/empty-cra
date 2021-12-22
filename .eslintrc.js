/* eslint-disable  */
module.exports = {
  globals: {
    JSX: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js', 'craco.config.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off', // check to see why we turn off this https://github.com/typescript-eslint/typescript-eslint/blob/1cf9243/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      },
    },
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'module-resolver',
    'import',
  ],
  rules: {
    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents":  "arrow-function",
    }],
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/require-default-props': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],

    'react/destructuring-assignment': [
      2,
      'always',
      { ignoreClassFields: true },
    ],
    'prettier/prettier': ['error'],
    'object-curly-newline': 'off',
    'max-lines': ['error', { max: 150, skipComments: true }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        types: ['boolean', 'string', 'number', 'array'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
};
