
export const configListEslintExceptions = [
	{
		files: [ 'eslint.config.{,m,c}{js,ts}' ],
		rules: {
			'no-restricted-exports': 'off',
		},
	},
	{
		files: [ '**/hyper-api/**/*.{,m,c}{js,ts}' ],
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
			'**/*.test.{,m,c}{js,ts}',
		],
		rules: {
			'max-lines-per-function': 'off',
			'max-statements': 'off',
		},
	},
];
