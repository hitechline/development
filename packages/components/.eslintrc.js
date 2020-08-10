module.exports = {
  extends: [
    '../../.eslintrc.js',
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  settings: {
    'import/extensions': ['ts', 'tsx'],
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-associated-control': 'off',

    'react/jsx-filename-extension': ['warn', { extensions: ['ts', 'tsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
