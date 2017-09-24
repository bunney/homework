const gulp = require('gulp');
const babel = require('gulp-babel');
gulp.task('default',['praise'],()=>{
	gulp.watch(['src/**/*.es','!src/public/*/*.es'],['praise'])
})
//给一个任务  去 gulp-babel 查询包的用法

gulp.task('praise', () =>{
	return gulp.src(['src/nodeuii/**/*.es','!src/nodeuii/public/*/*.es'])
		.pipe(babel({
			presets: ['es2015',"stage-0"]
		}))
		.pipe(gulp.dest('./build'))
}
);