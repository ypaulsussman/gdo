module.exports = (config) => {
  config.addPassthroughCopy("./src/css/");
  
  config.addCollection("whatIRead", (collection) => {
    return collection
      .getFilteredByGlob("./src/content/wir/*.md")
      // @TODO: sort by date
      // .sort((a, b) =>
      //   Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
      // );
  });

  config.addCollection("whatIThink", (collection) => {
    return collection
      .getFilteredByGlob("./src/content/wit/*.md")
      // @TODO: sort by date
      // .sort((a, b) =>
      //   Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
      // );
  });

  config.addCollection("whatIDo", (collection) => {
    return collection
      .getFilteredByGlob("./src/content/wid/*.md")
      // @TODO: sort by date
      // .sort((a, b) =>
      //   Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
      // );
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
