const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
    let con=await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to mongodb");   
    }
    catch{(err)=>{
  console.log(err);
  process.exit();
}}
}

module.exports=connectDB