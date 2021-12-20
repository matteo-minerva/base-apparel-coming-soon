module.exports = {
    options: {
        mergeIntoShorthands: true,
        roundingPrecision: -1
    },
    combine: {
        files: {
            'dist/css/styles.min.css' : 'dist/css/styles.prefixed.css'
        }
    }
}