
import tseslint                    from 'typescript-eslint';
import { configEslintSuggestions } from './eslint/suggestions.js';

export const configListTsEslint = [
	...tseslint.configs.recommended,
	{
		files: [ '**/*.ts' ],
		rules: {
			'@typescript-eslint/max-params': configEslintSuggestions.rules['max-params'],
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
