import {Game} from "../model/game";

// Method to add a single game to database
export const addGame = (req, res, next) => {
    const game = new Game(req.body);
    game.save((err, task) => {
        if (err)
            return next(err);
        res.send(game);
        console.info('Added a game!');
    });
};

// Method to get all game from database
export const getGames = (req, res, next) => {
    Game.find({}, (err, games) => {
        if (err) {
            return next(err);
        }
        res.send(games);
        console.info('Sent all games!');
    });
};

// Method to get a single game to database
export const getGame = (req, res, next) => {
    Game.findOne({_id: req.params.id}, (err, game) => {
        if (err) {
            return next(err);
        }
        res.send(game);
        console.info('Sent the requested game!');
    });
};

// Method to delete a single game to database
export const deleteGame = (req, res, next) => {
    Game.remove({_id: req.params.id}, (err) => {
        if (err) {
            return next(err);
        }
        res.send({info: "Deleted a game!"});
        console.info('Deleted a game!');
    });
};
