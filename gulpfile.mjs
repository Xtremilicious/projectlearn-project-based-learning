import gulp from 'gulp';
import imagemin, { optipng } from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';

// Task to optimize PNG images
gulp.task('optimize-png', () => {
    return gulp.src('src/images/*.png') // Change this to your image source
        .pipe(imagemin([
            optipng({ optimizationLevel: 5 }), // Optimizing PNG images
        ]))
        .pipe(gulp.dest('dist/images')); // Change this to your destination folder
});

// Task to optimize WebP images
gulp.task('optimize-webp', () => {
    return gulp.src('src/images/*.webp') // Change this to your image source
        .pipe(imagemin([
            imageminWebp({ quality: 100 }), // Optimizing WebP images
        ]))
        .pipe(gulp.dest('dist/images')); // Change this to your destination folder
});

// Default task to run both image optimization tasks
gulp.task('default', gulp.series('optimize-png', 'optimize-webp'));
