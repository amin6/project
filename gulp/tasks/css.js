var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var beaut = require('postcss-perfectionist');
var cssImport = require('postcss-import');



gulp.task('css',() => {
    gulp.src('./app/assets/styles/main.css')
    .pipe(postcss([cssvars, beaut, cssImport, nested, autoprefixer({
        browsers: ['last 15 versions']               
    })]))
    .pipe(gulp.dest('./app/styles'));
});