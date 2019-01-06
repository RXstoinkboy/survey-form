module.exports = {
    entry: {
      index: './src/js/index.js',
    },
    output: {
      path: `${__dirname}/dist/js`,
      filename: 'legacy-[name].js',
    },
    watch: false,
    mode: 'development', // ta opcja zostanie pominięta jeżeli użyjemy npm run build
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: ['> 1%'],
                },
              }],
            ],
          },
        },
      }],
    },
  };