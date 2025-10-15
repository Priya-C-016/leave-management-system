import React from 'react';
function DashboardNav({onApply,onHistory}){
    return(
        <div className='dashboard-navigation'>
            <button onClick={onApply}>Apply for Leave</button>
            <button onClick={onHistory}>View Leave History</button>
        </div>
    )
}
export default DashboardNav;