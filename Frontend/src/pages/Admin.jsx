import React from "react";
import Header from "../components/Header";
import '../pages/admin.css'
import { Tabs,Link,Box } from "@chakra-ui/react"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import "./landing.css";
import axios from 'axios'
const Admin = () => {
  // const[checkEmail,setCheckEmail]=useState("")
  // const[checkPass,setCheckPass]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")
  const navigate=useNavigate()

  const submitHangleLogin = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert("Enter all the credentials")
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      };
      const { data } = await axios.post("/api/admin/login", { email, password }, config)
      alert("Login successful")
      localStorage.setItem("adminInfo", JSON.stringify(data))
      navigate('/admindashboard')
    }
    catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      alert("Invalid email or password.");
    }
  }

const submitHandleSignup=async()=>{
 if(!name || !email || !password ){
  alert('Filling all the fields are mandatory')
  return;
 }
 try {
  const config={
    headers:{
      "Content-type":"application/json"
    },
  };
  const {data}=await axios.post("api/admin",{name,email,password},config);
  alert("Registration Successfull");
  localStorage.setItem("adminInfo",JSON.stringify(data))
 } catch (error) {
   console.error("Signup error:", error.response || error.message || error);
   alert("Some error occurred during registration. Please check the entered data.");
  
 }
  }



  return (
    <>
      <Header />
      <div className="landing-main">
        <div className="overlay">
      <div className="admin-main">
            <Tabs.Root defaultValue="members" >
                          <Tabs.List>
                              <Tabs.Trigger value="members" asChild>
                                  <Box w="50%" textAlign="center" style={{display:"felx",alignItems:"center",justifyContent:"center",fontSize:"1.5rem"}}>
                                      <Link unstyled href="#members">
                                          Login
                                      </Link>
                                  </Box>
                              </Tabs.Trigger>
                              <Tabs.Trigger value="projects" asChild>
                                  <Box w="50%" textAlign="center" style={{ display: "felx", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                                      <Link unstyled href="#projects">
                                          Sign up
                                      </Link>
                                  </Box>
                              </Tabs.Trigger>
                          </Tabs.List>

                          <Tabs.Content className="box-content-login" value="members">
                        <form className="form-login" >
                       <label>Email</label><input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter your login email"></input>
                  <label>Password</label><input onChange={(e) => {setPassword(e.target.value) }} type="password" placeholder="Enter your login password"></input>
                       <button onClick={submitHangleLogin}>Login</button>
                        </form>
                          </Tabs.Content>
                          <Tabs.Content className="box-content-login" value="projects">
                            <form className="form-signup">
                              <label >Name <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter Your Name"></input></label>
                                <label>Email<input onChange={(e) => {setEmail(e.target.value) }} type="text" placeholder="Enter Your Email"></input></label>
                                <label> Set Password<input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter Your Password"></input></label>
                              <button
                              onClick={submitHandleSignup}
                              >
                                
                                Create Admin</button>
                              </form>
                          </Tabs.Content>
                      </Tabs.Root>
          </div>         
        </div>
      </div>
    </>
  );
};

export default Admin;
