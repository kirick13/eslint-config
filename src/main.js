
import globals                 from 'globals';
import { configListEslint }    from './configs/eslint.js';
import { configListJsdoc }     from './configs/jsdoc.js';
import { configListStylistic } from './configs/stylistic.js';
import { configListTsEslint }  from './configs/tseslint.js';
import { configListUnicorn }   from './configs/unicorn.js';

export const config = [
	{
		ignores: [
			'dist/',
			'node_modules*/',
			'**/*.json',
		],
	},
	{
		files: [ '**/*.js' ],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.builtin,
				...globals.node,
				// TODO: add custom globals
			},
		},
	},
	...configListEslint,
	...configListUnicorn,
	...configListJsdoc,
	...configListStylistic,
	...configListTsEslint,
];
