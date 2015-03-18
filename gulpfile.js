var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require("gulp-plumber"),
  jshint = require('gulp-jshint')
  ;

gulp.task('lint', function () {
  return gulp.src(['./**/*.js', '!./node_modules/**'])
    .pipe(plumber())
    .pipe(jshint())
});

gulp.task('serve', function () {
	return nodemon({ script: './bin/www', ext: 'js html ejs jade css' })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    });
});

gulp.task('default', ['serve']);
