import * as express from "express";
const  path = require('path');
export class MyApp {
    
    private expressApp: express.Application;
    private expressRouter: express.Router;
    private publicPath: string;

    constructor(){
        this.publicPath = path.resolve(__dirname + '/../../../public');
    }

    public static bootstrap(): any {
        return new MyApp();
    }

    initialize(data) {

        this.expressApp.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + data.addr.port)
        
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
        
            // Pass to next layer of middleware
            next()
        });
        this.expressApp.use(express.static(this.publicPath));
        this.expressApp.get('*', function (req, res, next) {
            res.sendFile(path.resolve(this.publicPath + '/index.html'));
        });
    }

  /**
   * @returns current express App 
   */
  get myExpress(): express.Application {
    this.expressApp = express();
    this.expressRouter = express.Router()
    return this.expressApp;
  }
}

module.exports = MyApp;
