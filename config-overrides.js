const webpack = require("webpack");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { default: axios } = require("axios");

const envFile = path.resolve(__dirname, ".env");
const envConfig = dotenv.parse(fs.readFileSync(envFile));
const envVariables = {};

for (const k in envConfig) {
  envVariables[`process.env.${k}`] = JSON.stringify(envConfig[k]);
}

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: require.resolve("browserify-fs"),
    path: require.resolve("path-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer/"),
    axios: require.resolve("axios"),
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
    new webpack.DefinePlugin(envVariables),
  ];

  return config;
};
