var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pako = require('gulp-pako');


var paths = {

    css: [
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap-material-design/dist/css/material.min.css',
        'bower_components/bootstrap-material-design/dist/css/roboto.css',
        'bower_components/bootstrap-material-design/dist/css/ripples.min.css',
        'bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
        'templates/asset/admin.css',

    ],
    js: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/bootstrap-material-design/dist/js/material.min.js',
        'bower_components/bootstrap-material-design/dist/js/ripples.min.js',
        'bower_components/bootstrap-markdown/js/bootstrap-markdown.js',
        'bower_components/moment/min/moment.min.js',
        'bower_components/moment/locale/en-gb.js',
        'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
        'bower_components/marked/lib/marked.js',
        'templates/asset/admin.js',

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
