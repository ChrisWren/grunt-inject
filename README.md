# grunt-inject
> Grunt task to inject scripts during development. Great for use with LiveReload via [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch), web inspector remote via [grunt-weinre](https://github.com/ChrisWren/grunt-weinre), and [Dev Tools snippets](https://github.com/bgrins/devtools-snippets). Check out the [sample script](#sample-script) below.

[![NPM version](https://badge.fury.io/js/grunt-inject.png)](http://badge.fury.io/js/grunt-inject)  [![Travis Status](https://travis-ci.org/ChrisWren/grunt-inject.png?branch=master)](https://travis-ci.org/ChrisWren/grunt-inject)

## Getting Started
If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-inject --save-dev
```

Then add this line to your project's `Gruntfile.js` Gruntfile:

```javascript
grunt.loadNpmTasks('grunt-inject');
```

## Documentation

Here is a config to inject a script into a single page, and a second config to inject a script into multiple pages. You can use which ever one suits your needs:

```js
inject: {
  single: {
    scriptSrc: 'build/devscript.js',
    files: {
      'dist/index.html': 'src/index.html'
    }
  },
  multiple: {
    scriptSrc: 'build/devscript.js',
    files: [{
      expand: true,
      cwd: 'src',
      src: ['**/*.html'],
      dest: 'dist'
    }]
  }
}
```

### Required properties

#### scriptSrc
Type: `String`

The path of the script to be injected into the page.

#### files
Type: [`Grunt file configuration`](http://gruntjs.com/configuring-tasks#files)

The `src` HTML files must have the following comment which is replaced by the injected JavaScript:

```html
<!-- inject -->
```

## Sample Script

Here is a sample `devscript.js` which works together with [grunt-contrib-watch with livereload](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload) and [grunt-weinre with the recommended usage](https://github.com/ChrisWren/grunt-weinre#recommended-usage).

```js

// Adds LiveReload script pointing at the client's hostname.
// This is helpful for mobile web development where your desktop might point at localhost while
// your devices point to a local IP address.
document.write('<script src="http://'
 + window.location.hostname
 + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')

// Adds the client as a weinre(web inspector remote) debugging target at http://localhost:8082/client/#anonymous
// This is used to debug every mobile browser besides Mobile Safari and Chrome for Android
document.write('<script src="http://' + window.location.hostname + ':8082/target/target-script-min.js#anonymous"><\/script>');
```

# Changelog

**0.1.0** - Multiple script injectons can now be configured in a single task now that the [Grunt file configuration](http://gruntjs.com/configuring-tasks#files) is used.

**Breaking Changes:**

- `htmlSrc` and `htmlDest` are no longer supported and must be replaced by the [Grunt file configuration](http://gruntjs.com/configuring-tasks#files).
- the `<!--inject-->` comment now has spaces inside and looks like this: `<!-- inject -->`.

**0.0.0** - Initial release.

