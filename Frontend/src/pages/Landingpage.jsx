import React from "react";
import Header from "../components/Header";
import admin from "../../public/assets/admin.png";
import agent from "../../public/assets/customer-service.png";
import "./landing.css";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <>
      <Header />
      <div className="landing-main">
        <div className="overlay">
          <div className="contents">
            <p>CSV Based Task Assessment Platform</p>
            <div className="login-buttons">
              <div >
                <Link style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",textDecoration:"none"}} to='/admin'>
                  <img style={{ width: "50px" }} src={admin}></img>
                  <span style={{ fontSize: "1.5rem", color: "white", letterSpacing: "0.2rem" }}> ADMIN</span>
                </Link>
              </div>
              <div><Link style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", textDecoration: "none" }} to='/ajent'>
                <img style={{ width: "50px" }} src={agent}></img>
                <span style={{ fontSize: "1.5rem", color: "white", letterSpacing: "0.2rem" }}> AGENT</span>
              </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
