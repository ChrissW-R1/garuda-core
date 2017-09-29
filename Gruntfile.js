module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['dist/**']
        },
        ts: {
            options: {
                rootDir: 'src/main/ts'
            },
            main: {
                tsconfig: true,
                src: 'src/main/ts/**/*.ts',
                dest: 'dist'
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '**/*.js',
                    dest: 'dist',
                    ext: '.min.js'
                }]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'ts',
        'uglify'
    ]);
};
