var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require("gulp-babel");

gulp.task('sass', function() {
    return gulp.src('./project/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./project'));
});

gulp.task('watch', function () {
    gulp.watch('./project/**/*.scss', gulp.series('sass'));
    gulp.watch('./project/common.js', gulp.series('default'));
});


gulp.task("default", function () {
  return gulp.src("./project/common.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});