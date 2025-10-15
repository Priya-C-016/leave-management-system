import {useState,useLocation, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import DashBoard from './pages/DashBoard';
import LeaveForm from './pages/LeaveForm';
import LeaveHistory from './pages/LeaveHistory';
import Admin from './pages/Admin';
// import Navbar from './components/Navbar';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // for clearing local stroage testing data
  // useEffect(()=>{
  //   localStorage.removeItem('leaveHistory');
  //   localStorage.removeItem('leavesRemaining');
  // },[]);
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/apply-leave"element={<LeaveForm/>}/>
        <Route path="/history-leave" element={<LeaveHistory/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  )
}

export default App;
