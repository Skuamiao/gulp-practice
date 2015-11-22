var gulp = require('gulp'),
    gulp_less = require('gulp-less');

gulp.task('demo', function () {
  gulp.src('./assets/styles/**/demo.less')
    .pipe(gulp_less({
       paths: ['./assets']
    }))
    .pipe(gulp.dest('./assets/styles'));
});
