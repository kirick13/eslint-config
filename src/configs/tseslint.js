
import tseslint from 'typescript-eslint';

export const configListTsEslint = [
	{
		files: [ '**/*.ts' ],
		languageOptions: {
			parser: tseslint.parser,
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			'@typescript-eslint/no-invalid-this': 'error',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
		},
	},
	// disable type-aware linting on JS files
	{
		files: [ '**/*.js' ],
		rules: tseslint.configs.disableTypeChecked.rules,
	},
];
