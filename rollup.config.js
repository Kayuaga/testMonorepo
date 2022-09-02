import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import jsx from 'acorn-jsx'
import { terser } from 'rollup-plugin-terser'
const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true, jsx: 'preserve' }),
    resolve({ extensions: ['.jsx', '.js', '.tsx'] }),
    commonjs(),
    terser(),
    babel({
      extensions: ['.jsx', '.js', '.tsx'],
      presets: ['@babel/preset-react'],
      exclude: 'node_modules/**',
    }),
    scss({
      include: ['/**/*.css', '/**/*.scss', './*.scss', '/**/*.sass'],
      output: 'css/style.css',
      failOnError: true,
    }),
  ],
}
