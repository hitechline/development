const internalSettings = ['react'].map(definition =>
  require.resolve(`./definitions/${definition}`),
);

const config = {
  extends: ['airbnb', 'plugin:jsx-a11y/recommended', ...internalSettings],
  env: {
    browser: true,
  },
};

module.exports = config;
