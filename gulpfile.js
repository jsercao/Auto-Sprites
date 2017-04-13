var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
    var spriteData = gulp.src('src/images/*.png').pipe(spritesmith({
        imgName: 'images/sprite.png',
        cssName: 'css/sprite.css',
        algorithm: 'binary-tree',
        cssTemplate: 'src/tpls/handlebarsStr.css.handlebars'
    }));
    return spriteData.pipe(gulp.dest('dist/'));
});
