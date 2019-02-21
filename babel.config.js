module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv'
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      'module-resolver',
      {
        root: [
          '.'
        ],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
          '.stories.js'
        ],
        alias: {
          root: [
            '.'
          ],
          '@modules': './modules',
          '@': './src',
          '#actions': './src/store/actions',
          '#flags': './src/store/global/flags',
          '#propTypes': './src/utils/propTypes'
        }
      }
    ]
  ]
}