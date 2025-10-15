import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar(){
    const navi=useNavigate();
    return (
        <nav className='navbar'>
            <h2 className="nav-title">Leave Management System</h2>
            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/apply-leave">Apply Leave</Link>
                <Link to="/history-leave">History</Link>
                <Link to="/admin">Admin</Link>
                {/* <button onClick={()=> navi("/")}>DashBoard</button> */}
                {/* <button onClick={()=>navi("/login")}>User Login</button> */}
                {/* <button onClick={()=>navi("/admin-login")}>Admin Login</button> */}
            </div>
        </nav>
    );
}
export default Navbar;
