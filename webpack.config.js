var path = require("path")
var webpack =  require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
    entry:  './static/js/index.js',
    output: {
        path:     'static/js',
        filename: 'bundle.js',
    },


    plugins: [
      new BundleTracker({path: __dirname, filename: './assets/webpack-stats.json'})
    ]

};
