require('dotenv').config();

const URL_MONGO = process.env.URL_MONGO ;

const connect = () => {
    const mongoose = require('mongoose');
    mongoose.connect(URL_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });
}

module.exports = { connect };
