import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as route from "./routes/routes";
import * as oauth from './controller/oauthC';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.database();
        this.config();
        this.routes();
    }

    // Setup database connection
    private database(): void {
        mongoose.connect(process.env.VCAP_SERVICES ?
            JSON.parse(process.env.VCAP_SERVICES).mongodbent[0].credentials.uri :
            'mongodb://localhost/ExampleDB');
    }

    // Middleware
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        // Remove "//" to activate authentication:
        //this.app.use(oauth.checkToken);
    }

    // Bind routes
    private routes(): void {
        route.routes(this.app);
    }

}

// Export app to import in server.ts
export default new App().app;