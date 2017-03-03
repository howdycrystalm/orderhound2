var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var annotate = require('gulp-ng-annotate');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');

var paths = {

    jsSource: ['./public/**/*.js'],
    sassSource: ['./public/styles/**/*.scss'],
    indexSource: ['./public/index.html'],
    routesSource: ['./public/routes/**/*.html']
};

gulp.task('sass', function() {
    return gulp.src(paths.sassSource)
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(cssmin())
        .pipe(rename({extname: ".min.css"}))
        .pipe(gulp.dest('./dist'));
});

// gulp.task('sass', function () {
//  return gulp.src(paths.sassSource)
//    .pipe(sass())
//    .pipe(concat('bundle.css'))
//    .pipe(gulp.dest('./dist/css'));
// });

gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(concat('bundle.js'))
        .pipe(annotate())
        .pipe(uglify())
        .pipe(rename({extname: ".min.js"}))
        .pipe(gulp.dest('./dist'))
});

gulp.task('routes', function() {
    gulp.src(paths.routesSource)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist/routes'))
})

gulp.task('index', function() {
    gulp.src(paths.indexSource)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
    gulp.watch(paths.indexSource, ['index']);
    gulp.watch(paths.routesSource, ['routes']);
});

gulp.task('default', ['js', 'sass', 'watch', 'index', 'routes'
]);
