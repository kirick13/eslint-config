
import { configEslintProblems }       from './eslint/problems.js';
import { configEslintSuggestions }    from './eslint/suggestions.js';
import { configListEslintExceptions } from './eslint/exceptions.js';

export const configListEslint = [
	configEslintProblems,
	configEslintSuggestions,
	...configListEslintExceptions,
];
