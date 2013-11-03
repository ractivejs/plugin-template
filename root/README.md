Ractive.js {%= name %} {%= type %} plugin
==========={%= name.replace(/./g,'=') %}={%= type.replace(/./g,'=') %}=======

*Find more Ractive.js plugins at [ractivejs.org/plugins](http://ractivejs.org/plugins)*

[See the demo here.](TODO)

Usage
-----

Include this file on your page below Ractive, e.g:

```html
<script src='lib/Ractive.js'></script>
<script src='lib/{%= Fullname %}.js'></script>
```

Or, if you're using a module loader, require this module:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( '{%= Fullname %}' );
```

**plugin-specific instructions to go here...**



License
-------

Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}. Licensed {%= licenses %}

Created with the [Ractive.js plugin template](https://github.com/RactiveJS/Plugin-template) for Grunt.