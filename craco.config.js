const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#464646",
              "@border-radius-base": "0px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
