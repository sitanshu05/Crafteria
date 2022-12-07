const express = require('express')
const app = express()
const errorMiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser")
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(cookieParser());

//importing routes
const product = require("./routes/productroute");
const user = require("./routes/userRoute");
const order = require('./routes/orderRoute')

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);

//Middleware for error
app.use(errorMiddleware);

module.exports = app;