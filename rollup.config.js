const json = require("rollup-plugin-json");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const replace = require("rollup-plugin-replace");
const babel = require("rollup-plugin-babel");
//const env = process.env.NODE_ENV;

module.exports = {
    input: './src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'library'
    },
    external:['lodash'],
    plugins: [
        json(),
        resolve(),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ["@babel/preset-env"],
            runtimeHelpers: true,
            plugins: [
                "@babel/transform-runtime",
                ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ]
        })
    ]
}