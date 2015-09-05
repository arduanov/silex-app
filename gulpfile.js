var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


var paths = {
    js: [
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery/dist/jquery.min.js'
    ],
    css: [
        'bower_components/bootstrap/dist/css/bootstrap.min.css'
    ],
    watch: []
};


// Конкатенация и минификация файлов
gulp.task('css', function () {
    gulp.src(paths.css)
        .pipe(concat('min.css'))
        .pipe(gulp.dest('web/asset/css'));
});

gulp.task('js', function () {
    gulp.src(paths.js)
        .pipe(concat('min.js'))
        .pipe(gulp.dest('web/asset/js'));
});

// Rerun the task when a file changes
//gulp.task('watch', function() {
//    gulp.watch(paths.scripts, ['scripts']);
//    gulp.watch(paths.images, ['images']);
//});

// Действия по умолчанию
gulp.task('default', ['css','js']);
