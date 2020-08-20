module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addPassthroughCopy('src/assets/images');

  return {
    dir: {
      input: 'src',
      htmlTemplateEngine: 'njk',
      includes: '_includes',
      layouts: '_layouts',
      markdownTemplateEngine: 'njk',
      templateFormats: ['md', 'njk']
    }
  };
};
