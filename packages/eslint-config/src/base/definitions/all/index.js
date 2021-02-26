const definition = {
  rules: {
    'prettier/prettier': 'error',

    'camelcase': 'off',
    'class-methods-use-this': 'off',

    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};

module.exports = definition;
