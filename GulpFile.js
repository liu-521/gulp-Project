//引包
var gulp=require('gulp');
var less=require('gulp-less');//将less转换成css
var uglify=require('gulp-uglify');//压缩js的插件
var csso=require('gulp-csso');//压缩js的插件
var concat=require('gulp-concat');//合并代码
var htmlmin=require('gulp-htmlmin');//压缩html插件



//定义一个任务，名为myless
//功能：把less转换为css
gulp.task('myless',function(){
//	1.匹配到要转换为css的less文件有哪些
    gulp.src(['*.less'])
    //less()方法执行得到一个对象obj,这个对象会传递给pipe方法
    //pipe方法中会自动调用obj中已经定义好的方法将less转换成css
    .pipe(less())
    //gulp.dest()方法会返回一个对象，将上一步的代码保存到指定文件夹中
    .pipe(gulp.dest('./css'));
    console.log("css转换好了");
    
})

//压缩js
gulp.task('myjs',function(){
	gulp.src(['./js/*.js'])
	.pipe(uglify())
	.pipe(gulp.dest('./img'))
})

//压缩css
gulp.task('mycsso',function(){
	gulp.src(['./css/*.css'])
	.pipe(csso())
	.pipe(gulp.dest('./img'))
})

//合并代码
gulp.task('myconcat',function(){
	//匹配js
	gulp.src(['./js/*.js'])
	.pipe(uglify())//压缩
	.pipe(concat('all.js'))//合并
	.pipe(gulp.dest('./concatjs'))
	console.log('哈哈哈');
	
})

//压缩html
gulp.task('myhtml',function(){
	gulp.src('./*.html')
	//collapseWhitespace为true时去掉空白
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest('html'));
})


