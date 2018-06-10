export interface IRouterConfig {
    routes: any,
    resolutionPath: string,
    statusCode: {
        404: string
    }
}

export class Router {
    constructor(private config: IRouterConfig) { }

    loadComponent(currentRoute: string) {
        const matchingView = this.config.routes[currentRoute];
        return matchingView
            ? require("../" + this.config.resolutionPath + "/" + matchingView + ".vue")
            : require("../" + this.config.resolutionPath + "/" + this.config.statusCode['404'] + ".vue");
    }
}