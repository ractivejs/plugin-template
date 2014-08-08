# Ractive.js {%= name %} {%= type %} plugin

*Find more Ractive.js plugins at [docs.ractivejs.org/latest/plugins](http://docs.ractivejs.org/latest/plugins)*

[See the demo here.](TODO)

## Usage

Include this file on your page below Ractive, e.g:

```html
<script src='lib/ractive.js'></script>
<script src='lib/{%= fullname %}.js'></script>
```

Or, if you're using a module loader, require this module:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( '{%= fullname %}' );
```

**plugin-specific instructions to go here...**



## License

Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}. Licensed {%= licenses %}

Created with the [Ractive.js plugin template](https://github.com/ractivejs/plugin-template) for Grunt.
