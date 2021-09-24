const moment = require('moment');
moment.locale('en');



module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter('dateIso', date => {
        return moment(date).toISOString();
    });
    
    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('LL'); // E.g. May 31, 2019
    });

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addWatchTarget("./src/images/");

    let markdownIt = require("markdown-it");
    let markdownItKatex = require("markdown-it-texmath");
    let options = {
      html: true,
    };
    let markdownLib = markdownIt(options).use(markdownItKatex, {
      engine: require("katex"),
      delimiters: "dollars",
      katexOptions: { macros: { "\\RR": "\\mathbb{R}" } },
    });
    eleventyConfig.setLibrary("md", markdownLib);
  
    // eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
    return {
      dir: {
        input: "src",
        output: "public2",
      },
    };
  };