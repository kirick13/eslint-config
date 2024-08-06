
export const configListEslintExceptions = [
	{
		files: [ 'eslint.config.js' ],
		rules: {
			'no-restricted-exports': 'off',
		},
	},
	{
		files: [ '**/*.ts' ],
		rules: {
			'no-dupe-class-members': 'off',
			'no-invalid-this': 'off',
			'no-unused-vars': 'off',
		},
	},
	{
		files: [
			'test/',
			'**/*.test.*',
		],
		rules: {
			'max-lines-per-function': 'off',
			'max-statements': 'off',
		},
	},
];
