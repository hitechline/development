const config = {
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      files: ['.ts', '.tsx', '.d.ts'].map(extension => `**/*${extension}`),
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        require.resolve('../presets/typescript-eslint'),
      ],
    },
  ],
};

module.exports = config;
