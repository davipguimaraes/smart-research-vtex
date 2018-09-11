module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
		"jquery": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "warn",
            "windows"
        ],
		"no-unused-vars": [
			"warn",
			{ "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
		],
		"valid-typeof": "warn",
		"no-dupe-keys":"warn",
		"semi": "off",
		"no-console":"warn",
		"no-useless-escape":"off",
		"no-unused-vars":"off",
		"no-case-declarations": "error"
    }
};
