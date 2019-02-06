module.exports = {
	"extends": "standard",
	globals: {
		Crafty: true,
		nw: true
	},
	rules: {
		"no-use-before-define": ["error", { functions: false }]
	}
};