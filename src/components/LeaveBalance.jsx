import React from 'react';

function LeaveBalance({leaves}){
    return (
        <div className='leave-balance'>
        <h3>Leave Balance: <span>{leaves}</span> days</h3></div>
    )
}
export default LeaveBalance;