module.exports = {
    options: {
        optimizationLevel: 3,
        svgoPlugins: [{removeViewBox: false}],
    },
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: 'src/images/*.{png,jpg,gif}',
            dest: 'dist/images/'
        }]
    }
}