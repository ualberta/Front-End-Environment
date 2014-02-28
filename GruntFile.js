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
          "build/css/style.css": "src/less/style.less"
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
        files: ['**/*.js'],
        tasks: ['concat:js', 'concat:libs', 'uglify:js'],
        options: {
          cwd: 'src/js/',
        }
      },
      css: {
        files: ['**/*.less'],
        tasks: ['less:style'],
        options: {
          cwd: 'src/less/',
        }
      },
      assets: {
        files: ['**/*'],
        tasks: ['copy:assets'],
        options: {
          cwd: 'src/assets/',
        }
      },
      html: {
        files: ['*.html'],
        tasks: ['copy:html'],
        options: {
          cwd: 'src/',
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
 
};


