const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  style: {
    postcss: {
      mode: 'file'
    }
  },
  webpack: {
    configure: (webpackConfig) => {
      // Remove ModuleScopePlugin to allow importing from outside src/
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        plugin => !(plugin.constructor && plugin.constructor.name === 'ModuleScopePlugin')
      );
      return webpackConfig;
    }
  }
}; 