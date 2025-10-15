import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import showeye from"../assets/show-svgrepo-com.svg";
import hideeye from "../assets/hide-svgrepo-com.svg";
import "./LoginPage.css";

/**
 * handle the login functionality for the leave management system 
 * validate user input and storing locally(mock)
*/
function LoginPage(){
    const navi=useNavigate();  //hook for naviagtion
    const [email,setEmail]=useState('');   // state to store input
    const [password,setPassword]=useState('');   //state to store password
    const [error,setError]=useState('');    //state to store error msg
    const [showPasswrd,setShowPasswrd]=useState(false);   //state for toggle passwrd visibility

    // mock user credentials for testing
    const User={email:"name@company.com",
        password:"Priya@123", name:"Priya",
    };
    
    /**Validate email using regex
     * @param{string} email input
     * @return {boolean} true if valid,false if not valid
    */
    const validateEmail=(email)=>{
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    }

    /**validate passwrd using regex(passwrd must have minimum 8 charcters with uppercase,lowercase, number and special charcters)
     * @param{string} password
     * @return {boolean} true if valid, false if not valid
     * */
    const validatePasswrd=(password)=>{
        const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password) && !/\s/.test(password);
    };

    //handles the submission 
    const handleLogin=(e)=>{
        e.preventDefault();   //prevent deafult from submission

        const checkFormValid=email && password && validateEmail(email);
    
        if(!checkFormValid){
            setError("Please enter a valid email address");
            return;
        }
        //error msg for wrong password
        if(!validatePasswrd(password)){
            setError('Password must minimum 8 chars, with uppercase,lowercase,number, and speacial char with no space.');
            return;
        }
        //check credentials against the mock user 
        if(email===User.email && password===User.password){
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("UserName",User.name);
            navi("/dashboard");  //after submitting redirect to dashboard
        }else{
            setError("Invalid email or password"); //error msg for incorrect credentials
        }
    };

    return(
        <div className='login-container'>
            <form onSubmit={handleLogin} className="login-box">
                <h2 className="login-title">Leave Management System</h2>
                {/*error msg*/}
                {error &&(
                    <div className="error-msg">
                        {error}
                    </div>
                )}
                {/*email input*/}
                <label className="input-label">Email</label>
                <input type="email" placeholder="name@company.com" value={email} onChange={(e)=>setEmail(e.target.value)}
                className="input-field"/>

                {/*password input*/}
                <label className="input-label">Password</label>
                <div className='password-container'>
                <input type={showPasswrd?'text':'password'} placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}
                className="input-field"/>
                <img src={showPasswrd?hideeye:showeye} alt='toggle password' className='toogle-password' onClick={()=>setShowPasswrd(!showPasswrd)}/>
                </div>
                {/*Submit Button*/}
                <button type="submit" className="login-btn">
                    Login
                </button>
                {/*Hint for user(mock)*/}
                <p className="login-hint">
                    Use <b>name@company.com</b> / <b>name@123</b> to login.
                </p>
            </form>
        </div>
    );
}
export default LoginPage;