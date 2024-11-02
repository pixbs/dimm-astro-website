const eslintPluginAstro = require('eslint-plugin-astro')
const eslintPluginPrettier = require('eslint-plugin-prettier')
const eslintConfigPrettier = require('eslint-config-prettier')

module.exports = [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs['flat/recommended'], // In CommonJS, the `flat/` prefix is required.
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': 'warn',
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
	eslintConfigPrettier,
]
