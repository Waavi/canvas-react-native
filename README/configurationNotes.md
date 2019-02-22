# Init project

https://facebook.github.io/react-native/docs/getting-started

> react-native init PromedApp

# Prettier + ESLint + Airbnb Style Guide in VSCode

https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a

-   Download the ESLint and Prettier extensions for VSCode.
-   Install the ESLint and Prettier libraries into our project. In your project’s root directory, you will want to run: npm install -D eslint prettier
-   Install the Airbnb config. If you’re using npm 5+, you can run this shortcut to install the config and all of its dependencies: npx install-peerdeps --dev eslint-config-airbnb
-   Install eslint-config-prettier (disables formatting for ESLint) and eslint-plugin-prettier (allows ESLint to show formatting errors as we type) npm install -D eslint-config-prettier eslint-plugin-prettier
-   Create .eslintrc.json file in your project’s root directory:

```
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  },
}
```

-   Create .prettierrc file in your project’s root directory. This will be where you configure your formatting settings. I have added a few of my own preferences below, but I urge you to read more about the Prettier config file

```
{
  "printWidth": 100,
  "singleQuote": true
}
```

-   The last step is to make sure Prettier formats on save. Insert "editor.formatOnSave": true into your User Settings in VSCode.

## Prettier config file:

.prettierrc
http://json.schemastore.org/prettierrc

# Path resolver

> yarn add -D babel-plugin-module-resolver

.babelrc

```
"plugins": [
		[
			"module-resolver",
			{
				"root": ["./src"],
				"extensions": [".ios.js", ".android.js", ".js", ".json"],
				"alias": {
					"@": "./src",
					"config": "./src/config"
				}
			}
		]
	]
```

.eslintrc.json

```
{
	...,
	"settings": {
		"import/resolver": {
			"babel-module": {}
		}
	}
```

jsconfig.json

```
{
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"*": ["src/*"],
			"@/*": ["@/*"],
			"config/*": ["config/*"]
		}
	}
}
```

W
