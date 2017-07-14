module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['Gruntfile.js', 'app/styles/sass/**/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        sass: {
            dist: {
                files: {
                    'app/styles/main.css': 'app/styles/sass/main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/styles/',
                    src: ['main.css'],
                    dest: 'app/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('minify', ['sass', 'cssmin']);
};
