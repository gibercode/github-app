
const withImages = require("next-images");


module.exports = {
  reactStrictMode: false,
}

module.exports = withImages({
    images: {
        domains: ['https://github-app-gibercode.vercel.app/']
    },
    webpack(config, options) {
        return config;
    }
});
