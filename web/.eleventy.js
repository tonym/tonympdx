const { DateTime } = require('luxon');
const readingTime = require('eleventy-plugin-reading-time');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/assets/static');

  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromISO(dateObj).toFormat('dd LLL yyyy');
  });

  let markdownIt = require('markdown-it');
  let markdownItAnchor = require('markdown-it-anchor');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#'
  };

  eleventyConfig.setLibrary(
    'md',
    markdownIt(options).use(markdownItAnchor, opts)
  );

  eleventyConfig.addFilter('markdownify', function (value) {
    const md = new markdownIt(options);
    return md.render(value);
  });

  eleventyConfig.addPlugin(readingTime);

  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
    }
  });

  return {
    dir: {
      data: '_data',
      htmlTemplateEngine: 'njk',
      includes: '_includes',
      input: 'src',
      layouts: '_layouts',
      markdownTemplateEngine: 'njk',
      templateFormats: ['md', 'njk']
    }
  };
};
