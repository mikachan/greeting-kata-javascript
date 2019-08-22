const { base, merge } = require("@ao-internal/webpack");

module.exports = function(env, argv) {
  const baseConfig = base(env, argv);

  const config = {
    context: path.resolve(__dirname, "src"),
    entry: { bundle: ["@babel/polyfill", "./index.js"] },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  };

  const merged = merge(base(env, argv), config);
  return merged;
};