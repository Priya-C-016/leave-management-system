import React from "react";
import {useNavigate} from 'react-router-dom';
import "./HomePage.css";
// import img from "../assets/leave-management.png";
const HomePage=()=>{
    const navi=useNavigate(); //naviagtion hook
    //Function handles the login button 
    const handleClickLogin=()=>{
        navi("/login"); //navigate to login page
    };
    return (
        <div className="home-page-container">
            <button className='user-login-btn' onClick={handleClickLogin}>Login Here</button>
            <div className="container-inner">
                <div className='content'>
                    <h1>Welcome to the Leave Management System</h1>
                    <p>Manages your leaves efficiently using leave management system.</p>
                </div>
            </div>
        </div>
    );
}
export default HomePage;