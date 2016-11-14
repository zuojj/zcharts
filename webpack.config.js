module.exports = {
	entry: {
		line: './line/line.js',
		math: './math/math.js'
	},
	output: {
		path: __dirname,
		filename: '[name]_[hash].js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css'
		}]
	}
}