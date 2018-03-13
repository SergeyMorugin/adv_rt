const { environment } = require('@rails/webpacker')

const {resolve} = require("path");


//environment.loaders.get('sass')
//  .use.find(item => item.loader === 'sass-loader').options.includePaths = [resolve("node_modules")]



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

//environment.loaders.append('html', {
//                test: /\.html$/,
//                loader: 'raw-loader'
//})
environment.loaders.insert('html', {
                test: /\.html$/,
                loader: 'raw-loader'
}, { after: 'sass'} )

//environment.loaders.prepend('babel', {
//    test: /\.jsx?$/,
//    exclude: /node_modules/,
//   loader: 'babel-loader',
//    options: {
 //       babelrc: false,
 //       presets: [
  //          ['env', { 'targets': { 'browsers': ['last 2 versions']}}],
  //          'react',
   //         'stage-0'
  //      ]
//    }
//})

console.log(environment)
//const babelLoader = environment.loaders.get('babel')

//environment.loaders.insert('babel', babelLoader, { before: 'css'} )



             

module.exports = environment
