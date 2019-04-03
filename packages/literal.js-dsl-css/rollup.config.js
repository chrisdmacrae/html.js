import commonjs from "rollup-plugin-commonjs";
import resolve from 'rollup-plugin-node-resolve';
import {
  terser
} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  resolve(),
  commonjs(),
  typescript()
]

export default [{
  input: 'src/index.ts',
  output: [{
      file: 'lib/index.js',
      format: 'cjs'
    },
    {
      file: 'lib/index.mjs',
      format: 'esm'
    }
  ],
  plugins: plugins
}];