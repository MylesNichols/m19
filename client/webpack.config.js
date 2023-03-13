const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    install: './src/js/install.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'install.html',
      template: './src/install.html',
      chunks: ['install']
    }),
    new WebpackPwaManifest({
      name: 'My App',
      short_name: 'My App',
      description: 'My Progressive Web App',
      background_color: '#ffffff',
      theme_color: '#2b2b2b',
icons: [
  {
    src: path.resolve('src/assets/icon.png'),
    sizes: [96, 128, 192, 256, 384, 512],
    destination: path.join('assets', 'icons')
  }
]
}),
new InjectManifest({
swSrc: './src/sw.js',
swDest: 'sw.js'
})
],
// TODO: Add CSS loaders and babel to webpack.
module: {
rules: [
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
},
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
]
}
};