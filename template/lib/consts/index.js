process.loadEnvFile();
const path = require('path');

const ROOT_PATH = process.cwd();
const $cwd = p => path.resolve(ROOT_PATH, p);

const CONSTS =
{
  ROOT_PATH,
  PUBLIC_PATH : $cwd('public'),
  VIEWS_PATH : $cwd('views'),
  PORT : process.env.PORT
}
module.exports = CONSTS;