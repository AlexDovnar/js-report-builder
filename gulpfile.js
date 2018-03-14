'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('./styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
    gulp.watch('./styles/**/*.scss', ['styles']);
});
