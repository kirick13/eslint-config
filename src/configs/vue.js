import pluginVue from 'eslint-plugin-vue';

export const configListVue = [
	...pluginVue.configs['flat/recommended'],
	{
		files: [ '**/*.vue' ],
		rules: {
			'no-useless-assignment': 'off',
			'vue/component-definition-name-casing': [
				'error',
				'kebab-case',
			],
			'vue/html-indent': [
				'error',
				'tab',
			],
			'vue/html-self-closing': 'off',
		},
	},
];
