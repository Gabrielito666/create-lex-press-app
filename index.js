#!/usr/bin/env node

const tar = require('tar');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const main = async () =>
{
  try
  {
    const outputTar = path.resolve(process.cwd(), "src.tar.gz");
    
    await tar.c({ gzip: true, file: outputTar, cwd : __dirname }, ['template']);
    await tar.x({ file: outputTar, strip : 1 });
    fs.unlinkSync(outputTar);

    console.log("installing dependencies...")
    spawn("npm", ["i"]).on("exit", () =>
    {
      console.log("all rigth!")
    });

  }
  catch(err)
  {
    console.error(err);
  }
}
main();