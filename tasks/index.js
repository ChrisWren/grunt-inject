module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('inject', 'Injects JavaScript into a page for development.', function () {
    var htmlText;
    var scriptText;

    if (this.data.htmlSrc) {
      htmlText = grunt.file.read(this.data.htmlSrc);
    } else {
      grunt.log.error('Please specify an htmlSrc file that contains a <--inject--> where you want the script injected.');
      return;
    }

    if (this.data.scriptSrc) {
      scriptText = grunt.file.read(this.data.scriptSrc);
    } else {
      grunt.log.error('Please specify a scriptSrc file to inject into the html.');
      return;
    }

    if (this.data.htmlDest) {
      grunt.file.write(this.data.htmlDest, htmlText.replace('<!--inject-->','<script type="text/javascript">' + scriptText + '</script>'));
      grunt.log.ok(this.data.scriptSrc + ' injected'.blue + ' into ' + this.data.htmlDest);
    } else {
      grunt.log.error('Please specify a htmlDest file where the injected html file should be output.');
      return;
    }

  });
};
