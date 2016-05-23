var gulp = require('gulp');
var bom = require('gulp-bom');
var convertEncoding = require('gulp-convert-encoding');

gulp.task('utf-bom',function() {
  gulp.src(['./platforms/windows/www/**/*.js', './platforms/windows/www/**/*.css', './platforms/windows/www/**/*.html'])
    .pipe(convertEncoding({to: 'utf8'}))
    .pipe(bom())
    .pipe(gulp.dest('./platforms/windows/www'));
});
