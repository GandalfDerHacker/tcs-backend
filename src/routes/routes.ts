import * as user from "../controller/userC";
import * as datafiller from "../util/dataFiller";

export const routes = (app) => {

    // Add api's for /user route
    app.route('/user')
        .get(user.getUsers)
        .post(user.addUser);

    // Add api's for /user/:ID route
    app.route('/user/:id')
        .get(user.getUser)
        .delete(user.deleteUser);

    app.route('/fill')
        .post(datafiller.fillData);

};

