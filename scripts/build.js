/* eslint-disable no-console, no-restricted-syntax */

const { exec: defaultExec } = require('child_process');
const { readdirSync, existsSync } = require('fs');
const { join, resolve } = require('path');
const { promisify } = require('util');

const namespace = '@hitechline';

const packagesDirectory = resolve('.', 'packages');
const packagesFolder = readdirSync(packagesDirectory);

const execPromise = promisify(defaultExec);

async function build() {
  for await (const packageFolder of packagesFolder) {
    const packageName = `${namespace}/${packageFolder}`;
    const packageFolderPath = join(packagesDirectory, packageFolder);

    const hasTsConfigFile = existsSync(
      join(packageFolderPath, 'tsconfig.json'),
    );

    if (hasTsConfigFile) {
      console.log(`Building "${packageName}" package...`);

      await execPromise('yarn tsc', {
        cwd: packageFolderPath,
      });
    } else {
      console.log(`Package "${packageName}" was skipped.`);
    }
  }
}

build();
