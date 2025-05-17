import './ajentdash.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const AgentDashboard = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const token = JSON.parse(localStorage.getItem('ajentInfo'))?.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };
      const { data } = await axios.get('/api/upload/records', config);
      setRecords(data);
    };
    fetchRecords();
  }, []);
  return (
    <>
      <div className='admin-header'>
          <div className='admin-header-sub'>
            <center>AGENT DASHBOARD</center>
          </div>
        <a style={{ fontSize: "1.5rem", color: "red", position: "absolute", right: 0, marginRight: "1rem" }} href='http://localhost:5173/ajent'>Logout</a>
      </div>
      <div className='admin-body'>
      <div className='return-body'>
          <h2 style={{fontSize:"2rem"}}>Your Assigned Records</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Phone</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{r.firstname}</td>
                  <td>{r.phone}</td>
                  <td>{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
  )
}

export default AgentDashboard