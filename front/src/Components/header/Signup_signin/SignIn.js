import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";

const SignIn = () => {
  
    const[logdata,setData]=useState({
      email:"",
      password:"",
    });
    console.log(logdata)
    const adddata=(e)=>{
      const{name,value}=e.target;
      setData(()=>{
        return{
          ...logdata,
          [name]:value
        }
      })
    }
  
  return (
    <div>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo"></img>
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="">Email</label>
                <input type="text" 
                 onChange={adddata}
                 value={logdata.email}
                name="email" id="email"/>
                
              </div>
              <div className="form_data">
                <label htmlFor="">Password</label>
                <input type="password" 
                onChange={adddata}
                value={logdata.password}name="password" placeholder="at least 6 charcter" id=""
                  />
              
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to Amazon</p>
          <NavLink to="/register" > <button>Create amazon account</button></NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
