const gulp = require('gulp');

gulp.task('clean', () => {
  return del(['wwwroot/dist/**/*', 'wwwroot/dev/**/*']);
});

// Builds the entire web app into either the dist or build folder, depending on the node environment
gulp.task('build', () => {
  runSequence('clean', 'html');

  return gulp.src(config.paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(config.paths.baseDir));
});

// Default task, bundles the entire app and hosts it on an Express server
gulp.task('default', (cb) => {
  runSequence('clean', 'build', cb);
});
