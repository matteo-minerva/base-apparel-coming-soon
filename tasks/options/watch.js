module.exports = {
    scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
            spawn: false,
        }
    },
    css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass', 'postcss'],
        options: {
            spawn: false,
            livereload: true,
        }
    },
    images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
            spawn: false,
        }
    },
    html: {
        files: ['*.html'],
        tasks: [],
        options: {
            spawn: false,
        }
    },
    livereload: {
        options: {livereload: true},
        files: ['dist/**/*', 'index.html']
    }
}