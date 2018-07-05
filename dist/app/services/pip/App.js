"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require('path');
class MyApp {
    constructor() {
        this.publicPath = path.resolve(__dirname + '/../../../public');
    }
    static bootstrap() {
        return new MyApp();
    }
    initialize(data) {
        const that = this;
        this.expressApp.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + data.addr.port);
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // Pass to next layer of middleware
            next();
        });
        this.expressApp.use(express.static(this.publicPath));
        this.expressApp.get('*', function (req, res, next) {
            res.sendFile(path.resolve(that.publicPath + '/index.html'));
        });
    }
    /**
     * @returns current express App
     */
    get myExpress() {
        this.expressApp = express();
        this.expressRouter = express.Router();
        return this.expressApp;
    }
}
exports.MyApp = MyApp;
module.exports = MyApp;
