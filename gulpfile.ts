import { spawn } from 'child_process';
import gulp from 'gulp';

gulp.task('watch', async () => {
    return spawn('npm.cmd', ['run', 'watch'], { stdio: 'inherit'});
});

gulp.task('hot-reload', async () => {
    return spawn('npm.cmd', ['run', 'hot-reload'], { stdio: 'inherit'});
});

gulp.task('default', gulp.parallel(['watch', 'hot-reload']));
