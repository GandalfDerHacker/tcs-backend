import {Banana} from "../model/banana";

// Method to add a single banana to database
export const addBanana = (req, res) => {
    const banana = new Banana(req.body);
    banana.save((err, task) => {
        if (err)
            res.send(err);
        res.send(banana);
        console.info('Added a banana!');
    });
};

// Method to get all banana from database
export const getBananas = (req, res) => {
    Banana.find({}, (err, bananas) => {
        if (err) {
            res.send(err);
        }
        res.send(bananas);
        console.info('Sent all bananas!');
    });
};

// Method to get a single banana to database
export const getBanana = (req, res) => {
    Banana.findOne({_id: req.params.id}, (err, banana) => {
        if (err) {
            res.send(err);
        }
        res.send(banana);
        console.info('Sent the requested banana!');
    });
};

// Method to delete a single banana to database
export const deleteBanana = (req, res) => {
    Banana.remove({_id: req.params.id}, (err) => {
        if (err) {
            res.send(err);
        }
        res.send({info: "Deleted a banana!"});
        console.info('Deleted a banana!');
    });
};
