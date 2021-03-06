const gulp = require('gulp')
const eslint = require('gulp-eslint')
const mocha = require('gulp-mocha')
var babel = require('gulp-babel')

gulp.task('build', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist/'))
})

gulp.task('test', () =>
  gulp.src('test.js', {read: false})
    // `gulp-mocha` needs filepaths so you can't have any plugins before it
    .pipe(mocha({reporter: 'nyan'}))
)

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
  return gulp.src(['**/*.json', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
})

gulp.task('default', ['build-dist'])
