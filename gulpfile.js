// Kind of boiler plate code to build css file from scss file and watch any save.

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
    return src("sass/main.scss").pipe(sass()).pipe(dest("css")); // In "" we are mentioning relative paths
}

function watchTask() {
    watch("sass/**/*.scss", buildStyles); // Watch all SCSS files in the sass folder
}

exports.default = series(buildStyles, watchTask);

// After writing this code, run npx gulp
