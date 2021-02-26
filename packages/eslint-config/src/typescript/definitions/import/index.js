const allowedExtensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx'];

const definition = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': allowedExtensions.filter(extension =>
        /^ts/.test(extension),
      ),
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
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
  },
};

module.exports = definition;
