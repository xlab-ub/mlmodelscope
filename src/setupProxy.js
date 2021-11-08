const proxy = require("http-proxy-middleware");
const _ = require("lodash");

module.exports = function(app) {
  //let target = window.location.protocol + "//" + window.location.hostname;
  if (!_.isUndefined(process.env.REACT_APP_IS_LOCAL)) {

  }
  target = "https://mlmodelscope.org/";

  app.use(
    proxy("/api", {
      target,
      changeOrigin: true,
      ws: true,
      secure: false,
    })
  );
};
