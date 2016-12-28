var gulp = require('gulp');
var autoprefixed = require('gulp-autoprefixer');

gulp.task('styles', function() {
	gulp.src('css/styles.css')
		.pipe(autoprefixer())
		.pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
	gulp.watch('css/styles.css', ['styles']);
});