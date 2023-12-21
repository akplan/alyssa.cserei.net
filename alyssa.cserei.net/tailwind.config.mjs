/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'apc-accent-yellow': '#FFEB3B',
			'apc-text': {
				light: '#212121',
				dark: '#E5E5E5'
			},
			'apc-bg': {
				light: '#E5E5E5',
				dark: '#212121'
			}
		}
	},
	plugins: [],
}
