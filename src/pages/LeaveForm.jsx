import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "./LeaveForm.css";
import { getDate} from '../utils/Date.js';
// import { leaveSubmit } from '../services/LeaveService';

/**Take input from user and stor them in localstorage
 * input like name,empid,date,reason for leave
 */
function LeaveForm(){  
    const navi=useNavigate();

    // store user data
    const [userData,setData]=useState({name:'Priya',empId:'A102',date:'',reason:''});
    const [msg,setMsg]=useState('');
    const [leavesRemaining,setLeavseRemaining]=useState(10);  // default set to 10

    /**handle change in input field of the leavse form
     * @param {event} e-input change event
     */
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({...userData,[name]:value});
    };
    // fetching the leave remaining from localstorage
    useEffect(()=>{
        const leaveLeft=localStorage.getItem('leavesRemaining');
        if(leaveLeft){
            setLeavseRemaining(parseInt(leaveLeft));
        }else{
            localStorage.setItem('leavesRemaining',10);
            setLeavseRemaining(10);
        }
    },[]);

    /**handle from submitting actions
     * update localstorage with new entry and remaining leave
     * @param {event} e-form submit event
     * */
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!userData.date || !userData.reason){  // validating input fields
            setMsg('Please fill all the fields');
            return;
        }
        // checking if leaved are remaining or not
        if(leavesRemaining<=0){
            setMsg("No leaves left");
            return;
        }
        //get the current date
        const appliedDate=getDate();
        //updaing the remaining leavses
        const updatedLeave=leavesRemaining-1;
        setLeavseRemaining(updatedLeave);
        localStorage.setItem('leavesRemaining',updatedLeave);
        // get history of previous record from localstorage
        const previous=JSON.parse(localStorage.getItem('leaveHistory'))|| [];
        const newDataEntry={...userData,appliedDate,status:'Pending'};     // making new entry for leave
        localStorage.setItem('leaveHistory',JSON.stringify([...previous,newDataEntry]));    // save the updated leaves
        //shows msg when form is submitted.
        setMsg('Successfully submitted Leave');
        //reset the fields for my mock user
        setData({name:'Priya', empId:'A102',date:'',reason:''});
        // redirect to dashboard after submitting the form in 1.1sec
        setTimeout(()=>navi('/dashboard'),1100);
    };
    return(
        <div className='leave-form-container'>
            <h2>Apply for Leave</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name="name" value={userData.name} readOnly/>
                <label>Employee ID</label>
                <input type='text' name='empId' value={userData.empId} readOnly/>
                <label>Date</label>
                <input type="date" name="date" value={userData.date} onChange={handleChange}/>
                <label>Reason</label>
                <textarea name="reason" value={userData.reason} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
            {msg && <p className='submitted-msg'>{msg}</p>}
        </div>
    );
}
export default LeaveForm;