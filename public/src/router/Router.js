"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    constructor(config) {
        this.config = config;
    }
    static getParam(parameterName) {
        let result = null, tmp = [];
        location.search.substr(1).split("&")
            .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName)
                result = decodeURIComponent(tmp[1]);
        });
        return result;
    }
    loadComponent(currentRoute) {
        const matchingView = this.config.routes[currentRoute];
        return matchingView
            ? require("../" + this.config.resolutionPath + "/" + matchingView + ".vue")
            : require("../" + this.config.resolutionPath + "/" + this.config.statusCode['404'] + ".vue");
    }
}
exports.Router = Router;
