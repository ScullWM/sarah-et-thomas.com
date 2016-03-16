module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
          js_path: {
            files: {
              'js/output.min.js': ['js/cbpFWTabs.js', 'js/maplace.js', 'js/places.js', 'js/main.js']
            }
          }
        },
        cssmin: {
          options: {
            shorthandCompacting: true,
            roundingPrecision: -1
          },
          target: {
            files: {
              'css/output.min.css': ['css/normalize.css', 'css/animate.css', 'css/main.css']
            }
          }
        },

        watch: {
            files: ['js/*.js', 'css/*.css'],
            tasks: ['uglify', 'cssmin']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks
    grunt.registerTask('default', ['uglify', 'cssmin']);
};