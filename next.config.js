const withPlugins = require("next-compose-plugins");
const nextPreact = require("next-plugin-preact");
const hashClassname = require("./src/helpers/hashClassname");

const nextConfiguration = { future: { webpack5: true } };

module.exports = withPlugins([nextPreact, hashClassname], nextConfiguration);
