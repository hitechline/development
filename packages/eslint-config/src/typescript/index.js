const internalSettings = [
  'all',
  'import',
  'typescript-eslint',
].map(definition => require.resolve(`./definitions/${definition}`));

const config = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    ...internalSettings,
  ],
};

module.exports = config;
