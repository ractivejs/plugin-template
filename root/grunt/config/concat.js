module.exports = {
	bundle: {
		src: 'src/{%= Fullname %}.js',
		dest: 'tmp/{%= Fullname %}.js'
	},
	options: {
		process: {
			data: {
				VERSION: '<%= pkg.version %>'
			}
		}
	}
};
