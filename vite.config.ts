import { defineConfig } from 'vitest/config';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import { sveltekit } from '@sveltejs/kit/vite';
export default defineConfig({
	plugins: [topLevelAwait(), wasm(), sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
