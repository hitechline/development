const allowedExtensions = ['.mjs', '.js', '.jsx'];

const definition = {
  settings: {
    'import/resolver': {
      node: {
        extensions: allowedExtensions,
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false,
      },
    ],
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
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': [
          'external',
          ['sibling', 'parent', 'builtin'],
          'index',
          'object',
        ],
      },
    ],
  },
};

module.exports = definition;
