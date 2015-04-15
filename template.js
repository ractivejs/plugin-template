// Ractive.js plugin template for Grunt
// ====================================

(function ( exports, prompt ) {

	'use strict';

	// Basic template description.
	exports.description = 'Create a new Ractive.js plugin';

	// Template-specific notes to be displayed before question prompts.
	exports.after = 'Now, install project dependencies with _npm i_ (or _npm i --no-registry_ to install modules from cache, which may be much faster). This will download grunt and the plugins this project uses during development.\n\n' +
	 'Run _bower i_ to install the latest version of Ractive.js to the vendor folder, for demoing and testing your plugin.'

	// Any existing file or directory matching this wildcard will cause a warning.
	exports.warnOn = '*';

	// The actual init template.
	exports.template = function ( grunt, init, done ) {

		var options, prompts, complete, type, types;



		types = {
			a: { singular: 'adaptor', plural: 'adaptors' },
			c: { singular: 'component', plural: 'components' },
			d: { singular: 'decorator', plural: 'decorators' },
			e: { singular: 'event', plural: 'events' },
			t: { singular: 'transition', plural: 'transitions' }
		};

		complete = function ( err, props ) {
			var files;

			props.fullname = 'ractive-' + type.plural + '-' + props.name;
			props.type = type.singular;

			files = init.filesToCopy( props );
			init.addLicenseFiles(files, props.licenses);

			init.copyAndProcess( files, props );
			done();
		};

		process.stdout.write( 'What type of plugin?\n  ' +
			'a'.underline.bold + 'daptor\n  ' +
			'c'.underline.bold + 'omponent\n  ' +
			'd'.underline.bold + 'ecorator\n  ' +
			'e'.underline.bold + 'vent\n  ' +
			't'.underline.bold + 'ransition' );

		process.stdin.setRawMode( true );
		process.stdin.resume();
		process.stdin.setEncoding('utf8');

		process.stdin.on('data', function(chunk) {
			if ( type ) {
				return;
			}

			type = types[ chunk.toLowerCase() ];

			if ( type ) {
				process.stdin.pause();
				process.stdin.setRawMode( false );

				prompts = [
					init.prompt( 'name' ),
					init.prompt( 'author_name' ),
					init.prompt( 'licenses' ),
					init.prompt( 'repository' )
				];

				init.process({}, prompts, complete );
			}
		});

	};

}( exports, require( 'prompt' ) ) );
