const proxy = require("http-proxy-middleware");
const _ = require("lodash");

module.exports = function(app) {
  if (!_.isUndefined(process.env.REACT_APP_IS_LOCAL)) {
    app.use(
      proxy("/api/upload", {
        target: "http://localhost:8089",
        changeOrigin: true,
        pathRewrite: {'^/api/upload': '/'},
        ws: true,
        secure: false,
      })
    )

    app.use(
      proxy("/api", {
        target: "http://localhost:8088",
        changeOrigin: true,
        pathRewrite: {'^/api': '/'},
        ws: true,
        secure: false,
      })
    );
  }
};
