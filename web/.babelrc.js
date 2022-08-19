module.exports = (api) =>
  api.env('production')
    ? {
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'usage',
              corejs: '3.6.4',
              shippedProposals: true,
              bugfixes: true,
              debug: true
            }
          ]
        ]
      }
    : {
        plugins: [
          ['transform-es2015-modules-commonjs-simple', { noMangle: true }]
        ],
        presets: ['@babel/env']
      };
