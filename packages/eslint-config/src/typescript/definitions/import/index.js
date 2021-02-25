const definition = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'import/extensions': ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        mjs: 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};

module.exports = definition;
