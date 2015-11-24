var gulp = require('gulp'),
    gulp_less = require('gulp-less'),
    watch = require('gulp-watch');

gulp.task('one', function () {
    return gulp.src('./assets/styles/one.less')
                .pipe(watch('./assets/styles/one.less'))
                .pipe(gulp_less({
                    paths: ['./assets/styles/']
                }))
                .pipe(gulp.dest('./assets/styles'));
});
