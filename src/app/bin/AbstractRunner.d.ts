declare class WWW {
    readonly http: any;
    private app;
    private port;
    private server;
    constructor(services: string, the_port: any, runningMode: string);
    initialize(): void;
    private normalizePort;
    private onError;
    private onListening;
    private setRunningMode;
}
export = WWW;
