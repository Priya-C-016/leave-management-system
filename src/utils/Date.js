export const getDate=()=>{
    const today=new Date();
    return today.toISOString().split('T')[0];
}