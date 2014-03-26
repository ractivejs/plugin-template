module.exports = {
	bundle: {
		src: 'src/{%= fullname %}.js',
		dest: 'tmp/{%= fullname %}.js'
	},
	options: {
		process: true
	}
};
