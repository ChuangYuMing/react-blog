var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var react = require('gulp-react');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');


gulp.task('jsx', function () {
    return gulp.src('app/js/**/*.js')
        .pipe(plumber({
          errorHandler: onError
        }))
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

// Watch files
gulp.task('watch', function() {
  gulp.watch('dist/*.html', ['bs-reload']);
  gulp.watch('app/js/**/*.js', ['jsx', 'bs-reload']);
});

// Error handeler
var onError = function (err) {  
    console.log('//////////////////////////////');
    gutil.log(gutil.colors.yellow(err.message));
    console.log('//////////////////////////////');
    //gutil.beep();
    browserSync.notify(err.message, 5000);
};

// Reload all Browsers
gulp.task('bs-reload', ['jsx'], function () {
    browserSync.reload();
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './dist/'
    },
    port: 8080,
    watchOptions: {debounceDelay: 1000}
  })
});


gulp.task('default',['jsx', 'watch', 'browser-sync']);