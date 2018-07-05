"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProcessHelper_1 = require("./../app/bin/ProcessHelper");
const path = require("path");
const fork = require('child_process').fork;
const exec = require('child_process').exec;
const root = path.resolve(__dirname + "/../..");
const dist = path.resolve(root + "/dist");
/**
 * Display our client site in a new process
 */
function createGUI() {
    const _gui_process_ = exec('npm run start', {
        cwd: root
    }, function (e, stdout, stderr) {
        if (e instanceof Error) {
            throw e;
        }
    });
    return _gui_process_;
}
/**
 * if server returns a process message.
 *
 * MOUNTED: server is mounted and displaying client page
 */
function onServerMessage(msg, GUI_SERVER) {
    switch (msg) {
        case ProcessHelper_1._SERVER_RUNNER_MSG.MOUNTED:
            createGUI().on("close", () => {
                GUI_SERVER.kill('SIGHUP');
            });
            break;
    }
}
// create process by forking current  and listen for messages
const SERVER = fork(dist + "/app/services/pip/bin/www.js");
SERVER.on('message', (m) => {
    if (typeof m['_SERVER_RUNNER_'] !== 'undefined') {
        onServerMessage(m['_SERVER_RUNNER_'], SERVER);
    }
});
