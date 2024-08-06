/* eslint-disable max-lines */

import pluginStylistic from '@stylistic/eslint-plugin';

export const configListStylistic = [
	{
		plugins: {
			'@stylistic': pluginStylistic,
		},
	},
	{
		rules: {
			'@stylistic/array-bracket-newline': [
				'error',
				{
					multiline: true,
					minItems: 4,
				},
			],
			'@stylistic/array-bracket-spacing': [
				'error',
				'always',
				{
					arraysInArrays: false,
					objectsInArrays: false,
				},
			],
			'@stylistic/array-element-newline': [
				'error',
				{
					consistent: true,
					multiline: true,
					minItems: 4,
					// ArrayExpression: {
					// 	consistent: true,
					// 	multiline: true,
					// 	minItems: 4,
					// },
					// ArrayPattern: {
					// 	consistent: true,
					// 	multiline: true,
					// 	minItems: 4,
					// },
				},
			],
			'@stylistic/arrow-parens': [
				'error',
				'always',
			],
			'@stylistic/arrow-spacing': [
				'error',
				{
					before: true,
					after: true,
				},
			],
			'@stylistic/block-spacing': [
				'error',
				'always',
			],
			'@stylistic/brace-style': [
				'error',
				'stroustrup',
				{
					allowSingleLine: false,
				},
			],
			'@stylistic/comma-dangle': [
				'error',
				'always-multiline',
			],
			'@stylistic/comma-spacing': [
				'error',
				{
					before: false,
					after: true,
				},
			],
			'@stylistic/comma-style': [
				'error',
				'last',
			],
			'@stylistic/computed-property-spacing': [
				'error',
				'never',
			],
			'@stylistic/dot-location': [
				'error',
				'property',
			],
			'@stylistic/eol-last': [
				'error',
				'always',
			],
			'@stylistic/function-call-argument-newline': [
				'error',
				'consistent', // bug?
			],
			'@stylistic/function-call-spacing': [
				'error',
				'never',
			],
			'@stylistic/function-paren-newline': [
				'error',
				'multiline-arguments',
			],
			'@stylistic/generator-star-spacing': [
				'error',
				'both',
			],
			'@stylistic/implicit-arrow-linebreak': [
				'error',
				'beside',
			],
			'@stylistic/indent': [
				'error',
				'tab',
				{
					ImportDeclaration: 'off',
					SwitchCase: 1,
				},
			],
			'@stylistic/key-spacing': [
				'error',
				{
					beforeColon: false,
					afterColon: true,
					mode: 'strict',
				},
			],
			'@stylistic/keyword-spacing': [
				'error',
				{
					before: true,
					after: true,
				},
			],
			'@stylistic/line-comment-position': 'off',
			'@stylistic/linebreak-style': [
				'error', // disallow using windows with codebase lol
				'unix',
			],
			'@stylistic/lines-around-comment': 'off',
			'@stylistic/lines-between-class-members': [
				'error',
				{
					enforce: [
						{
							blankLine: 'always',
							prev: '*',
							next: 'method',
						},
						{
							blankLine: 'always',
							prev: 'method',
							next: 'field',
						},
						{
							blankLine: 'never',
							prev: 'field',
							next: 'field',
						},
					],
				},
			],
			'@stylistic/max-len': [
				'warn',
				{
					code: 200,
					tabWidth: 0,
					ignoreComments: true,
					ignoreUrls: true,
					// ignorePattern: String.raw`^\s*'?[^']+'?:\s*`,
				},
			],
			'@stylistic/max-statements-per-line': [
				'error',
				{
					max: 1,
				},
			],
			'@stylistic/multiline-comment-style': 'off',
			'@stylistic/multiline-ternary': [
				'error',
				'always-multiline',
			],
			'@stylistic/new-parens': [
				'error',
				'always',
			],
			'@stylistic/newline-per-chained-call': [
				'error',
				{
					ignoreChainWithDepth: 2,
				},
			],
			'@stylistic/no-confusing-arrow': 'error',
			'@stylistic/no-extra-parens': 'off', // FIXME:  conflicts with unicorn/no-nested-ternary
			/* [
				'error',
				'all',
				{
					nestedBinaryExpressions: false,
				},
			], */
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/no-floating-decimal': 'error',
			'@stylistic/no-mixed-operators': 'error',
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/no-multi-spaces': [
				'error',
				{
					exceptions: {
						ImportDeclaration: true,
					},
				},
			],
			'@stylistic/no-multiple-empty-lines': [
				'error',
				{
					max: 1,
				},
			],
			'@stylistic/no-tabs': 'off',
			'@stylistic/no-trailing-spaces': 'warn',
			'@stylistic/no-whitespace-before-property': 'error',
			'@stylistic/nonblock-statement-body-position': 'error',
			'@stylistic/object-curly-newline': [
				'error',
				{
					ObjectExpression: {
						multiline: true,
						minProperties: 1,
						consistent: true,
					},
					ObjectPattern: {
						multiline: true,
						minProperties: 2,
						consistent: true,
					},
					ImportDeclaration: {
						multiline: true,
						minProperties: 2,
						consistent: true,
					},
					ExportDeclaration: {
						multiline: true,
						minProperties: 2,
						consistent: true,
					},
				},
			],
			'@stylistic/object-curly-spacing': [
				'error',
				'always',
				{
					arraysInObjects: true,
					objectsInObjects: true,
				},
			],
			'@stylistic/object-property-newline': 'error',
			'@stylistic/one-var-declaration-per-line': 'error',
			'@stylistic/operator-linebreak': [
				'error',
				'before',
			],
			'@stylistic/padded-blocks': [
				'error',
				'never',
				{
					allowSingleLineBlocks: true,
				},
			],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: 'multiline-block-like',
					next: '*',
				},
				{
					blankLine: 'never',
					prev: 'case',
					next: 'break',
				},
			],
			'@stylistic/quote-props': [
				'error',
				'consistent-as-needed',
				{
					numbers: true,
				},
			],
			'@stylistic/quotes': [
				'error',
				'single',
				{
					avoidEscape: true,
				},
			],
			'@stylistic/rest-spread-spacing': [
				'error',
				'never',
			],
			'@stylistic/semi': [
				'error',
				'always',
			],
			'@stylistic/semi-spacing': [
				'error',
				{
					before: false,
					after: true,
				},
			],
			'@stylistic/semi-style': [
				'error',
				'last',
			],
			'@stylistic/space-before-blocks': [
				'error',
				'always',
			],
			'@stylistic/space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					named: 'never',
					asyncArrow: 'always',
				},
			],
			'@stylistic/space-in-parens': [
				'error',
				'never',
			],
			'@stylistic/space-infix-ops': 'error',
			'@stylistic/space-unary-ops': 'error',
			'@stylistic/spaced-comment': [
				'error',
				'always',
				{
					line: {
						exceptions: [
							'-',
							'+',
							'*',
						],
						markers: [
							'!',
							'/',
							'=>',
						],
					},
					block: {
						exceptions: [
							'-',
							'+',
							'*',
						],
						markers: [
							'!',
							'*',
						],
						balanced: true,
					},
				},
			],
			'@stylistic/switch-colon-spacing': [
				'error',
				{
					after: true,
					before: false,
				},
			],
			'@stylistic/template-curly-spacing': [
				'error',
				'never',
			],
			'@stylistic/template-tag-spacing': [
				'error',
				'never',
			],
			'@stylistic/wrap-iife': [
				'error',
				'inside',
				{
					functionPrototypeMethods: true,
				},
			],
			'@stylistic/wrap-regex': 'off',
			'@stylistic/yield-star-spacing': [
				'error',
				'before',
			],
		},
	},
	{
		files: [ '**/*.ts' ],
		rules: {
			'@stylistic/member-delimiter-style': [
				'error',
				{
					multiline: {
						delimiter: 'comma',
						requireLast: true,
					},
					singleline: {
						delimiter: 'comma',
						requireLast: false,
					},
					overrides: {
						interface: {
							multiline: {
								delimiter: 'semi',
								requireLast: true,
							},
						},
					},
				},
			],
			'@stylistic/type-annotation-spacing': 'error',
			'@stylistic/type-generic-spacing': 'error',
			'@stylistic/type-named-tuple-spacing': 'error',
		},
	},
];
