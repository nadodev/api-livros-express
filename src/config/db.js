const connect = () => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://bemmenos:rxDHMwykXBXSRDun@cluster0.90cqyh1.mongodb.net/seu_banco_de_dados', {
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
