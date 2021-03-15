const { CLIEngine } = require('eslint/lib/cli-engine/cli-engine');

/**
 * @typedef {Object} Config
 * @property {string} name
 * @property {string} path
 */

/**
 * @param {Config} param0
 * @return {Promise<void>}
 */
async function validate({ name, path }) {
  const cliEngine = new CLIEngine();

  try {
    await (async () => cliEngine.getConfigForFile(path))();

    console.log(`The configuration "${name}" is valid.`);
  } catch (error) {
    console.log(`"Validade()" failed in "${name}" configuration.\n\n`);
    console.log(error);
  }
}

async function run() {
  for await (const configuration of CONFIGURATIONS) {
    await validate(configuration);
  }
}

/**
 * @type {Config[]}
 */
const CONFIGURATIONS = [
  {
    name: 'main',
    path: require.resolve('..'),
  },
  {
    name: 'web',
    path: require.resolve('../web'),
  },
  {
    name: 'typescript',
    path: require.resolve('../typescript'),
  },
];

run();

/* eslint no-console: 0 */
/* eslint no-restricted-syntax: 0 */
