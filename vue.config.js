module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_reset.scss";
          @import "@/assets/scss/_fonts.scss";
          @import "@/assets/scss/_variables.scss";
        `,
      },
    }
  }
};