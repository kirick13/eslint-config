
import globals                   from 'globals';
import { configListEslint }      from './configs/eslint.js';
import { configListJsdoc }       from './configs/jsdoc.js';
import { configListNode }        from './configs/node.js';
import { configListStylistic }   from './configs/stylistic.js';
import { configListTsEslint }    from './configs/tseslint.js';
import { configListUnicorn }     from './configs/unicorn.js';
import { getProjectPackageJson } from './utils/package-json.js';

const PROJECT_PACKAGE_JSON = await getProjectPackageJson();

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
			...typeof PROJECT_PACKAGE_JSON.type === 'string'
				? {
					sourceType: PROJECT_PACKAGE_JSON.type,
				}
				: {},
			globals: globals.builtin,
		},
	},
	...configListEslint,
	...configListNode,
	...configListUnicorn,
	...configListJsdoc,
	...configListStylistic,
	...configListTsEslint,
];

// console.log(config);
