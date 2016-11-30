module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console", "$", "$scope"],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "Travel": true, "$http": true, "$scope": true}
      },
      files: ['../app/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/styles.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};