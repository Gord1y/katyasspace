/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#F5F7F7',
				secondary: '#53AAF9',
				black: '#1C1B29',
				red: '#CB544B',
			},
		},
	},
	plugins: [],
}
