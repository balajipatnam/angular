# Lint Angular12+ project

This is my Lint config for an angular project step by step. Angular 12+ has removed the linting by default.

1. Add lint architect in the **angular.json*

```json
{
  "lint": {
    "builder": "@angular-devkit/build-angular:tslint",
    "options": {
      "tsConfig": [
        "tsconfig.app.json",
        "tsconfig.spec.json",
        "e2e/tsconfig.json"
      ],
      "exclude": ["**/node_modules/**"]
    }
  }
}
```

We are installing 3 plugins:

- **tslint** to use TSLint to run Prettier
- **prettier** to disable rules that conflict with Prettier
- **tslint-config-prettier** to disable rules that conflict with Prettier
- You can read more [here](https://prettier.io/docs/en/integrating-with-linters.html#tslint)


2. Add **tslint** , **tslint tslint-config-prettier** and **prettier**
 
NPM Commands

```bash 
npm install --save-dev tslint tslint-config-prettier prettier 
```

(or)

```bash 
npm install --save-dev tslint
```
```bash 
npm install --save-dev tslint-config-prettier 
```
```bash 
npm install --save-dev prettier
```

YARN Commands

```bash 
yarn add --dev tslint tslint-config-prettier prettier 
```

(or)

```bash 
yarn add --dev tslint
```
```bash 
yarn add --dev tslint-config-prettier 
```
```bash 
yarn add --dev prettier
```

3. Create **.prettierrc.json**

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

4. Create **.prettierignore** 

```
package.json
package-lock.json
yarn.lock
node_modules
```

5. Create **tslint.json**

```json
{
  "extends": ["tslint:recommended", "tslint-config-prettier"],
  "rules": {
    "align": {
      "options": ["parameters", "statements"]
    },
    "array-type": false,
    "arrow-return-shorthand": true,
    "curly": true,
    "deprecation": {
      "severity": "warning"
    },
    "component-class-suffix": true,
    "contextual-lifecycle": true,
    "directive-class-suffix": true,
    "directive-selector": [true, "attribute", "app", "camelCase"],
    "component-selector": [true, "element", "app", "kebab-case"],
    "eofline": true,
    "import-blacklist": [true, "rxjs/Rx"],
    "import-spacing": true,
    "max-classes-per-file": false,
    "max-line-length": [true, 280],
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-console": "error",
    "no-unused-variable": [
      true,
      {
        "ignore-pattern": "^_"
      }
    ],
    "no-empty": false,
    "no-inferrable-types": [true, "ignore-params"],
    "no-non-null-assertion": true,
    "no-redundant-jsdoc": true,
    "no-switch-case-fall-through": true,
    "no-var-requires": false,
    "object-literal-key-quotes": [true, "as-needed"],
    "quotemark": [true, "single"],
    "semicolon": {
      "options": ["always"]
    },
    "space-before-function-paren": {
      "options": {
        "anonymous": "never",
        "asyncArrow": "always",
        "constructor": "never",
        "method": "never",
        "named": "never"
      }
    },
    "typedef-whitespace": {
      "options": [
        {
          "call-signature": "nospace",
          "index-signature": "nospace",
          "parameter": "nospace",
          "property-declaration": "nospace",
          "variable-declaration": "nospace"
        },
        {
          "call-signature": "onespace",
          "index-signature": "onespace",
          "parameter": "onespace",
          "property-declaration": "onespace",
          "variable-declaration": "onespace"
        }
      ]
    },
    "variable-name": {
      "options": ["ban-keywords", "check-format", "allow-pascal-case"]
    },
    "whitespace": {
      "options": [
        "check-branch",
        "check-decl",
        "check-operator",
        "check-separator",
        "check-type",
        "check-typecast"
      ]
    },
    "no-conflicting-lifecycle": true,
    "no-host-metadata-property": false,
    "no-input-rename": true,
    "no-inputs-metadata-property": true,
    "no-output-native": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "no-outputs-metadata-property": true,
    "template-banana-in-box": true,
    "template-no-negated-async": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true
  },
  "rulesDirectory": ["codelyzer"]
}
```

6. Add **Husky** and **pretty-quick** to run prettier in your staged files

NPM Command

```bash
npm install --save-dev husky pretty-quick
```
(or)

```bash
npm install --save-dev husky
```

```bash
npm install --save-dev pretty-quick
```

YARN Command

```bash
yarn add --dev husky pretty-quick
```
(or)

```bash
yarn add --dev husky
```
```bash
yarn add --dev pretty-quick
```

7. Add this code in the package.json

```json
 "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged --check && ng lint && npm run format"
    }
  }
```

8. Add these two properties inside **scripts** in **package.json**

```
"lint": "ng lint",
"format": "prettier --write ."
```

## Usage

```
npm run lint
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)


