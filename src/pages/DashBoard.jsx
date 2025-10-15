import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Dashboard.css';
import LeaveBalance from '../components/LeaveBalance';
import DashboardNav from '../components/DashboardNav';

 // function for nagivation from the dashboard
function DashBoard(){
    const navi=useNavigate();  // hook to navigate with pages
    const[userName,setUserName]=useState('');  // store the logged in user name
    const[leave,setLeave]=useState(10); // track user leaves 

    /**
     * it will fetch username and remaining leave from localstorage
     * redirect to login page if not logged in
     */
    useEffect(()=>{
        // check if user is logged in or not
        const logIn=localStorage.getItem('isLoggedIn');
        const name=localStorage.getItem('UserName');
        if(!logIn){
            navi("/login"); //navigate to login
        }else{
            setUserName(name); //set username(Priya) for welcome
            //remaining leave taken from localstorage, default leave 10
            const defaultLeavs=localStorage.getItem('leavesRemaining');
            if(defaultLeavs){
               setLeave(parseInt(defaultLeavs)); 
            }else{
                localStorage.setItem('leavesRemaining',10);
            }
        }
    },[navi]); //dependecny array include navi to avoid warning

    return(
        <div className="dashboard-container">
            <h2>Welcome, {userName||'User'}</h2>
            {/* Use Ui Components for Naviagtions */}
            <LeaveBalance leaves={leave}/>
            <DashboardNav onApply={()=>navi('/apply-leave')} onHistory={()=>navi('/history-leave')}/>
        </div>
    );
}
export default DashBoard;