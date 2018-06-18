export interface IRouterConfig {
    routes: any,
    resolutionPath: string,
    statusCode: {
        404: string
    }
}

export class Router {
    constructor(private config: IRouterConfig) { }

    static getParam(parameterName: string): string {
        let result = null,
            tmp = [];
        location.search.substr(1).split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }

    loadComponent(currentRoute: string) {
        const matchingView = this.config.routes[currentRoute];
        return matchingView
            ? require("../" + this.config.resolutionPath + "/" + matchingView + ".vue")
            : require("../" + this.config.resolutionPath + "/" + this.config.statusCode['404'] + ".vue");
    }
}