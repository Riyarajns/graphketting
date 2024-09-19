const userModel = require("../models/userModel");
// const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");



const registerController = async (req, res) => {
    try {
        const { userName, email, password, phone } = req.body
        //validation
        if (!userName || !email || !password || !phone) {
            return res.status(500).send({
                success: false,
                message:'Please Provide All fields',
            })
        }

        //check user
        const exisiting = await userModel.findOne({ email });
        if (exisiting) {
            return res.status(500).send({
                success: false,
                Message: "Email Already Registerd please Login",
            });
        } //hashing password
    //    console.log(bcrypt)
    //     var salt= bcrypt.genSaltSync(10);
    //     // const salt = await bcrypt.genSalt(10);
    //     const hashedPassword = await bcrypt.hash(password, salt);

        //create new user
    
        const user = await userModel.create({
            userName,
            email,
            password,
            phone,
            
        })
        
        res.status(201).send({
            success: true,
            message: 'Successfully Registerd',
            user,
            
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            Message: 'Error In Register API',
            error,
        })
    }
};
// getuser
const getUserController = async (req, res) => {
    try {
        // find
        const user = await userModel.find()
        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not Found'
            })
        }
        
        res.status(200).send({
            success: true,
            message: 'User get Successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get User API',
            error
        });
    };
    // res.status(200).send("User Data");
    // console.log(req.body.id);  
};
//upadte user
const updateUserController = async (req, res) => {
    try {
        const { userName, email, phone, password } = req.body
        if (!userName || !email || !password || !phone) {
            return res.status(500).send({
                success: false,
                message:'Please Provide All fields',
            })
        }
         await userModel.updateOne({ _id:req.query.id },{userName, email,password,phone});
        
       
    
        res.status(200).send({
            success: true,
            message: "User Updated Successfully",
            
        });
    } catch (error) {
        res.status(500).send({
            succes: false,
            message: "Error in update user"
        })
    }
}
//delete user
const deleteUserController = async (req, res) => {
    try {
        await userModel.deleteOne(req.params);
        return res.status(200).send({
            success: true,
            message: "Your User has been deleted"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error In delete user  API'
        })
    }
};

module.exports = {registerController, getUserController, updateUserController, deleteUserController}