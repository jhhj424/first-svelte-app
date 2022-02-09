import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';
import alias from '@rollup/plugin-alias';
import path from 'path';
import strip from '@rollup/plugin-strip';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		// production 일때만 strip 적용
        production && strip({
            include: '**/*.(svelte|js)', // svelte, js로 끝나는 확장자에 적용, 기본 값: '**/*.js'
            functions: ['console.*'] // 적용 될 함수 설정, 기본 값: ['console.*', 'assert.*']
        }),
		alias({
            entries: [
                {
                    find: '~',
                    replacement: path.resolve(__dirname, 'src/'), // __dirmname: 해당 파일의 경로, "해당 파일의 경로/src"에 해당하는 경로를 ~로 alias
                }
            ]
        }),
		svelte({
			preprocess: sveltePreprocess({
				scss: {
                    // 전역 scss 파일 등록, scss가 사용되는 곳에만 적용
                    prependData: ['@import "./src/common.scss";'],
                },
                // postcss를 이용하여 공급업체 접두사 등록
                postcss: {
                    plugins: [
                        require('autoprefixer')() // autoprefixer 등록
                    ]
                }
            }),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
