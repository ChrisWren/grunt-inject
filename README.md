# grunt-inject
> Grunt task to inject scripts during development. Great for use with [Dev Tools snippets](https://github.com/bgrins/devtools-snippets).

[![NPM version](https://badge.fury.io/js/grunt-inject.png)](http://badge.fury.io/js/grunt-inject)  [![Travis Status](https://travis-ci.org/ChrisWren/grunt-inject.png?branch=master)](https://travis-ci.org/ChrisWren/grunt-inject)

## Getting Started
If you haven't used grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a gruntfile as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:
```shell
npm install grunt-inject --save-dev
```

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-inject');
```

## Documentation
Here is the config to inject a script into a page:
```js
inject: {
  dev: {
    htmlSrc: 'src/index.html',
    scriptSrc: 'build/setup.js',
    htmlDest: 'dev/index.html'
  }
}
```

### Required properties

#### htmlSrc
Type: `String`

The html source file which contains the following comment to be replaced by the script:

```html
<!--inject-->
```

#### scriptSrc
Type: `String`

The script to be injected into the page.

#### htmlDest
Type: `String`

The location where the injected html file is output.

# Changelog

**0.0.0** - Initial release

