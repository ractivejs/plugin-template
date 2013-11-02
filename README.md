Ractive.js plugin template for Grunt
====================================

The starting point for creating new plugins for Ractive.js, using [Grunt](http://gruntjs.com).

Installation
------------

The following assumes you've [installed node.js](http://nodejs.org/).

### 1. Install Grunt

If you don't already have Grunt 0.4 on your machine, you can install it from npm like so:

```shell
$ npm install -g grunt-cli     # the taskrunner itself
$ npm install -g grunt-init    # the project scaffolding module
```

(Note: depending on your setup you may need to do `sudo npm install...` instead. I recommend configuring Node to install global modules to your user folder so that this is unnecessary - `npm config set prefix /Users/[username]/npm`.)

### 2. Install this template as 'rvpl'

```shell
$ git clone https://github.com/RactiveJS/Plugin-template ~/.grunt-init rvpl
```

(You can of course use whatever name you like - I use `rvpl` because it's easy to type.)



Usage
-----

Create a new project folder for your plugin and initialise it:

```shell
$ mkdir myplugin
$ cd myplugin
$ grunt-init rvpl
```

First, you will be asked what kind of plugin you're making. This is so that Grunt can set up your project with the standard naming convention: `Ractive-plugintype-pluginname`.

Then, you will be prompted for the plugin name, your name, and a license. The plugin name will default to the folder name (e.g. `myplugin`), and your name will be guessed from your git config. (See [here](http://gruntjs.com/project-scaffolding#specifying-default-prompt-answers) for information on how to override the default.)

The preferred license is MIT.

If the defaults are okay, you can just hit **Enter** repeatedly.

Once the project has been initialised, you will need to download some packages from npm:

```shell
$ npm install    # use npm install --no-registry if you want to use already cached modules
```


Building your plugin
--------------------

In the `src` folder is a single JavaScript file, with some placeholder comments for documentation. It's a good idea to fill this out with some basic usage instructions and whatever else other developers will need to know.

There's also some universal module definition boilerplate, which will allow your plugin to be used with or without module systems such as [RequireJS](http://requirejs.org/) (or another AMD library such as [curl](https://github.com/cujojs/curl)) and [Browserify](http://browserify.org/). You don't need to worry about the UMD boilerplate unless your plugin has a third-party dependency, at which point things can get hairy (but more so for users of your plugin than you!). See the [Ractive-adaptors-Backbone](https://github.com/RactiveJS/Ractive-adaptors-Backbone) plugin for an example.

Each plugin type must adhere to a particular API. For documentation on the plugin APIs see [todo...!].



Testing your plugin
-------------------

Each project has a `test` folder with pre-made `index.html` and `tests.js` files. The included test runner is [QUnit](http://qunitjs.com/), though you can easily swap it out for something else if you'd prefer.

When you run the `grunt` command, Grunt will lint the plugin, run the tests, and (if both tasks succeed) copy it to your root folder and create a minified version.



Demoing your plugin
-------------------

There is also an `index.html` file in the project root, setup to make it easy to build a demo of your plugin. This is also useful for debugging during development.

A nice trick is to create a `gh-pages` branch that mirrors your `master` branch - then, when you push the plugin repo to GitHub, other developers will be able to see the plugin in action by visiting http://you.github.io/the-plugin-repo.

To do this, after you've initialised your repo with `git init`, modify your `.git/config` file:

```
# add the following two lines to the [remote "origin"] section...

    push = +refs/heads/master:refs/heads/gh-pages
    push = +refs/heads/master:refs/heads/master


# ...it should now look something like this

[remote "origin"]
    fetch = +refs/heads/*:refs/remotes/origin/*
    url = git@github.com:user/repo.git
    push = +refs/heads/master:refs/heads/gh-pages
    push = +refs/heads/master:refs/heads/master
```

Thanks to [brettterpstra.com](http://brettterpstra.com/2012/09/26/github-tip-easily-sync-your-master-to-github-pages/) and [denbuzze](http://stackoverflow.com/a/7472481) for this tip.



Sharing your plugin
-------------------

If you build something and want to share it with other Ractive developers, add it to the wiki [TODO] and tweet [@RactiveJS](http://ractivejs.org)!