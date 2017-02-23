var path = require("path")
var webpack =  require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
    entry:  './client/index.js',
    output: {
        path:     '',
        filename: './client/bundle.js',
    },
    



    plugins: [
      new BundleTracker({path: __dirname, filename: './assets/webpack-stats.json'}),
      new webpack.ProvidePlugin({
        "React": "react",
       }),
    ],
    
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: {presets: ['es2015', 'react'] }}

        ]
    },


	resolve: {
		modulesDirectories: ['node_modules', 'bower_component'],
		extension: ['', '.js', 'jsx']
	},

};
