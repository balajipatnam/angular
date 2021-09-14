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

## Package.json

```javascript
scripts: {
 "dev:ssr": "ng run angular-poc:serve-ssr",               Running application in local
 "serve:ssr": "node dist/angular-poc/server/main.js",
 "build:ssr": "ng build && ng run angular-poc:server",    Production Build
 "prerender": "ng run angular-poc:prerender"
}

dependencies:{
 "@angular/platform-server": "~12.2.0",
 "@nguniversal/express-engine": "^12.1.0",
 "express": "^4.15.2",
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
