var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename');
    


gulp.task('js', function () {
    return gulp.src(['./js/Helper.js', './js/App.js', './js/blocks/Test.js'])
        .pipe(concat('bundle_js.js'))
        //.pipe(jsmin())
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./production/'));
});

gulp.task('watch', function() {
    gulp.watch("./js/App.js", ['js']);
    gulp.watch('./js/Helper.js', ['js']);
    gulp.watch('./js/blocks/Test.js', ['js']);
});

gulp.task('default', ['js', 'watch']);




// gulp.task('css', function () {
//   return gulp.src('./public/css/*.css')
//     .pipe(concatCss("bundle.css"))
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./build/css/'));
// });