module.exports = (config) => {
  config.addPassthroughCopy("./src/images/");
  
  config.addPassthroughCopy("./src/css/");

  config.addCollection("whatIRead", (collection) => {
    return collection
      .getFilteredByGlob("./src/content/wir/*.md")
      .sort((a, b) => (new Date(a.data.date) > new Date(b.data.date) ? 1 : -1));
  });

  config.addCollection("whatIThink", (collection) => {
    return collection
      .getFilteredByGlob("./src/content/wit/*.md")
      .sort((a, b) => (new Date(a.data.date) > new Date(b.data.date) ? 1 : -1));
  });

  config.addCollection("whatIDo", (collection) => {
    return collection
      .getFilteredByGlob("./src/content/wid/*.md")
      .sort((a, b) => (new Date(a.data.date) > new Date(b.data.date) ? 1 : -1));
  });


  config.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return [...tagSet].sort();
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
