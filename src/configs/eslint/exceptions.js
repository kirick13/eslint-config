
export const configListEslintExceptions = [
	{
		files: [ 'eslint.config.{js,mjs,cjs}' ],
		rules: {
			'no-restricted-exports': 'off',
		},
	},
	{
		files: [ '**/*.ts' ],
		rules: {
			'max-params': 'off',
			'no-dupe-class-members': 'off',
			'no-invalid-this': 'off',
			'no-redeclare': 'off',
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
