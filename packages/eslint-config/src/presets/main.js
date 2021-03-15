const preset = {
  extends: ['eslint:recommended'],
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
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
      },
    ],
  },
};

module.exports = preset;
