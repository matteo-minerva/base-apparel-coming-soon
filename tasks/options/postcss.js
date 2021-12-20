module.exports = {
    options: {
        map: false,
        processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')(), // add vendor prefixes
        ]
    },
    dist: {
        src: 'dist/css/styles.css',
        dest: 'dist/css/styles.prefixed.css'
    }
}