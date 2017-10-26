// Webpack config file
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
   entry: './src/components/app.js',
  
   output: {
      filename: 'dist/bundle.js',
   },
	
   watch:true,
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules$/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },

            { test: /\.css$/, loader:"style-loader!css-loader" }
         
      ]
   }
}

module.exports = config;