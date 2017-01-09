module.exports = function(grunt) {
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    connect: {
      dist: {
        options: {
          port: 3001,
          base: 'dist',
          livereload: true
        }
      }
    },

    concat: {
      js: {
        files: {
          'dist/js/bundle.js': ['node_modules/jquery/dist/jquery.js', 'dev/javascript/bootstrap.js', 'dev/app/**/*.js']
        }
      }
    },

    uglify: {
      options: {
        manage: 'false',
      },
      my_targets: {
        files: {
          'dist/js/main.min.js' : ['dist/js/bundle.js']
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
        options: {
          livereload: true,
        },
        files: ['./dev/**/*.scss', './dev/app/**/*.js'],
        tasks: ['sass', 'concat', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('default',[
    'connect',
    'concat', 
    'sass', 
    'uglify', 
    'watch'
  ]);
}