import gulp from 'gulp';
import imagemin, { optipng } from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';

// Task to optimize PNG images
gulp.task('optimize-png', () => {
    return gulp.src('src/images/*.png') 
        .pipe(imagemin([
            optipng({ optimizationLevel: 5 }), 
        ]))
        .pipe(gulp.dest('src/images')); 
});

// Task to optimize WebP images
gulp.task('optimize-webp', () => {
    return gulp.src('src/images/*.webp') 
        .pipe(imagemin([
            imageminWebp({ quality: 100 }), 
        ]))
        .pipe(gulp.dest('src/images')); 
});

// Default task to run both image optimization tasks
gulp.task('default', gulp.series('optimize-png', 'optimize-webp'));
