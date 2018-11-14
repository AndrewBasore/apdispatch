const mongoose = require('mongoose');

const DATABSE_CONNECTION = 'mongodb://db/test';



Kitten = exports.Kitten = mongoose.model('Kitten', require('./schema/kitty.js'));

exports.initializeMongo = () =>{
    mongoose.connect(DATABSE_CONNECTION);

    console.log('Trying to connect to ' + DATABSE_CONNECTION);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error; We are not connected'));
    db.once('open', () =>{
        console.log("We are connected to the db");
    });
}

exports.addRandomCat = () =>{
    console.log("Adding new cat");
    var silence = new Kitten({
        name: 'Silenace' + Math.random()
    });

    silence.save( (err, fluffy) =>{
        if(err) return console.error(err);
        console.log("There is a new random cat in the neighborhood');")
    });
}