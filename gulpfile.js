var gulp = require('gulp');
var webserver = require('gulp-webserver');
var path = 'app/';

gulp.task('js', function() {
  gulp.src(path + 'js/**/*');
});

gulp.task('html', function() {
  gulp.src(path + '*.html');
});

gulp.task('css', function() {
  gulp.src(path + 'css/*.css');
});

gulp.task('watch', function() {
  gulp.watch(path + 'js/**/*', ['js']);
  gulp.watch(path + 'css/*.css', ['css']);
  gulp.watch([path + '*.html',
  path + 'views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src(path)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
