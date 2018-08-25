import * as mongoose from "mongoose";
import {Schema} from "mongoose";

// Create schema for ticket collection
const ticketSchema: Schema = new Schema({
    owner: {
        type: String,
        required: 'enter the owner of the ticket'
    },
    position: {
        type: Number,
        required: 'enter the position of the ticket'
    },
    category: {
        type: String,
        required: 'enter the category of the ticket'
    },
    price: {
        type: Number,
        required: 'enter the price of the ticket'
    },
    code: {
        type: String,
        required: 'enter the code of the ticket'
    }
});

// Export schema for ticket collection
export const Ticket = mongoose.model('tickets', ticketSchema);