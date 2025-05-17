const express=require('express')
const app=express()
const dotenv=require('dotenv')
const connectDB = require('./congif/db')
const adminRoutes = require('./routes/adminRoutes')
const ajentRoutes = require('./routes/ajentRoutes')


dotenv.config()
connectDB();
const PORT=process.env.PORT || 5000
app.use(express.json())
app.get("/",(req,res)=>{
 res.send("Hello")
})
app.use('/api/upload', require('./routes/uploadRoutes'));
app.use('/api/admin',adminRoutes)
app.use('/api/ajent',ajentRoutes)
app.listen(PORT,(err)=>{
console.log(err);
console.log("server running");

})