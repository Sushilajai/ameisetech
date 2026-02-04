// // vue.config.js
// module.exports = {
//   runtimeCompiler: true,
//     publicPath: process.env.NODE_ENV === "production" ? "/ameisetech/" : "/",

// };
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};
