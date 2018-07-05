export declare enum _SERVER_RUNNER_MSG {
    MOUNTED = 0,
    KILLED = 1
}
export declare function tellParentProcess(value: _SERVER_RUNNER_MSG): void;
