import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

function fullPath(relativePath: string): string {
  return path.resolve(__dirname, relativePath);
}

const config: webpack.Configuration = {
  entry: {
    'doodle-popup': {
      import: fullPath('scripts/doodle-popup.ts'),
    },
  },

  output: {
    path: fullPath('dist'),
    filename: '[name].js',
    library: {
      name: 'DoodlePopup',
      type: 'umd',
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: fullPath('index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
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
