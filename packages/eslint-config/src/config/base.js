const presets = ['main', 'import', 'prettier'].map(preset =>
  require.resolve(`../presets/${preset}`),
);

const config = {
  extends: ['airbnb-base', ...presets],
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
