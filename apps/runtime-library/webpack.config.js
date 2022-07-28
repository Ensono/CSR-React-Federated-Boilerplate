const {ModuleFederationPlugin} = require("webpack").container
// const path = require("path")

module.exports = {
    entry: "./index.js",
    mode: "development",
    devtool: "hidden-source-map",
    output: {
        publicPath: "http://localhost:3000/",
        clean: true,
    },
    module: {},
    plugins: [
        new ModuleFederationPlugin({
            name: "runtime_library",
            filename: "remoteEntry.js",
            exposes: {
                "./lib/@emotion/styled": "@emotion/styled",
                "./lib/@mui/material/AppBar": "@mui/material/AppBar",
                "./lib/@mui/material/Box": "@mui/material/Box",
                "./lib/@mui/material/Toolbar": "@mui/material/Toolbar",
                "./lib/@mui/material/Typography": "@mui/material/Typography",
                "./lib/@mui/material/Button": "@mui/material/Button",
                "./lib/@mui/material/IconButton": "@mui/material/IconButton",
                "./lib/@mui/material/Link": "@mui/material/Link",
                "./lib/@mui/material/Menu": "@mui/material/Menu",
                "./lib/@mui/material/MenuItem": "@mui/material/MenuItem",
                "./lib/@mui/icons-material/Menu": "@mui/icons-material/Menu",
                "./Logger": "@next/logger",
                "./Tooltip": "@next/tooltip",
                "./Button": "@next/button",
                "./lib/react": "react",
                "./lib/react-dom": "react-dom",
            },
        }),
    ],
}
