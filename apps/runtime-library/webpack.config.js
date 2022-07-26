const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: 'http://localhost:3000/',
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: 'runtime_library',
      filename: 'remoteEntry.js',
      exposes: {
        './Tooltip': '@next/tooltip',
        './Button': '@next/button',
        './lib/react': 'react',
        './lib/react-dom': 'react-dom',
      },
    }),
  ],
};
