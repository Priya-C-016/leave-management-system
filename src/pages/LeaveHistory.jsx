import React,{useState,useEffect} from 'react';
import './LeaveHistory.css';

//Function Managing leaves
function LeaveHistory(){
    //mock data(just for testing)
    const info=[{name:'Priya',empId:'A102',appliedDate:'2025-10-14',date:'2025-10-19',reason:'Personal Work',status:'Approved'},
                {name:'Priya',empId:'A102',appliedDate:'2025-05-04',date:'2025-05-12',reason:'Family Function',status:'Pending'}
            ];
    // state to hold leave history from localstorage        
    const [history,setHistory]=useState([]);

    /**
     * loads leave history from localstorage when compont mount
     * useeffct runs once after mount of componts
     * */
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('leaveHistory'))|| [];
        setHistory(data); //updating state with fetched history data
    },[]);
    return (
        <div className='leave-history-container'>
            <h2>Leave History</h2>
            {history.length===0 ?(
                <p>No leave history</p>
            ):(
                <table>
                    <thead><tr><th>Name</th>
                    <th>EmpId</th>
                    <th>Applied Date</th>
                    <th>Leave Date</th>
                    <th>Reason</th>
                    <th>Status</th></tr></thead>
                    <tbody>
                        {history.map((item,indx)=>(
                            <tr key={indx}>
                                <td>{item.name}</td>
                                <td>{item.empId}</td>
                                <td>{item.appliedDate}</td>
                                <td>{item.date}</td>
                                <td>{item.reason}</td>
                                <td className={item.status}>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default LeaveHistory;