
// @ts-expect-error No declaration given.
import pluginPromise from 'eslint-plugin-promise';

export const configListPromise = [
	pluginPromise.configs['flat/recommended'],
];
