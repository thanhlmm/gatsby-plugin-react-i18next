'use strict';

exports.__esModule = true;
exports.onPreBootstrap = void 0;

var onPreBootstrap = function onPreBootstrap(_args, pluginOptions) {
  // Check for deprecated option.
  if (pluginOptions.hasOwnProperty('path')) {
    console.error(
      'gatsby-plugin-react-i18next: "path" option is deprecated. Please remove it from config in your gastby-config.js. As of v1.0.0, language JSON resources should be loaded by gatsby-source-filesystem plugin and then fetched by GraphQL query. It enables incremental build and hot-reload as language JSON files change.\nSee details: https://github.com/microapps/gatsby-plugin-react-i18next'
    );
  }
};

exports.onPreBootstrap = onPreBootstrap;
