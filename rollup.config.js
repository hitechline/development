import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import path from 'path';
import ttypescript from 'ttypescript';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const PACKAGE_ROOT_PATH = process.cwd();
const PKG = require(path.join(PACKAGE_ROOT_PATH, 'package.json')); // eslint-disable-line import/no-dynamic-require, @typescript-eslint/no-var-requires

function makeExternalPredicate(externalArr) {
  if (!externalArr.length) return () => false;
  return id => new RegExp(`^(${externalArr.join('|')})($|/)`).test(id);
}

function getExternal() {
  return makeExternalPredicate(
    Object.keys(PKG.peerDependencies || {}).concat(
      Object.keys(PKG.dependencies || {}),
    ),
  );
}

export default {
  input: path.join(PACKAGE_ROOT_PATH, 'src/index.ts'),
  external: getExternal(),
  output: [
    {
      format: 'cjs',
      sourcemap: true,
      file: path.resolve(PACKAGE_ROOT_PATH, 'dist/index.js'),
    },
    {
      format: 'es',
      sourcemap: true,
      file: path.resolve(PACKAGE_ROOT_PATH, 'dist/index.es.js'),
    },
  ],
  plugins: [
    url(),
    terser(),
    resolve(),
    commonjs(),
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
  ],
};
