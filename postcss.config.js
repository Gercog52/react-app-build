module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'),
        require('cssnano')({
            parent: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    }
                }
            ]
        })
    ]
}