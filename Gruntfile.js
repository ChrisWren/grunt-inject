module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    inject: {
      dev: {
        files:{
          'test/output/index.html': 'test/fixtures/index.html'
        },
        scriptSrc: 'test/fixtures/script.js'
      }
    },
    clean: ['test/output'],
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'nyan'
      },
      all: {
        src: ['test/*.js']
      }
    },
    watch: {
      options: {
        livereload: true
      },
      src: {
        files: ['test/fixtures/**'],
        tasks: ['inject']
      }
    },
    jshint: {
      options: {
        curly: true,
        camelcase: true,
        bitwise: true,
        indent: 2,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        nonew: true,
        quotmark: 'single',
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        trailing: true,
        eqnull: true,
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true
        }
      },
      files: {
        src:  ['*.js', 'test/*.js', 'tasks/*.js']
      }
    }
  });

  grunt.loadTasks('./tasks');
  grunt.registerTask('test', ['jshint', 'simplemocha']);
};
