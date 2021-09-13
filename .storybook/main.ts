const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "storybook-addon-performance",
  ],
  typescript: {
    check: true,
  },
  webpackFinal: async (config) => {
    config.resolve.extensions.push(".svg");

    config.module.rules = config.module.rules.map((data) => {
      if (/svg\|/.test(String(data.test)))
        data.test =
          /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

      return data;
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: require.resolve("babel-loader") },
        { loader: require.resolve("@svgr/webpack") },
      ],
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
