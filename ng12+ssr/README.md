# Angular 12+ Server-side rendering(SSR) with Angular Universal

Angular Universal, a technology that renders Angular applications on the server.

## Installation

Use the package manager [universal](https://angular.io/guide/universal) to install universal.

```bash
ng add @nguniversal/express-engine
```

## Updated Filles after installation

```javascript
src/
  index.html                 app web page
  main.ts                    bootstrapper for client app
  main.server.ts             * bootstrapper for server app
  style.css                  styles for the app
  app/ ...                   application code
    app.server.module.ts     * server-side application module
server.ts                    * express web server
tsconfig.json                TypeScript base configuration
tsconfig.app.json            TypeScript browser application configuration
tsconfig.server.json         TypeScript server application configuration
tsconfig.spec.json           TypeScript tests configuration

```

## angular.json

```json
 "outputPath": "dist/angular-poc",
 // Add below Command instead of above one
 "outputPath": "dist/angular-poc/browser",
```

```json
{
  "server": {
    "builder": "@angular-devkit/build-angular:server",
    "options": {
      "outputPath": "dist/angular-poc/server",
      "main": "server.ts",
      "tsConfig": "tsconfig.server.json",
      "inlineStyleLanguage": "scss"
    },
    "configurations": {
      "production": {
        "outputHashing": "media",
        "fileReplacements": [
          {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.prod.ts"
          }
        ]
      },
      "development": {
        "optimization": false,
        "sourceMap": true,
        "extractLicenses": false
      }
    },
    "defaultConfiguration": "production"
  },
  "serve-ssr": {
    "builder": "@nguniversal/builders:ssr-dev-server",
    "configurations": {
      "development": {
        "browserTarget": "angular-poc:build:development",
        "serverTarget": "angular-poc:server:development"
      },
      "production": {
        "browserTarget": "angular-poc:build:production",
        "serverTarget": "angular-poc:server:production"
      }
    },
    "defaultConfiguration": "development"
  },
  "prerender": {
    "builder": "@nguniversal/builders:prerender",
    "options": {
      "routes": ["/"]
    },
    "configurations": {
      "production": {
        "browserTarget": "angular-poc:build:production",
        "serverTarget": "angular-poc:server:production"
      },
      "development": {
        "browserTarget": "angular-poc:build:development",
        "serverTarget": "angular-poc:server:development"
      }
    },
    "defaultConfiguration": "production"
  }
}
```

## src/app/app.module.ts

Add below code instead of BrowserModule

```javascript
BrowserModule.withServerTransition({ appId: "serverApp" });
```

## src/app/app.server.module.ts

Create a new file inside src/app folder

```javascript
import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
```

## src/main.server.ts

Create a new file inside the project directory

```javascript
/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import "@angular/platform-server/init";

import { enableProdMode } from "@angular/core";

import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from "./app/app.server.module";
export { renderModule, renderModuleFactory } from "@angular/platform-server";
```

## src/main.ts

Add below code instead of platformBrowserDynamic().bootstrapModule(AppModule)

```javascript
document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
```

## tsconfig.server.json

Create a new file inside main directory

```json
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "outDir": "./out-tsc/server",
    "target": "es2019",
    "types": ["node"]
  },
  "files": ["src/main.server.ts", "server.ts"],
  "angularCompilerOptions": {
    "entryModule": "./src/app/app.server.module#AppServerModule"
  }
}
```

## server.js

Create a new file inside project directory

```javascript
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/angular-poc/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
```

## package.json

#### Use `dev:ssr` to run app locally

#### Use `build:ssr` to generate the production build

```json
"scripts": {
 "dev:ssr": "ng run angular-poc:serve-ssr",
 "serve:ssr": "node dist/angular-poc/server/main.js",
 "build:ssr": "ng build && ng run angular-poc:server",
 "prerender": "ng run angular-poc:prerender"
}
```

```json
 "devDependencies": {
  "@nguniversal/builders": "^12.1.0",
  "@types/express": "^4.17.0"
}
```

## Usage

```javascript
npm run dev:ssr
```

Open a browser and navigate to http://localhost:4200/. You should see the familiar Tour of Heroes dashboard page

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
