const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb  = require('./config/db');
const bcrypt = require("bcryptjs");

dotenv.config()
//DB connetion
connectDb();

// rest object
const app = express()
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
//route
app.use("/api/v1/user", require("./routes/userRoutes")); 


app.get('/', (req,res) =>{
    return res.status(200).send("<h1>welcome to server app </h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, ()=>{
    console.log(`Server is Running  ${PORT}`);
});
