var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    gulpConcat = require('gulp-concat'),
    browserSync = require('browser-sync');

var config = {
    bowerDir: './bower_components'
}



//convert sass to css dev
gulp.task('styles:dev', function() {
    return gulp.src([
            'assets/css/sass/*.sass'
        ])
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});

//convert sass to css production
gulp.task('styles:production', function() {
    return gulp.src([
            'assets/css/sass/*.sass'
        ])
        .pipe(gulpSass({ outputStyle: 'compressed' }).on('error', gulpSass.logError))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});


//make good thing for js

//compile all

//watch

//default