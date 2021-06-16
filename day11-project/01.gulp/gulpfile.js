const gulp = require('gulp');
const babel = require('gulp-babel');

//使用task定义一个任务 规定任务名
gulp.task('babel', () =>
    gulp.src('./src/js/*js') //把某个文件夹的文件读取出来一个可读流
    .pipe(babel({
        //把ES6代码编译为ES6
        //把ES6模块化规范编译为CommonJS规范
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js')) //把处理的流写入到某个文件夹
);