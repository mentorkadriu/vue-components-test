module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
    output: {
      libraryExport: "default",
    }
  },
};
