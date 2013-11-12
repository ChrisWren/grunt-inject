module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('inject', 'Injects JavaScript into a page for development.', function () {
    var scriptSrcs = grunt.file.expand(this.data.scriptSrcs);
    var scriptText = '';

    if (scriptSrcs) {
      scriptSrcs.forEach(function (script) {
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
