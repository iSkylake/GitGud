var path = require('path');

module.exports = {
	entry: './public/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		alias: {
			Main: path.resolve(__dirname, './public/components/Main.jsx'),
			Message: path.resolve(__dirname, './public/components/Message.jsx'),
			NameForm: path.resolve(__dirname, './public/components/NameForm.jsx'),
		},
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};