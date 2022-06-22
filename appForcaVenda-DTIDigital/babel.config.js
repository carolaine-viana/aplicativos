module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@features': './src/features',
          '@layout': './src/layout',
          '@mocks': './src/mocks',
          '@model': './src/model',
          '@shared': './src/shared',
          '@utils': './src/utils',
        },
      },
    ],
    ['babel-plugin-styled-components'],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
    ['inline-dotenv'],
  ],
};
