const asyncHandler=require('express-async-handler');
const Admin=require('../models/Admin');
const { Error } = require('mongoose');
const generateToken=require('../congif/generateToken')

const registerAdmin = asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the feilds")
    }
    const userExits = await Admin.findOne({email})

    if (userExits){
        res.status(400);
        throw new Error("User already exits")
    }

    const user = await Admin.create({
        name,
        email,
        password
    })

    if(user){
       res.status(201).json({
                   _id:user.id,
                   name:user.name,
                   email:user.email,
                   phonenumber:user.phonenumber,
                   password:user.password,
                   token:generateToken(user._id)
               })
    }
    else{
        res.status(400);
        throw new Error("failed")
    }
})

const authAdmin=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const admin= await Admin.findOne({email})

    if(admin && (await admin.matchPassword(password)) ){
        res.status(201).json({
            _id:admin.id,
            name:admin.name,
            email:admin.email,
            phonenumber:admin.phonenumber,
            password:admin.password,
            token:generateToken(admin._id)
        })
    }
    else{
        res.status(401);
            throw new Error("Invalid email or password");
    }
})
module.exports={registerAdmin,authAdmin}