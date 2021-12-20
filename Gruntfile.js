module.exports = function (grunt) {

    // Utility to load the different option files
    // based on their names
    function loadConfig(path) {
        const glob = require('glob');
        const object = {};
        let key;

        glob.sync('*', {cwd: path}).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }

    // Initial config
    const config = {
        pkg: grunt.file.readJSON('package.json')
    };

    // Load tasks from the tasks folder
    grunt.loadTasks('tasks');

    // Load all the tasks options in tasks/options base on the name:
    // watch.js => watch{}
    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    // Default Task is basically a rebuild
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'postcss', "cssmin"]);
    grunt.registerTask('dev', ['connect', 'watch']);
};