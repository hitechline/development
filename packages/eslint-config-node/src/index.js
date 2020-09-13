module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier', 'import-helpers', '@typescript-eslint'],
  extends: [
    'airbnb-base',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
    commonjs: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts'],
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

    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: ['module', '/^@hitechline/', ['parent', 'sibling', 'index']],
      },
    ],
  },
};
