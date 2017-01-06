'use strict';

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var options ={
  //name: 'Browser',
  entry: [
    './src/js/Browser.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public/assets'),
    publicPath: '/assets/',
    outputPath: path.join(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  plugins: [
		new webpack.ProvidePlugin({
			'window.moment': 'moment',
			'moment': 'moment'
		}),
    /*
    new webpack.ProvidePlugin({
      'window.moment': 'moment'
    }),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new webpack.DefinePlugin({ '_BROWSER': true }),
		new webpack.optimize.OccurenceOrderPlugin(),
	  new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
    */
    //new webpack.ExternalsPlugin('commonjs',['fs']),
    //new webpack.IgnorePlugin(/vertx/),
    new CopyWebpackPlugin([
      { from: 'src/externals/', to: 'externals' },
    ])
  ],
  module: {
			loaders: [
				{ test: /\.json$/, loader: 'json-loader' },
				{
					test: /\.jsx?$/,
					loader: 'babel',
          //loader: 'babel-loader?presets[]=es2015&presets[]=react',
					exclude: /(node_modules|bower_components)/,
					query: {
            presets: [ 'react', 'es2015',
              'stage-0' // for React.Component
            ]

					}
				},
				//{ test: /\.css$/, loader: 'style!css' },
				{ test: /\.css$/, loader: 'style-loader!css-loader' },
				{ test: /\.less$/, loader: 'style!css!less' },
				{ test: /\.png$/,  loader: "url-loader?limit=1000" },
				{ test: /\.jpg$/,  loader: "url-loader?limit=1000" },
				{ test: /\.gif$/,  loader: "url-loader?limit=1000" },
				{ test: /\.woff$/, loader: "url-loader?limit=1000" }
			],
			noParse: [
				/moment-with-locales/
			]
  },
  externals: {
    jQuery: true
  },
  resolve: {
    alias: {
      Source: __dirname + '/src'
    }
  },
  debug: true
};

options.target = webpackTargetElectronRenderer(options);
module.exports = options;
