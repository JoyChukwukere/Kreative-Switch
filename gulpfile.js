const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const { minify } = require('html-minifier-terser');
const through2 = require('through2');
const path = require('path');

gulp.task('minify-js', () => {
    return gulp.src('JS/*.js')
        .pipe(javascriptObfuscator())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', () => {
    return gulp.src('CSS/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-html', () => {
    return gulp.src('*.html')
        .pipe(through2.obj(function(file, _, cb) {
            if (file.isBuffer()) {
                minify(file.contents.toString(), {
                    collapseWhitespace: true,
                    removeComments: true
                }).then(function(content) {
                    file.contents = Buffer.from(content);
                    cb(null, file);
                }).catch(cb);
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('minify-js', 'minify-css', 'minify-html'));