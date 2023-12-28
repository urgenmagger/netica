module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          navigation: './src/navigation',
          screens: './src/screens',
          utils: './src/utils',
          common: './src/common',
        },
      },
    ],
  ],
};
