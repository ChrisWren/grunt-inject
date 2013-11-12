module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('inject', 'Injects JavaScript into a page for development.', function () {
    var scriptSrc = grunt.file.expand(this.data.scriptSrc);
    var scriptText = '';

    if (scriptSrc) {
      scriptSrc.forEach(function (script) {
        scriptText += grunt.file.read(script);
      });
    } else {
      grunt.log.error('Please specify a scriptSrc file to inject into the html.');
      return;
    }

    this.files.forEach(function (file) {
      grunt.file.write(file.dest, grunt.file.read(file.src).replace('<!-- inject -->', '<script type="text/javascript">' + scriptText + '</script>'));
      grunt.log.ok('Dev scripts injected'.blue + ' into ' + file.dest);
    });

  });
};
