/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	singleQuote: true,
	endOfLine: 'auto',
	jsxSingleQuote: true,
	trailingComma: 'all',
	semi: false,
	bracketSpacing: true,
	useTabs: true,
	tabWidth: 2,
	astroAllowShorthand: true,
}
