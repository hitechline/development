const baseSettings = require.resolve('../base');
const internalSettings = [
  'all',
  'import',
  'typescript-eslint',
].map(definition => require.resolve(`./definitions/${definition}`));

const config = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        baseSettings,
        ...internalSettings,
      ],
    },
  ],
};

module.exports = config;
