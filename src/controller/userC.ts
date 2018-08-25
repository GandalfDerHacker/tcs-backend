import {User} from "../model/user";

// Method to add a single user to database
export const addUser = (req, res, next) => {
    const user = new User(req.body);
    user.save((err, task) => {
        if (err)
            return next(err);
        res.send(user);
        console.info('Added a user!');
    });
};

// Method to get all user from database
export const getUsers = (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) {
            return next(err);
        }
        res.send(users);
        console.info('Sent all users!');
    });
};

// Method to get a single user to database
export const getUser = (req, res, next) => {
    User.findOne({_id: req.params.id}, (err, user) => {
        if (err) {
            return next(err);
        }
        res.send(user);
        console.info('Sent the requested user!');
    });
};

// Method to delete a single user to database
export const deleteUser = (req, res, next) => {
    User.remove({_id: req.params.id}, (err) => {
        if (err) {
            return next(err);
        }
        res.send({info: "Deleted a user!"});
        console.info('Deleted a user!');
    });
};
