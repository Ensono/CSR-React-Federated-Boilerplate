const resolve = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const externals = require("rollup-plugin-node-externals")
const babel = require("rollup-plugin-babel")
const css = require("rollup-plugin-import-css")
const pkg = require("./package.json")
const rootPkg = require("../../package.json")
const path = require("path")

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
            externals: rootPkg.dependencies,
        }),
        commonjs(),
        babel({
            configFile: path.resolve(__dirname, "..", "..", "babel.config.js"),
        }),
        css(),
        resolve(),
    ],
})
