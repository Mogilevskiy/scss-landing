let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./project/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./project'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./project/**/*.scss', gulp.series('sass'));
});