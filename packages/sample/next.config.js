/*
nextjs-boilerplate
Copyright 2020-present NAVER Corp.
MIT license
 */

const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const spriteDirectories = ['main', 'list'];

const makeSprite = dirName => {
  return new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, 'asset/sprites', dirName),
      glob: '*.png',
    },
    target: {
      image: path.resolve(__dirname, `public/${dirName}-[hash].png`),
      css: [
        [
          path.resolve(__dirname, `public/${dirName}.scss`),
          {
            format: 'handlebars_based_template',
            formatOpts: { ratio: 2 },
          },
        ],
      ],
    },
    apiOptions: {
      generateSpriteName: function (fileName) {
        const parsed = path.parse(fileName);
        const dir = parsed.dir.split(path.sep);
        const moduleName = dir[dir.length - 1];
        return moduleName + '__' + parsed.name;
      },
      cssImageRef: `/${dirName}-[hash].png`,
    },
    customTemplates: {
      handlebars_based_template: path.resolve(
        __dirname,
        'asset/sprites/scss.template.handlebars',
      ),
    },
  });
};

const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(new CaseSensitivePathsPlugin());
    spriteDirectories.forEach(dir => {
      config.plugins.push(makeSprite(dir));
    });

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    config.module.rules.forEach(rule => {
      const { use, include } = rule;

      if (use) {
        if (include) {
          include.push(path.resolve(__dirname, '../common/'));
        } else {
          rule.include = [
            path.resolve(__dirname, '../common/'),
            path.resolve(__dirname),
          ];
        }
      }
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      config: path.resolve(__dirname, 'src', 'config'),
    };

    return config;
  },
};

module.exports = nextConfig;
