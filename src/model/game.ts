import * as mongoose from "mongoose";
import {Schema} from "mongoose";

// Create schema for game collection
const gameSchema: Schema = new Schema({
    name: {
        type: String,
        required: 'enter the name of the game'
    },
    game_type: {
        type: String,
        required: 'enter the type of the game'
    },
    date: {
        date: Date,
        required: 'enter the date of the game'
    },
    tickets: [Schema.Types.ObjectId]
});

// Export schema for game collection
export const Game = mongoose.model('games', gameSchema);