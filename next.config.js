const path = require("path");

module.exports = {
  images: {
    domains: ["localhost"],
    //   loader: "imgix",
    //   path: "/",
  },
  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  trailingSlash: true,
};
