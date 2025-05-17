const asyncHandler=require('express-async-handler');
const Ajent=require('../models/Ajent');
const { Error } = require('mongoose');
const generateToken=require('../congif/generateToken')

const registerAjent = asyncHandler(async(req,res)=>{
    const {name,email,phonenumber,password}=req.body;
    if(!name || !email || !password || !phonenumber){
        res.status(400);
        throw new Error("Please Enter all the feilds")
    }
    const userExits = await Ajent.findOne({email})

    if (userExits){
        res.status(400);
        throw new Error("User already exits")
    }

    const user = await Ajent.create({
        name,
        email,
        phonenumber,
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

const authAjent=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const ajent= await Ajent.findOne({email})

    if(ajent && (await ajent.matchPassword(password)) ){
        res.status(201).json({
            _id:ajent.id,
            name:ajent.name,
            email:ajent.email,
            phonenumber:ajent.phonenumber,
            password:ajent.password,
            token:generateToken(ajent._id)
        })
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
})

module.exports={registerAjent,authAjent}