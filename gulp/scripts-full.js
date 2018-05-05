module.exports = function(gulp, plugins) {
  return function () {
    return plugins.browserify({
      entries: 'lib/formio.full.js',
      debug: false
    })
      .bundle()
      .pipe(plugins.source('formio.full.js'))
      .pipe(plugins.wrap(plugins.template, {version: plugins.packageJson.version}))
      .pipe(gulp.dest('lib/dist'))
      .pipe(plugins.rename('formio.full.min.js'))
      .pipe(plugins.streamify(plugins.uglify()))
      .pipe(gulp.dest('lib/dist'));
  };
};
