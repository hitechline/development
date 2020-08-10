import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';

const PACKAGE_ROOT_PATH = process.cwd();
const PKG = require(path.join(PACKAGE_ROOT_PATH, 'package.json')); // eslint-disable-line import/no-dynamic-require, @typescript-eslint/no-var-requires

const PLUGINS = [url(), terser(), resolve(), commonjs()];
const OUTPUTS = [
  {
    format: 'cjs',
    sourcemap: true,
    file: path.resolve(PACKAGE_ROOT_PATH, 'dist/index.js'),
  },
];

if (!PKG.javascript) {
  OUTPUTS.push({
    format: 'es',
    sourcemap: true,
    file: path.resolve(PACKAGE_ROOT_PATH, 'dist/index.es.js'),
  });

  PLUGINS.push(
    typescript({
      typescript: ttypescript,
      rollupCommonJSResolveHack: true,
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        include: [path.resolve(PACKAGE_ROOT_PATH, 'src/**/*')],
        compilerOptions: {
          declarationMap: true,
          declarationDir: path.resolve(PACKAGE_ROOT_PATH, 'typings'),
        },
      },
    }),
  );
}

function getExternal() {
  const array = Object.keys(PKG.peerDependencies || {}).concat(
    Object.keys(PKG.dependencies || {}),
  );

  if (!array.length) return () => false;
  return id => new RegExp(`^(${array.join('|')})($|/)`).test(id);
}

export default {
  output: OUTPUTS,
  plugins: PLUGINS,
  external: getExternal(),
  input: path.join(
    PACKAGE_ROOT_PATH,
    `src/index.${PKG.javascript ? 'js' : 'ts'}`,
  ),
};
