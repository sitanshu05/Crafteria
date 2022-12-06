const mongoose = require('mongoose');


//link present in config file
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
        console.log(`Mongodb connected with server : ${data.connection.host}`);

    });
}

module.exports = connectDatabase;