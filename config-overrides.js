const rewireSass = require('react-app-rewire-scss');
const rewireSvgReactLoader = require("react-app-rewire-svg-react-loader");
const rewiredPostCss = require('react-app-rewire-postcss');

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  config = rewireSvgReactLoader(config, env);
  config = rewiredPostCss(config, {
    plugins: loader => [
      require('postcss-preset-env')()
    ]
  })
  return config;
}