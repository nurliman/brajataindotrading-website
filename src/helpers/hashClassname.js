const loaderUtils = require("loader-utils");
const path = require("path");

const regexEqual = (x, y) =>
  x instanceof RegExp &&
  y instanceof RegExp &&
  x.source === y.source &&
  x.global === y.global &&
  x.ignoreCase === y.ignoreCase &&
  x.multiline === y.multiline;

const HashClassName = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, { dev }) {
      if (!dev) {
        // hash classname
        const sassRules = config.module.rules
          .find((rule) => typeof rule.oneOf === "object")
          .oneOf.find(
            (rule) =>
              rule.sideEffects === false &&
              regexEqual(rule.test, /\.module\.(scss|sass)$/)
          );

        sassRules.use = sassRules.use.map((rule) =>
          rule.loader.includes("css-loader") &&
          !rule.loader.includes("postcss-loader")
            ? {
                ...rule,
                options: {
                  ...rule.options,
                  modules: {
                    ...rule.options.modules,
                    getLocalIdent: (
                      context,
                      localIdentName,
                      localName,
                      options
                    ) => {
                      const hash = loaderUtils.getHashDigest(
                        path.posix.relative(
                          context.rootContext,
                          context.resourcePath
                        ) + localName,
                        "md5",
                        "base64",
                        6
                      );
                      const className = loaderUtils.interpolateName(
                        context,
                        "_" + hash,
                        options
                      );
                      return className.replace(".module_", "_");
                    },
                  },
                },
              }
            : rule
        );
      }

      return config;
    },
  });
};

module.exports = HashClassName;
