module.exports = function(grunt) {
 
  grunt.registerTask('default',[
    'watch'
  ]);

  grunt.registerTask('buildjs',['concat:js', 'concat:libs', 'uglify:js']);
 
  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'src/js/*.js'
        ],
        dest: 'build/js/main.min.js'
      },
      libs: {
        options: {
          separator: ';'
        },
        src: [
          'src/js/vendor/*.js'
        ],
        dest: 'build/js/libs.min.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'build/js/main.min.js': ['build/js/main.min.js'],
          'build/js/libs.min.js': ['build/js/libs.min.js']
        }
      }
    },
    less: {
      style: {
        options: {
          cleancss: true
        },
        files: {
          "build/css/framework.css": "src/less/framework.less"
        }
      }
    },
    copy: {
      assets: {
        files: [
          {expand: true, cwd: 'src/assets/', src: ['**'], dest: 'build/assets'}
        ]
      },
      html: {
        files: [
          {expand: true, cwd: 'src', src: ['*.html'], dest: 'build/' }
        ]
      }
    },
    watch: {
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['concat:js', 'concat:libs', 'uglify:js']
      },
      css: {
        files: ['src/less/**/*.less'],
        tasks: ['less:style']
      },
      templates: {
        files: ['src/templates/**/*.hbs'],
        tasks: ['handlebars:compile']
      },
      assets: {
        files: ['src/assets/**/*'],
        tasks: ['copy:assets']
      },
      html: {
        files: ['src/*.html'],
        tasks: ['copy:html']
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'UAlberta.FrontEnd.templates',
          processName: function(filePath) { 
            var pieces = filePath.split("/");
            return pieces[pieces.length - 1];
          }
        },
        files: {
          'build/js/templates.js': "src/templates/**/*.hbs"
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');
 
};


