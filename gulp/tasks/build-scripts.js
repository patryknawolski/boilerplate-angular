var config = require('../config')
var gulp = require('gulp')
var uglify = require('gulp-uglify')

// Minifies scripts
gulp.task('build-scripts', function () {
  gulp.src(config.scripts.build + '/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.build))
})
