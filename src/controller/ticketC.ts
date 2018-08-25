import {Ticket} from "../model/ticket";

// Method to add a single ticket to database
export const addTicket = (req, res, next) => {
    const ticket = new Ticket(req.body);
    ticket.save((err, task) => {
        if (err)
            return next(err);
        res.send(ticket);
        console.info('Added a ticket!');
    });
};

// Method to get all ticket from database
export const getTickets = (req, res, next) => {
    Ticket.find({}, (err, tickets) => {
        if (err) {
            return next(err);
        }
        res.send(tickets);
        console.info('Sent all tickets!');
    });
};

// Method to get a single ticket to database
export const getTicket = (req, res, next) => {
    Ticket.findOne({_id: req.params.id}, (err, ticket) => {
        if (err) {
            return next(err);
        }
        res.send(ticket);
        console.info('Sent the requested ticket!');
    });
};

// Method to delete a single ticket to database
export const deleteTicket = (req, res, next) => {
    Ticket.remove({_id: req.params.id}, (err) => {
        if (err) {
            return next(err);
        }
        res.send({info: "Deleted a ticket!"});
        console.info('Deleted a ticket!');
    });
};
