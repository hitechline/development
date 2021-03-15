const allowedExtensions = ['.mjs', '.js', '.jsx', 'ts', 'tsx', '.d.ts'];

const preset = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': allowedExtensions.filter(extension =>
        /ts/.test(extension),
      ),
    },
    'import/resolver': {
      node: allowedExtensions,
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      allowedExtensions.reduce(
        (obj, extension) =>
          Object.assign(obj, {
            [extension.replace(/^\./, '')]: 'never',
          }),
        {},
      ),
    ],

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        ignoreTypeReferences: true,
      },
    ],
  },
};

module.exports = preset;
