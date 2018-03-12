const { environment } = require('@rails/webpacker')

const { resolve } = require("path");


environment.loaders.get('sass')
  .use.find(item => item.loader === 'sass-loader').options.includePaths = [resolve("node_modules")]

module.exports = environment
