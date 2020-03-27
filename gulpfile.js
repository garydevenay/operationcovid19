'use strict';
 
var { src, dest, watch } = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
 
sass.compiler = require('node-sass');

function css() {
    return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('src'))
}



exports.css = css;
exports.default = function() {
    watch("src/scss/*.scss", css);
}