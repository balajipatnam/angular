# Prettier and TSLint with angular

**Note:** Lint has removed in Angular 12+ versions

Step1: Add lint architect in the **angular.json** file

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
Required packages to install:

1. **tslint** is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters.

2. **prettier** is an opinionated code formatter with support for Javscript, Angular,React,Vue HTML, Css


3. **tslint-config-prettier** disables all conflicting rules that may cause such problems. Prettier takes care of the formatting whereas tslint takes care of all the other things.

You can read more about prettier [here](https://prettier.io/docs/en/integrating-with-linters.html#tslint)

Step 2: Commands to install following packages **tslint** , **prettier** and **tslint-config-prettier**

**Npm Command**
```bash
npm install --save-dev tslint tslint-config-prettier prettier
```
**Yarn Command**
```bash
yarn add --dev tslint tslint-config-prettier prettier
```

Step 3: Create **.prettierrc** file and add following code

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
Step 4: Create **.prettierignore** file and add following code

```json
package.json
package-lock.json
yarn.lock
node_modules
```
Step 5: Create **tslint.json** file and add following code

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
Step 6: Add **Husky** and **pretty-quick** to run prettier in your staged files

**Npm Command**
```bash
npm install --save-dev husky pretty-quick
```

**Yarn Command**
```bash
yarn add --dev husky pretty-quick
```

Step 7: Add this code in the **package.json**

```json
"husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged --check && ng lint && npm run format"
    }
  }
```

Step 8: Add followed two properties inside scripts in **package.json**

```json
"scripts": {
   "lint": "ng lint",
   "format": "prettier --write ."
},
```

## Usage

```bash
npm run lint
```

## Troubleshooting

When the hooks not picking while pre-commit follow below process

```bash
rm -rf .git/hooks
npm i --save-dev husky@4.3.8
```
