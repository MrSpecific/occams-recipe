const path = require('path');
const { extendDefaultPlugins } = require('svgo');

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: extendDefaultPlugins([
                {
                  name: 'removeAttrs',
                  active: false,
                },
              ]),
            },
            svgProps: { className: 'svg-graphic' },
            dimensions: false,
          },
        },
      ],
    });

    config.resolve.alias['@public'] = path.resolve(__dirname, './public/');
    // console.log(config);

    return config;
  },
};
