import React,{useState,useEffect} from 'react';
import "./Admin.css";


//function for admin to update the leave status (mock)
function Admin(){
    const [leaves,setLeaves]=useState([]);
    //first fecth the leave history from localstorage
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('leaveHistory'))||[];
        setLeaves(data);
    },[]);

    /**
     * update the status of leave request in localstroage
     * if leave rejected, increse the leave balance by 1
     * @param {number} indx-index of leave reques
     * @param {string} status-New status (Approved or Rejected)
     */
    const updatedStatus=(indx,status)=>{
        const updatedLeave=[...leaves];
        const previousStatus=updatedLeave[indx].status; //track previuos status
        updatedLeave[indx].status=status; //update status
        setLeaves(updatedLeave);          // update state
        localStorage.setItem('leaveHistory',JSON.stringify(updatedLeave));  // save updated history
        
        //if leave was pending and rejected by admin , increase the leave balance by 1
        if(previousStatus==='Pending' && status==='Rejected'){
            const currentLeaves=parseInt(localStorage.getItem('leavesRemaining'))||0;
            const newLeaves=currentLeaves+1;
            localStorage.setItem('leavesRemaining',newLeaves);
        }
    };
    return(
        <div className='admin-container'>
            <h2>Admin Dashboard for Leave Requests</h2>
            {leaves.length===0?(
                <p>No Requests for Leave</p>
            ):(
                <table>
                    <thead>
                        <tr>
                        <td>Name</td>
                        <td>EmpId</td>
                        <td>Applied Data</td>
                        <td>Leave Date</td>
                        <td>Reason</td>
                        <td>Status</td>
                        <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {leaves.map((item,indx)=>(
                            <tr key={indx}>
                                <td>{item.name}</td>
                                <td>{item.empId}</td>
                                <td>{item.appliedDate}</td>
                                <td>{item.date}</td>
                                <td>{item.reason}</td>
                                <td className={item.status}>{item.status}</td>
                                <td>{item.status==='Pending' && (<>
                                <button className="btn"onClick={()=>updatedStatus(indx,'Approved')}>Approved</button>
                                <button className="btn" onClick={()=>updatedStatus(indx,'Rejected')}>Rejected</button>
                                </>)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default Admin;