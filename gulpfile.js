const gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    inject = require('gulp-inject'),
    sourcemap = require('gulp-sourcemaps'),
    tslint = require('gulp-tslint'),
    tsc = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    Builder = require('systemjs-builder'),
    cfg = {
        lib: {
            polyfill: [
                require.resolve('core-js/client/shim.js'),
                require.resolve('zone.js/dist/zone.js'),
                require.resolve('reflect-metadata/Reflect.js'),
                require.resolve('systemjs/dist/system.src.js')
            ]
        },
        config: 'system.config.js',
        tsProject: tsc.createProject('tsconfig.json', {
            typescript: require('typescript')
        })
    };


gulp.task('default', ['polyfill']);

gulp.task('build:prod', ['compile'], () => {
    builder = new Builder('.', cfg.config);
    return builder.buildStatic('app', './dist/build.js', {
        mangle: false,
        minify: true,
        sourceMaps: true
    });
});

gulp.task('compile', ['lint'], () => {
    gulp.src(['src/**/*.ts', 'typings/browser.d.ts'])
        .pipe(cfg.tsProject())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('htmlcompile', ['lint'], () => {
    gulp.src(['src/**/*.html'])
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('inject:dev', () => {
    gulp.src('./index.html')
        .pipe(inject(gulp.src([cfg.config]), {
            starttag: '<!-- inject:app -->',
            transform: function(filePath, file) {
                return '\n\t<script src=".' + filePath + '"></script>\n\t<script>System.import(\'app\').catch(console.error.bind(console));</script>\n\t';
            }
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('inject:prod', ['build:prod'], () => {
    gulp.src('./index.html')
        .pipe(inject(gulp.src(['dist/build.js']), {
            starttag: '<!-- inject:app -->',
            transform: function(filePath, file) {
                return '<script src="' + filePath + '"></script>';
            }
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('lint', () => {
    gulp.src('src/**/*.ts')
        .pipe(tslint({
            formatter: 'prose',
            tslint: require('tslint')
        }));
});

gulp.task('polyfill', () => {
    gulp.src(cfg.lib.polyfill, {
            base: './node_modules'
        })
        .pipe(sourcemap.init())
        .pipe(uglify({
            mangle: false
        }))
        .pipe(concat('polyfill.js'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('start:dev', ['serve:dev', 'watch']);
gulp.task('start:prod', ['serve:prod']);

gulp.task('serve:dev', ['inject:dev'], () => {
    connect.server({
        livereload: true,
        fallback: 'index.html'
    });
});

gulp.task('serve:prod', ['inject:prod'], () => {
    connect.server({
        fallback: 'index.html'
    });
});

gulp.task('watch', ['compile', 'htmlcompile'], () => {
    gulp.watch('src/**/*.ts', ['compile', 'htmlcompile']);
});
