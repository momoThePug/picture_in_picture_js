"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _SERVER_RUNNER_MSG;
(function (_SERVER_RUNNER_MSG) {
    _SERVER_RUNNER_MSG[_SERVER_RUNNER_MSG["MOUNTED"] = 0] = "MOUNTED";
    _SERVER_RUNNER_MSG[_SERVER_RUNNER_MSG["KILLED"] = 1] = "KILLED";
})(_SERVER_RUNNER_MSG = exports._SERVER_RUNNER_MSG || (exports._SERVER_RUNNER_MSG = {}));
function tellParentProcess(value) {
    process.send({ _SERVER_RUNNER_: value });
}
exports.tellParentProcess = tellParentProcess;
;
