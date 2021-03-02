module.exports = {
  plugins: {
    // 'postcss-import': {},
    'postcss-pxtorem': {
      // propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      propList: ['*'],
    },
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: {
        grid: true,
      },
    },
  },
};
