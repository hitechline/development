const eslintConfigWeb = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'prettier',
    'react-hooks',
    'import-helpers',
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [{ files: ['**/*.tsx'], rules: { 'react/prop-types': 'off' } }],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
    commonjs: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never' },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: ['module', ['parent', 'sibling', 'index']],
      },
    ],
  },
};

export = eslintConfigWeb;
