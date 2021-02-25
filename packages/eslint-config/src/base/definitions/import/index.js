const definition = {
  settings: {
    'import/extensions': ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        mjs: 'never',
        js: 'never',
        ts: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
};

module.exports = definition;
