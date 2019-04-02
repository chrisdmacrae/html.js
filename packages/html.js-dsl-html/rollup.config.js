import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

const plugins = [
  resolve(),
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