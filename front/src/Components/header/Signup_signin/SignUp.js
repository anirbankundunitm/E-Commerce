import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  const [logdata, setData] = useState({
   
    name:"",
    email: "",
    mobile:"",
    password: "",
    cpassword: "",
  });
  console.log(logdata);
  const adddata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="amazonlogo"></img>
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-Up</h1>

            <div className="form_data">
              <label htmlFor="Name">Your Name</label>
              <input
                type="text"
                name="fname"
                onChange={adddata}
                value={logdata.name}
                id="fname"
              />
            </div>

            <div className="form_data">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                onChange={adddata}
                value={logdata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="">Mobile</label>
              <input
                type="text"
              
                onChange={adddata}
                value={logdata.mobile}
                name="mobile"
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={logdata.password}
                placeholder="at least 6 charcter"
                id=""
              />
            </div>
         
            <div className="form_data">
              <label htmlFor="">Password</label>
              <input
                type="cpassword"
                onChange={adddata}
                value={logdata.cpassword}
                name="cpassword"
                id=""
              />
            </div>

            <button className="signin_btn">Continue</button>
            <div className="sign_info">
              <p>
                Already have an account?
                <NavLink to="/login">Signin</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
