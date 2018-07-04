import * as express from "express";
export declare class MyApp {
    private expressApp;
    private expressRouter;
    private publicPath;
    constructor();
    static bootstrap(): any;
    initialize(data: any): void;
    /**
     * @returns current express App
     */
    readonly myExpress: express.Application;
}
