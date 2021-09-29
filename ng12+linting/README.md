# Lint Angular12+ project

This is my Lint config for an angular project step by step. Angular 12+ has removed the linting by default.

1. Add lint architect in the angular.json

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

2. Add **Prettier** and some plugins to avoid problems with **_tslint_**

```bash
npm install --save-dev tslint tslint-config-prettier prettier
```

3. Add **.prettierrc.json** and **.prettierignore** files (you have both in this repo)

.prettierrc.json

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

.prettierignore

```
package.json
package-lock.json
yarn.lock
node_modules
```

4. Create **tslint.json**

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

We are installing 2 plugins:

- **tslint** to use TSLint to run Prettier
- **tslint-config-prettier** to disable rules that conflict with Prettier
- You can read more [here](https://prettier.io/docs/en/integrating-with-linters.html#tslint)

5. Now you can `npm run lint` your project

6. Adding **Husky**, **prettier** and **pretty-quick** to run prettier in your staged files

```bash
npm install --save-dev husky prettier pretty-quick
```

7. Add this code in the package.json

```json
 "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged --check && ng lint && npm run format"
    }
  }
```

8. Add these two properties inside scripts in package.json

```
"lint": "ng lint",
"format": "prettier --write ."
```

9. Run lint

```
npm run lint
```
