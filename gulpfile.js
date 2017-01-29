var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename');
    


gulp.task('js', function () {
    return gulp.src(['./js/Helper.js', './idashboard/js//App.js', './idashboard/js/components/ClipBoard_TD.js'])
        .pipe(concat('bundle_js.js'))
        //.pipe(jsmin())
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./production/idashboard/'));
});

gulp.task('watch', function() {
    gulp.watch("./idashboard/js/App.js", ['js']);
    gulp.watch('./idashboard/js/Helper.js', ['js']);
    gulp.watch('./idashboard/js/components/ClipBoard_TD.js', ['js']);
});

gulp.task('default', ['js', 'watch']);




// gulp.task('css', function () {
//   return gulp.src('./public/css/*.css')
//     .pipe(concatCss("bundle.css"))
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./build/css/'));
// });