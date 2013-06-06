# grunt-blog
> Grunt task to create a blog using markdown and templates

## Getting Started
If you haven't used grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a gruntfile as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:
```shell
npm install grunt-blog --save-dev
```

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-blog');
```

## Documentation
Here is the minimal config to create a blog using `grunt-blog`:
```js
blog: {
  posts: {
    src: 'src/posts',
    layout: 'src/layouts/post.jade',
    url: 'blog/posts/:title'
  }
}
```
Here is the maximum config:
```js
blog: {
  options: {
    pageSrc: 'src/pages',
    devFolder: 'dev',
    distFolder: 'dist'
  },
  posts: {
    src: 'src/posts',
    layout: 'src/layouts/post.jade',
    url: 'blog/posts/:title'
  }
}
```
### Formatting blog posts
Blog posts are written in markdown and include a metadata section at the top to provide information for listing blog posts, the url, and timestamp.

### Required properties
#### src
Type: `string`

The source directory where the blog posts are located.
#### layout
Type: `string`

The layout for a blog post. We currently support [jade](https://github.com/visionmedia/jade) and [ejs](https://github.com/visionmedia/ejs) templates. The post content will be stored in a `content` variable to be rendered in the layout template. Here is an example layout template;

#### url
Type: `string`

This is the url of the blog post which will appear on your web page. This string takes variables as parameters using the '/:variable' syntax. This variable(s) must correspond to the posts metadata.

### Options

#### pageSrc
Type: `string`

This is folder where the pages of you website are located. These pages can use the post metadata to display a list of posts. All of the files in this folder.

#### devFolder
Type: `string`

This is folder where the development version of the blog is generated. 

### distFolder
Type: `string`

This is folder where the distribution version of the blog is generated. 

# Changelog

**0.0.0** - Initial release

