var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch',() => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html',() => {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css',() => {
        browserSync.reload();
        gulp.start('cssInject');
    });
});

gulp.task('cssInjnect', ['css'],() => {
    gulp.src('./app/assets/styles/main.css')
    .pipe(browserSync.stream());
});