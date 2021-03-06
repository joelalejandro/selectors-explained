import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    name: 'selector',
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [commonjs(), resolve(), terser()],
}
