

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/assets/");

    eleventyConfig.addWatchTarget("src/css/");

    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/project/**/*.md");
    })
    eleventyConfig.addCollection("studyFields", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/studyField/**/*.md");
    })

    eleventyConfig.addWatchTarget("src/css/");
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true

    }
}