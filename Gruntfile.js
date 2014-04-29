module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '(function () {\n\nvar Tap = {};\n',
                footer: '\nwindow.Tap = Tap;\nTap.init();\n\n})();'
            },
            dist: {
                src: ['src/utils.js', 'src/device.js', 'src/tap.js'],
                dest: 'dist/tap.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'dist/tap.min.js': ['dist/tap.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);

};