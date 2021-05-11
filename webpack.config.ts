import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';

function fullPath(relativePath: string): string {
  return path.resolve(__dirname, relativePath);
}

const config: webpack.Configuration = {
  entry: {
    'doodle-popup': {
      import: fullPath('scripts/doodle-popup.ts'),
      library: {
        name: 'DoodlePopup',
        type: 'umd',
      },
    },
  },

  output: {
    path: fullPath('dist'),
    filename: '[name].js',
  },

  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: fullPath('index.html'),
      scriptLoading: 'blocking',
      inject: false,
      hash: true,
      minify: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: fullPath('assets'),
          to: fullPath('dist/assets'),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  devServer: {
    host: '0.0.0.0',
    open: true,
    useLocalIp: true,
  },
  devtool: false,
};

export default config;
