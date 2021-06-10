// Подключаем Gulp
var gulp = require("gulp");

// Подключаем плагины Gulp
var sass = require("gulp-sass"), // переводит SASS в CSS
    cssnano = require("gulp-cssnano"), // Минимизация CSS
    autoprefixer = require('gulp-autoprefixer'), // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
    imagemin = require('gulp-imagemin'), // Сжатие изображение
    concat = require("gulp-concat"), // Объединение файлов - конкатенация
    uglify = require("gulp-uglify"), // Минимизация javascript
    rename = require("gulp-rename"); // Переименование файлов

/* --------------------------------------------------------
   ----------------- Таски ---------------------------
------------------------------------------------------------ */

// Копирование файлов HTML в папку dist
gulp.task("html", function() {
    return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
});

gulp.task("htmlViews", function() {
    return gulp.src("src/views/*.html")
    .pipe(gulp.dest("dist/views"));
});

// Объединение, компиляция Sass в CSS, простановка венд. префиксов и дальнейшая минимизация кода
gulp.task("sass", function() {
    return gulp.src("src/scss/*.scss")
        .pipe(concat('styles.scss'))
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
          }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("dist/css"));
});

// Объединение и сжатие JS-файлов
gulp.task("scripts", function() {
    return gulp.src("src/js/*.js") // директория откуда брать исходники
        // .pipe(concat('scripts.js')) // объеденим все js-файлы в один 
         .pipe(uglify()) // вызов плагина uglify - сжатие кода
        // .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
        .pipe(gulp.dest("dist/js")); // директория продакшена, т.е. куда сложить готовый файл
});



// Сжимаем картинки
gulp.task('imgs', function() {
    return gulp.src("src/img/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/img"))
});

// Задача слежения за измененными файлами
gulp.task("watch", function() {
    gulp.watch("src/*.html", gulp.series("html"));
    gulp.watch("src/views/*.html", gulp.series("htmlViews"));
    gulp.watch("src/js/*.js", gulp.series("scripts"));
    gulp.watch("src/scss/*.scss", gulp.series("sass"));
    gulp.watch("src/img/*.+(jpg|jpeg|png|gif)", gulp.series("imgs"));
});

///// Таски ///////////////////////////////////////

// Запуск тасков по умолчанию
// gulp.task("default", ["html", "sass", "scripts", "imgs", "watch"]);
gulp.task('default', gulp.series("html","htmlViews", "sass", "scripts", "imgs", "watch"));