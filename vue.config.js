const marked = require("marked");
const renderer = new marked.Renderer();

module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          { loader: "html-loader" },
          {
            loader: "markdown-loader",
            options: {
              pedantic: false,
              gfm: true,
              breaks: true,
              renderer
            }
          }
        ]
      }]
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
