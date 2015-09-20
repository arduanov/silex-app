var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css');

var paths = {

    css: [
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap-material-design/dist/css/material-fullpalette.min.css',
        'bower_components/bootstrap-material-design/dist/css/roboto.css',
        'bower_components/bootstrap-material-design/dist/css/ripples.min.css',
        'node_modules/simplemde/src/css/codemirror.css',
        'node_modules/simplemde/src/css/simplemde.css',
        'node_modules/simplemde/src/css/spell-checker.css',


        'templates/asset/admin.css'
    ],
    js: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/bootstrap-material-design/dist/js/material.min.js',
        'bower_components/bootstrap-material-design/dist/js/ripples.min.js',
        //'bower_components/bootstrap-markdown/js/bootstrap-markdown.js',
        //'bower_components/moment/min/moment.min.js',
        //'bower_components/moment/locale/en-gb.js',
        //'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
        //'bower_components/marked/lib/marked.js',
        //'node_modules/simplemde/dist/simplemde.min.js',

        'node_modules/simplemde/src/js/codemirror/codemirror.js',
        'node_modules/simplemde/src/js/codemirror/continuelist.js',
        'node_modules/simplemde/src/js/codemirror/fullscreen.js',
        'node_modules/simplemde/src/js/codemirror/markdown.js',
        'node_modules/simplemde/src/js/codemirror/overlay.js',
        'node_modules/simplemde/src/js/codemirror/gfm.js',
        'node_modules/simplemde/src/js/codemirror/xml.js',
        'node_modules/simplemde/src/js/typo.js',
        'node_modules/simplemde/src/js/spell-checker.js',
        'node_modules/simplemde/src/js/marked.js',
        'templates/asset/simplemde.js',

        'templates/asset/admin.js',
        'templates/asset/material.js'
    ],
    watch: []
};


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
gulp.task('js-uglify', function () {
    gulp.src(paths.js)
        .pipe(concat('min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('web/asset/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('gulpfile.js', ['js','css']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.css, ['css']);
});

// Действия по умолчанию
gulp.task('default', ['css', 'js-uglify']);
