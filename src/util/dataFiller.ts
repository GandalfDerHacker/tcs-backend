const request = require('request');
const endpoint = 'http://localhost:3000/';

export const fillData = (req, res, next) => {

    let nameGameSet = ['YB', 'HCD', 'SCB', 'FCB', 'FCL', 'FCSG', 'FCZ', 'GC', 'ZSC', 'EVZ']
    let type = ['Ice Hockey', 'Soccer', 'Handball']
    let date = randomDate(new Date(2018, 8, 26), new Date(2019, 8, 25))
    //let ticket


    //let owner
    //let position
    let category = ['A', 'B', 'C', 'D', 'E', 'F']
    //let price

    let nameSet = ['Wyss', 'Windlin', 'Zbindi', 'Shmaria', 'Schellenbach', 'Gitti', 'Deriu']
    let firstNameSet = ['Beni', 'Chrisi', 'Faebi', 'Armini', 'Lori', 'Danani', 'Dani', 'Debini', 'Bennoni']
    let emailSuffix = ['gmail', 'benimail', 'gmx']
    let sex = ['Male', 'Female', 'Genderqueer']
    let seasonpass = ['YB', 'HCD', 'SCB', 'FCB', 'FCL', 'FCSG', 'FCZ', 'GC', 'ZSC', 'EVZ']

        for (let i = 1; i < 12; i++) {
            let currentFirstName = firstNameSet[Math.floor(Math.random()*nameSet.length)]
            let currentName = nameSet[Math.floor(Math.random()*nameSet.length)]
            request.post(endpoint + 'user', {

                    json: true, body: {
                        "name": currentName,
                        "firstname": currentFirstName,
                        "sex": sex[Math.floor(Math.random()*sex.length)],
                        "email": currentFirstName + currentName + "@" + emailSuffix[Math.floor(Math.random()*emailSuffix.length)],
                        "date": randomDate(new Date(1960, 1, 1), new Date(1999, 1, 1)),
                        "seasonpass": seasonpass[Math.floor(Math.random()*seasonpass.length)]
                    }
                }, function (error, response) {
                    if (error) {
                        console.log('Error creating fields: ' + error);
                    }
                    console.log("FIELD: "+ i);
                }
            )

        }
/**
        for (let i = 1; i < 12; i++) {
            request.post(endpoint + 'ticket', {

                    json: true, body: {
                        /**
                        "owner":
                         "client":
                        "position":
                        "category": category[Math.floor(Math.random()*category.length)],
                        "price": Math.floor(Math.random()*100 + 20

                    }
                }, function (error, response) {
                    if (error) {
                        console.log('Error creating fields: ' + error);
                    }
                    console.log("FIELD: "+ i);
                }
            )

        }

        for (let i = 1; i < 12; i++) {
            request.post(endpoint + 'ticket', {

                    json: true, body: {
                        /**"name":
                         "gametype":
                         "date":
                         "tickets":
                    }
                }, function (error, response) {
                    if (error) {
                        console.log('Error creating fields: ' + error);
                    }
                    console.log("FIELD: "+ i);
                }
            )

        }**/
        res.send("fields created");
    }


    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }


};