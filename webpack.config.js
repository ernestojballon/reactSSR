

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var extracPlugin = new ExtractTextPlugin({
  filename: 'main.css'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'main.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          loader: require.resolve('babel-loader'),
          options: {
            // This is a feature of `babel-loader` for Webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },{
          test: /\.s[ac]ss$/i,
          use: extracPlugin.extract({
            use:[
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ]
          })
          
        }
    ],
  },
  plugins:[
    extracPlugin
  ]
};