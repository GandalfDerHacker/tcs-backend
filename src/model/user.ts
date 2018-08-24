import * as mongoose from "mongoose";
import {Schema} from "mongoose";

// Create schema for user collection
const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: 'enter the name of the user'
    },
    firstname: {
        type: String,
        required: 'enter the first name of the user'
    },
    email: {
        type: String,
        required: 'enter the color of the user'
    },
    date: {
        type: Number,
        required: 'enter the size of the user'
    },
    sex: {
        type: String,
        required: 'enter the gender of the user'
    },
    seasonpass: {
        type: [String],
        default: 'None'
    },
    comment: String
});

// Export schema for user collection
export const user = mongoose.model('users', userSchema);