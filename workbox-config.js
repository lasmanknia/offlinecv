module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,ttf,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};