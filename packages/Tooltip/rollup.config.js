const resolve = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const externals = require("rollup-plugin-node-externals")
const babel = require('rollup-plugin-babel')
const css = require('rollup-plugin-import-css')
const pkg = require('./package.json')
const rootPkg = require('../../package.json')

module.exports = () => ({
    input: "src/index.jsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
        },
        {
            file: pkg.module,
            format: "es",
        },
    ],
    plugins: [
        externals({
            deps: true,
            peerDeps: true,
            externals: rootPkg.dependencies
        }),
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react']
        }),
        css(),
        resolve(),
        commonjs(),
    ],
})
