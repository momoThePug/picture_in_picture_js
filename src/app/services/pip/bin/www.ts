#!/usr/bin/env node
const _TSModuleAlias_= require("@momothepug/tsmodule-alias");
const _tsconfigToReadFromRoot_ = "dist";
const _aliasRegister_ = _TSModuleAlias_.play(_tsconfigToReadFromRoot_);

 const ServerRunner = require("./../../../bin/AbstractRunner");
const runnerInstance = new ServerRunner(
  "pip/App",
  process.env.PORT,
  process.env.RMODE
);
runnerInstance.initialize();
