#!/usr/bin/env node
const ServerRunner = require("./../../../bin/AbstractRunner");
const runnerInstance = new ServerRunner(
  "pip/App",
  process.env.PORT,
  process.env.RMODE
);
runnerInstance.initialize();
