const internalSettings = ['react'].map(definition =>
  require.resolve(`./definitions/${definition}`),
);

const config = {
  extends: ['airbnb', 'plugin:jsx-a11y/recommended', ...internalSettings],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

module.exports = config;
