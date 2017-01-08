module.exports = function(grunt) {
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        manage: 'false',
      },
      my_targets: {
        files: {
          'public/dist/js/main.min.js' : ['node_modules/jquery/dist/jquery.js', 'dev/javascript/bootstrap.js', 'dev/app/**/*.js']
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
          'dist/stylesheets/style.css' : 'dev/stylesheets/style.scss'
        }
      }
    },

    watch: {
        files: ['./dev/**/*.scss', './dev/app/**/*.js'],
        tasks: ['sass', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);

}