module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
          '.png',
          '.jpg',
        ],
        alias: {
          '@types': './src/@types',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@store': './src/store',
          '@interfaces': './src/interfaces',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
