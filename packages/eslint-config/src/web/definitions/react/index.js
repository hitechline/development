const definition = {
  extends: ['plugin:react/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['js', '.jsx', '.tsx'],
      },
    ],
  },
};

module.exports = definition;
