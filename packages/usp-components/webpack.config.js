const path = require('path')

module.exports = {
    entry: { import: './index.js'},
    mode: 'production',
    output: {
        filename: 'componentes.bundle.js',
        path: path.resolve(__dirname, 'build'),
        library: 'usp-componentes',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions:['.js', '.jsx']
    }
}