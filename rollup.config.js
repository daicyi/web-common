import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import less from 'rollup-plugin-less-loader';

import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      exec:true,
      extensions:['.css', '.sss', '.pcss','.less'],
      use:[["less",{javascriptEnabled: true}]]
    }),
    // postcss({
    //   use:["less"],
    //   plugins: [],
    //   extract: true,
    //   modules: true,
    //   modules: {},
    //   javascriptEnabled: true
    // }),
    less({
      javascriptEnabled: true
    }),
    external(),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs()
  ]
}
