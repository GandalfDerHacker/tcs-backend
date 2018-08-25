import * as user from "../controller/userC";
import * as datafiller from "../util/dataFiller";
import * as game from "../controller/gameC";
import * as ticket from "../controller/ticketC";

export const routes = (app) => {

    // USER
    app.route('/user')
        .get(user.getUsers)
        .post(user.addUser);

    app.route('/user/:id')
        .get(user.getUser)
        .delete(user.deleteUser);

    // GAME
    app.route('/game')
        .get(game.getGames)
        .post(game.addGame);

    app.route('/game/:id')
        .get(game.getGame)
        .delete(game.deleteGame);

    // TICKET
    app.route('/ticket')
        .get(ticket.getTickets)
        .post(ticket.addTicket);

    app.route('/ticket/:id')
        .get(ticket.getTicket)
        .delete(ticket.deleteTicket);

    app.route('/fill')
        .post(datafiller.fillData);

};

