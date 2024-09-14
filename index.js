const fs = require('fs').promises;
const { spawnSync } = require('child_process');
const path = require('path');

const this_path = process.cwd();

const toolsSring = 
`export const $ = selector => document.querySelector(selector);
export const $$ = selector => document.querySelectorAll(selector);
export const $new = type => document.createElement(type);
export const $text = txt => document.createTextNode(text);`;
const indexString = 
`const lexpress = require('lex-press');
const app = lexpress();

const CONSTS = require('./lib/consts');

app.public(CONSTS.PUBLIC_PATH);

// Your code

app.listen(CONSTS.PORT, () => { console.log(\`Server running in port\${CONSTS.PORT} \`) })`;

const constsString =

`require('dotenv').config();
const path = require('path');
module.exports =
{
    ROOT_PATH : process.cwd(),
    PUBLIC_PATH : path.resolve(process.cwd(), 'public'),
    PORT : process.env.PORT
}
`;

const nodemonString =
`{
  "watch": ["./"], 
  "ext": "js,html,css",
  "exec": "node index.js"
}
`;

const dotEnvString =
`PORT=3000`
const gitIgnoreString = `node_modules`;

const packagestring =
`{
  "name": "lex-press-app",
  "version": "1.0.0",
  "main": "index.js",
  "directories": {
    "lib": "lib"
  },
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "lex-press": "^1.0.0",
    "dotenv": "^16.4.5"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}`;


fs.mkdir(path.resolve(this_path, 'public'))
.then(() =>
{
    fs.mkdir(path.resolve(this_path, 'public/css'))
    .then(() => 
    {
        fs.appendFile(path.resolve(this_path, 'public/css/global.css'), '');
    });
    
    fs.mkdir(path.resolve(this_path, 'public/scripts'))
    .then(() =>
    {
        fs.mkdir(path.resolve(this_path, 'public/scripts/tools'))
        .then(() =>
        {
            fs.appendFile(path.resolve(this_path, 'public/scripts/tools/index.js'), toolsSring);
        })
    });
    fs.mkdir(path.resolve(this_path, 'public/src'));
});

fs.mkdir(path.resolve(this_path, 'views'));

fs.mkdir(path.resolve(this_path, 'lib'))
.then(() =>
{
    fs.mkdir(path.resolve(this_path, 'lib/consts'))
    .then(() =>
    {
        fs.appendFile(path.resolve(this_path, 'lib/consts/index.js'), constsString);
    })
});

fs.appendFile(path.resolve(this_path, 'index.js'), indexString);
fs.appendFile(path.resolve(this_path, 'README.md'), '');
fs.appendFile(path.resolve(this_path, '.env'), dotEnvString);
fs.appendFile(path.resolve(this_path, '.gitignore'), gitIgnoreString);
fs.appendFile(path.resolve(this_path, 'nodemon.json'), nodemonString);
fs.appendFile(path.resolve(this_path, 'package.json'), packagestring)
.then(() =>
{
    spawnSync('npm', ['init'], { stdio: 'inherit' });

    spawnSync('npm', ['install'], { stdio: 'inherit' });
});