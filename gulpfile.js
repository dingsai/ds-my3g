var gulp=require("gulp");
var sass=require("gulp-sass");
var browserSync=require("browser-sync").create();
var reload=browserSync.reload;
var rjs=require("gulp-requirejs");
var uglify=require("gulp-uglify");
var cssmin=require("gulp-clean-css");
var rename=require("gulp-rename");
var clean=require("gulp-clean");
var imgmin=require("gulp-imagemin");
gulp.task("sass",function(){
    gulp.src("main.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(reload({stream:true}))

});
gulp.task("start",['sass'],function(){
    browserSync.init({
        server:"./",
        startPath:"html/my3D_1.html"
    });
    gulp.watch("scss/*scss",[sass]);
    gulp.watch("html/*html",reload);
    gulp.watch("js/*js",reload);
});

gulp.task("clean",function(){
    gulp.src("dist/")
        .pipe(clean())
});
gulp.task("jsmin",function () {
    return rjs({
        baseUrl:"./",
        name:"lib/almond",
        include:['main'],
        out:"main.min.js",
        paths:{
            "jquery":"lib/jquery-2.1.1"
        }
    })
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task("cssmin",function () {
   gulp.src("css/main.css")
       .pipe(cssmin())
       .pipe(rename("main.min.css"))
       .pipe(gulp.dest("dist"));
});
gulp.task("imgmin",function(){
    gulp.src("img")
        .pipe(imgmin())
        .pipe(gulp.dest("dist/img"));
});
//为打包测试做准备
gulp.task("build",["clean","cssmin","jsmin","imgmin"]);