module.exports = function(grunt) {
 
  grunt.registerTask('default',[
    'http-server:dev', 'watch'
  ]);

  grunt.registerTask('buildHome', ['concat:js', 'concat:libs', 'uglify:js'])

  grunt.registerTask('buildjs',['concat:js', 'concat:libs', 'uglify:js']);
 
  grunt.registerTask('production',['concat:js',  'uglify:prod', 'less:prod']);

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
          'src/js/libs/*.js'
        ],
        dest: 'build/js/libs.min.js'
      }
    },
    uglify: {
      options: {
        mangle: true
      },
      js: {
        files: {
          'build/js/main.min.js': ['build/js/main.min.js'],
          'build/js/libs.min.js': ['build/js/libs.min.js']
        }
      },
      prod: {
        files: {
          'build/js/UAlberta.FrontEnd.min.js' : ['build/js/main.min.js']
        }
      }
    },
    less: {
      style: {
        files: {
          "build/css/framework.css": "src/less/framework.less"
        }
      },
      prod: {
        options: {
          compress:true
        },
        files: {
          "build/css/framework.min.css": "src/less/framework.less"
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
          'src/js/2-templates.js': "src/templates/**/*.hbs"
        }
      }
    },
    'http-server': {
        'dev': {
            // the server root directory
            root: './build',
            port: 8080,
            host: "localhost",
            showDir : true,
            autoIndex: true,
            defaultExt: "html",
            runInBackground: true
        }

    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http-server');
};


