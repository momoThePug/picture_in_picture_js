export interface IRouterConfig {
    routes: any;
    resolutionPath: string;
    statusCode: {
        404: string;
    };
}
export declare class Router {
    private config;
    constructor(config: IRouterConfig);
    static getParam(parameterName: string): string;
    loadComponent(currentRoute: string): any;
}
