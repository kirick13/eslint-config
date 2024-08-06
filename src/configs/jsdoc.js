
import pluginJsdoc from 'eslint-plugin-jsdoc';

export const configListJsdoc = [
	pluginJsdoc.configs['flat/recommended'],
	{
		rules: {
			'jsdoc/check-tag-names': [
				'error',
				{
					definedTags: [ 'import' ],
				},
			],
			'jsdoc/require-jsdoc': 'error',
		},
	},
	// typescript
	{
		files: [ '**/*.ts' ],
		rules: {
			'jsdoc/require-param-type': 'off',
			'jsdoc/require-returns-type': 'off',
		},
	},
	// exceptions
	{
		files: [
			'test/',
			'**/*.test.*',
		],
		rules: {
			'jsdoc/require-jsdoc': 'warn',
		},
	},
];
