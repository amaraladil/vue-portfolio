const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(png|jpe?g|gif|svg)$/i,
  //         use: [
  //           {
  //             loader: "file-loader",
  //             options: {
  //               name: "[path][name].[ext]",
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
});
