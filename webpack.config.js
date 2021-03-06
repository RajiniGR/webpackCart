const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader', 'sass-loader']
       },

       {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: '[hash]-[name].[ext]'
                } 
            }]
        },

        {
          test: /\.(eot|otf|woff|woff2|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 8000,
                  name: '[name].[hash].[ext]',
                  outputPath: 'dist/'
              }
            }
          ]
      },

     ],
   },
};
