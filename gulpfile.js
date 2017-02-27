var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

var uglify = require('gulp-uglify');
// var watch = require('gulp-watch');

var paths = {
    jsSource: ['./public/app/**/*.js'],
    // sassSource: ['./public/styles/**/*.scss'],
    indexSource: ['./public/index.html'],
    routesSource: ['./public/app/routes/**/*.html']
    // querySource: ['./queries/**/*.sql']
};

gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(concat('bundle.js'))
        .pipe(annotate())
        .pipe(uglify())
        .pipe(rename({extname: ".min.js"}))
        .pipe(gulp.dest('./dist'))
});
// gulp.task('sass', function () {
//  return gulp.src(paths.sassSource)
//    .pipe(sass())
//    .pipe(concat('bundle.css'))
//    .pipe(gulp.dest('./dist'));
// });
gulp.task('index', function() {
    gulp.src(paths.indexSource)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist'))
});
gulp.task('routes', function() {
    gulp.src(paths.routesSource)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist/routes'))
})
gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
    gulp.watch(paths.indexSource, ['index']);
    gulp.watch(paths.routesSource, ['routes']);
    // gulp.watch(paths.querySource, ['queries']);
});

gulp.task('default', ['js', 'index', 'routes', 'watch'
]);
