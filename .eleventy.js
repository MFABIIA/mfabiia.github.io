// function configureMarkdownIt() {
//     // Reference: https://github.com/markdown-it/markdown-it-container/issues/23
//     return require("markdown-it")({ html: true });
// };
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {
    // Set the markdown configuration in 11ty
    let md_it_options = {
        html: true,
        breaks: true,
        linkify: true
    }
    eleventyConfig.setLibrary("md", markdownIt(md_it_options).use(markdownItAttrs));

    eleventyConfig.setBrowserSyncConfig({
        files: ['./public/static/**/*.css', './public/static/**/*.js', './public/**/*.html'],
    });
    eleventyConfig.addPassthroughCopy("./src/static/**/*.jpg");
    eleventyConfig.addPassthroughCopy("./src/static/**/*.mp4");

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
        templateFormats: ["md", "njk", "html",],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};