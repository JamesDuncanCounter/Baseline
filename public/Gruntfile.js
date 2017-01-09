module.exports = function(grunt) {
    

  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    express: {
      prod: {
        options: {
          server: 'express-server.js',
          bases: ['./'],
          port: 3001,
          hostname: "*",
          livereload: true,
          keepalive: false
        }
      }
    },

    concat: {
      js: {
        files: {
          'dev/javascript/bundle.js': ['node_modules/jquery/dist/jquery.js', 'dev/javascript/bootstrap.js', 'dev/app/**/*.js']
        }
      }
    },

    uglify: {
      options: {
        manage: 'false',
      },
      my_targets: {
        files: {
          'dist/js/main.min.js' : ['dev/javascript/bundle.js']
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
        files: ['./dev/**/*.scss', './dev/app/**/*.js', './dev/app/**/*.html'],
        tasks: ['sass', 'concat', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-express');
  
  grunt.registerTask('default',[
    'express', 
    'concat', 
    'sass', 
    'uglify', 
    'watch'
  ]);
  

}