module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "webpackFinal": async (config) => {
    // ensure svgr support for the Storybook
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: {svgo: false, svgoConfig: { prefixIds: true} } }, "file-loader"],

    })
    return config;
  },
}