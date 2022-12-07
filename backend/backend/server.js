const app = require('./app')
const connectDatabase = require('./config/database')
var cors = require('cors')
const express = require('express')

app.use(cors())
app.use(express.json())
const dotenv = require("dotenv")

//handling uncaught exception
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the error due to uncaught error");
    process.exit(1);

})




//config
dotenv.config({ path: "backend/config/config.env" })

//connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
});



//unhandled promise rejection

process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the error due to unhandled error");
    server.close(() => {
        process.exit(1);
    })
})