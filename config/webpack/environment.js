const { environment } = require('@rails/webpacker')

const {resolve} = require("path");


environment.loaders.set('sass', {
    test: /\.(scss|sass)$/,
    use: [
            { loader: 'style-loader' },
            {
                loader: 'css-loader',
                options:
                {
                    modules: true,
                    localIdentName: '[name]--[local]--[hash:base64:5]'
                }
            },
            {
                loader: 'sass-loader' ,
                options: {
                    data: '@import "_base";', // I tried _variables as well
                    includePaths: [resolve("app/javascript/sass"), resolve("node_modules")]
                }
            }
        ]
})

environment.loaders.insert('html', {
                test: /\.html$/,
                loader: 'raw-loader'
}, { after: 'sass'} )
         

module.exports = environment
