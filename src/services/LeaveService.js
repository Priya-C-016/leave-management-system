/**
 * @param {object} leaveData-date and reason
 * @return {Promise<Object>} suceess/fail response
 */

export const leaveSubmit=async(leaveData) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(leaveData.date && leaveData.reason){
                resolve({success:true,message:'Successfully Submitted Leave!'});
            }else{
                reject({success:false,message:"Invalid Input"});
            }
        },800);
    });
};