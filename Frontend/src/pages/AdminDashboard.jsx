import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './admindash.css'
import upload from '../../public/assets/upload.png'
const AdminDashboard = () => {
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return alert("Please upload a file");

        const formData = new FormData();
        formData.append('file', file);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            };
            await axios.post('/api/upload/upload', formData, config);
            alert("File uploaded and records distributed successfully");
        } catch (error) {
            alert("Error uploading file");
            console.error(error);
        }
    }
    return (
    <>
      <div className='admin-header'>
          <div className='admin-header-sub'>
            <center>ADMIN DASHBOARD</center>
          </div>
              <a style={{ fontSize: "1.5rem", color: "red",position:"absolute",right:0,marginRight:"1rem" }} href='http://localhost:5173/admin'>Logout</a>
      </div>
      <div className='admin-body'>
              <h2 style={{color:"black",fontFamily:"monospace",fontWeight:"600",fontSize:"2rem"}}><span style={{ color: "red", fontSize: "2.1rem", fontWeight: "600" }}>U</span>pload csv,xlsx or axls files</h2>
              <form onSubmit={handleSubmit} className='form-admin'>
                <img style={{width:"6rem"}} src={upload}></img>
                  <input type="file" accept=".csv,.xlsx,.xls" onChange={(e) => setFile(e.target.files[0])} />
                  <button  className='button-admin' type="submit">Upload File</button>
              </form>
      
      </div>
      </>
  )
}

export default AdminDashboard