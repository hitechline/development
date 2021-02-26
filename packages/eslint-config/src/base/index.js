const internalSettings = ['all', 'import'].map(definition =>
  require.resolve(`./definitions/${definition}`),
);

const config = {
  plugins: ['import', 'prettier'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    ...internalSettings,
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};

module.exports = config;
