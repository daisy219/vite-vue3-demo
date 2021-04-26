module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'airbnb-base',
		'plugin:prettier/recommended' // 添加prettier插件
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: ['state'] // for vuex state
			}
		],
		// 这个是为了解决代码中用别名引入不报错
		'import/no-unresolved': [
			2,
			{
				ignore: ['^@/']
			}
		],
		'no-console': 'off', // 允许console
		'import/extensions': 'off' // 扩展名报错关闭
	}
}
