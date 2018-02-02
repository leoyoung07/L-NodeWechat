import { spawn } from 'child_process';
import gulp from 'gulp';

gulp.task('watch', async () => {
    return spawn('tsc.cmd', ['--watch', '--pretty'], { stdio: 'inherit'});
});

gulp.task('hot-reload', async () => {
    return spawn('supervisor.cmd', ['-w', 'dist', 'dist/index.js'], { stdio: 'inherit'});
});

gulp.task('default', gulp.parallel(['watch', 'hot-reload']));
