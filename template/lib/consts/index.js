try{process.loadEnvFile()}catch{};
const path = require('path');

const ROOT_PATH = process.cwd();
const $cwd = p =>
{
  try   { return path.resolve(ROOT_PATH, p) }
  catch { return p }
}

const CONSTS =
{
  ROOT_PATH,
  PUBLIC_PATH : $cwd('public'),
  VIEWS_PATH : $cwd('views'),
  PORT : process.env.PORT
}
module.exports = CONSTS;