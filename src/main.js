
import globals                   from 'globals';
import { configListEslint }      from './configs/eslint.js';
import { configListJsdoc }       from './configs/jsdoc.js';
import { configListNode }        from './configs/node.js';
import { configListPromise }     from './configs/promise.js';
import { configListStylistic }   from './configs/stylistic.js';
import { configListTsEslint }    from './configs/tseslint.js';
import { configListUnicorn }     from './configs/unicorn.js';
import { configListVue }         from './configs/vue.js';
import { getProjectPackageJson } from './utils/package-json.js';

const PROJECT_PACKAGE_JSON = await getProjectPackageJson();

export const config = [
	{
		ignores: [
			'node_modules*/',
			'**/build',
			'**/dist',
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
	...configListPromise,
	...configListStylistic,
	...configListTsEslint,
	...configListVue,
];

// console.log(config);
