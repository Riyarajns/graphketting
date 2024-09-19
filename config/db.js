const mongoose = require("mongoose");


//function mmongodb dfatbase connection
const connectDb = async () => {
    console.log(process.env.MONGO_URL)

    try {
        await mongoose.connect("mongodb+srv://riya:WuD7wY4EY1iNs3f1@cluster0.jmmgtgu.mongodb.net/test_grapk");

        console.log( `Connected To Database ${mongoose.connection.host}`)
        
    } catch (error) {
        console.log("DB Error", error);
    }
};

module.exports = connectDb;