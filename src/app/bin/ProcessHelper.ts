
export enum _SERVER_RUNNER_MSG {
    MOUNTED, KILLED
}
export function tellParentProcess(value: _SERVER_RUNNER_MSG){
    process.send({ _SERVER_RUNNER_ : value });
};
