module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/**/*.{html,js,njk,css,md}');
    eleventyConfig.setBrowserSyncConfig({
        files: ['./public/static/**/*.css', './public/static/**/*.js', './public/**/*.html'],
    });

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};