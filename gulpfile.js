// REQUIRE DEPENDENCIES
// ============================================================
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');

// DECLARE FILE PATHS
// ============================================================
const paths = {
  jsSource: ['./public/app/**/*.js'], //where you find the js files
  //** every single folder, and find * every single js file
  sassSource: ['./public/app/**/*.scss']
};
// DEFINE TASKS
// ============================================================
gulp.task('sass', function() {
    return gulp.src(paths.sassSource)
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(cssmin())
        .pipe(rename({extname: ".min.css"}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(concat('bundle.js'))
        .pipe(annotate())
        .pipe(uglify())
        .pipe(rename({extname: ".min.js"}))
        .pipe(gulp.dest('./dist'))
});
//save for when everything is finished
// gulp.task('views', function() {
//     gulp.src(paths.viewsSource)
//       .pipe(htmlmin({collapseWhitespace: true}))
//       .pipe(gulp.dest("./dist/views"))
// })
//save for when everything is finished
// gulp.task('index', function() {
//     gulp.src(paths.indexSource)
//       .pipe(htmlmin({collapseWhitespace: true}))
//       .pipe(gulp.dest("./dist"))
// })
gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
    // gulp.watch(paths.indexSource, ['index']);
    // gulp.watch(paths.viewsSource, ['views']);
});
//save for when everything is finished
// gulp.task('default', ['js', 'sass', 'index', 'views', 'queries',
//     'watch'
// ]);
gulp.task('default', ['js', 'sass', 'watch'
]);
