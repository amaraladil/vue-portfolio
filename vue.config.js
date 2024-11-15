const { defineConfig } = require("@vue/cli-service");

("use strict");

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "PortfolioSet",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    short_name: "Portfolio",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
    manifestOptions: {
      background_color: "#4DBA87",
      icons: [
        {
          src: "./img/icons/213-sun.png",
          sizes: "512x512",
          type: "image/svg+xml",
          purpose: "any maskable",
        },
      ],
    },
    iconPaths: {
      favicon32: "img/icons/213-sun.png",
      favicon16: "img/icons/213-sun.png",
      appleTouchIcon: "img/icons/213-sun.png",
      maskIcon: "img/icons/213-sun.png",
      msTileImage: "img/icons/213-sun.png",
    },
  },
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
