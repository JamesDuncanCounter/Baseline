module.exports = function(grunt) {
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        manage: 'false',
      },
      my_targets: {
        files: {
          'public/dist/js/main.min.js' : ['public/dev/javascript/bootstrap.js', 'public/dev/app/**/*.js']
        }
      }
    },    

    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
        files: {
          'public/dist/stylesheets/style.css' : 'public/dev/stylesheets/style.scss'
        }
      }
    },

    watch: {
        files: ['./public/**/*.scss', './public/dev/app/**/*.js'],
        tasks: ['sass', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);

}