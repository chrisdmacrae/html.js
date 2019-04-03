import commonjs from "rollup-plugin-commonjs";
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
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
    input: 'src/cli.ts',
    output: {
      file: "lib/cli.js",
      format: "cjs"
    },
    plugins: plugins
  },
  {
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
    plugins: plugins.concat([
      replace({
        "CONTEXT_NODE": true,
        "CONTEXT_BROWSER": false
      })
    ])
  },
  {
    input: 'src/index.ts',
    output: [{
        file: 'lib/browser/index.js',
        format: 'cjs'
      },
      {
        file: 'lib/browser/index.mjs',
        format: 'esm'
      }
    ],
    plugins: plugins.concat([
      replace({
        "CONTEXT_NODE": false,
        "CONTEXT_BROWSER": true
      })
    ])
  }
];