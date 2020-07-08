# nodejs-react-template
The template of Node.js (web server) + React.js (web framework).
Feel free to use it as a template!

## Prerequisites
- Node.js v.10 +

## Project Layout:
    .
    ├── config              // the config file, using node module 'config'
    ├── react               
        ├── actions         // redux actions
        ├── images          // images
        ├── js              // react components
        ├── reducers        // redux reducers
        └── styles          // style sheets
    ├── server
        ├── routes          // express routers
        └── app.js          // web app entry
    └── webpack.config.js   // webpack configuration
    
    
## What the template includes:
1. Node.js + Express.js for the web application framework
2. React + Redux + React Router for the front framework
3. Babel for the Javascript compiler
4. Webpack for the module bundler

## How to start:

### Install the dependencies
1. go to project root, run `npm install`
2. (Optional) run `npm audit fix`

### Compile the web page
1. go to project root, run `npm run webpack`
2. The compiled `index.html`, `main.js`, `main.css` will be generated to the directory `./dist`

### Start the web server
1. go to project root, run `node ./server/app.js`

### Display the web page
1. Open you browser, type `http://localhost:3000`
2. You should be able to see the "Hello World"