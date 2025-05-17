
const mongoose=require('mongoose')
const { type } = require('os')
const bcrypt=require('bcryptjs')

const Adminmodel=mongoose.Schema(
    {
    
    name:{type:String,required:true,unique:true,trim:true},
    email:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true,trim:true},
    },
    {
        timestamps:true
    }
)

Adminmodel.pre("save",async function (next){
    if(!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
Adminmodel.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

module.exports = mongoose.model('Admin', Adminmodel);