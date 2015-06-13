var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

const SASS_FILES = './public/sass/**/*.scss';
const JADE_FILES = './views/**/*.jade';

gulp.task('sass', function() {
    return gulp.src(SASS_FILES)
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 3 versions', 'ie 8', 'ie 9'],
        cascade: false
      }))
      .pipe(gulp.dest('./public/stylesheets'))
      .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: "localhost:3000"
  });

  gulp.watch(SASS_FILES, ['sass']);
  gulp.watch(JADE_FILES).on('change', browserSync.reload);
});
