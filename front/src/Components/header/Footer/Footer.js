import React from 'react'
import "./footer.css"
const footer = () => {
    const year=new Date().getFullYear();
    console.log(year);
  return (
    <footer>
      <div className='footer_container'>
        <div className='footr_details_one'>
            <h3>Get to know Us</h3>
            <p>Abouts us</p>
            <p>Careers</p>
            <p>Press Realseses</p>
            <p>Amazon Cates</p>
        </div>
        <div className='footr_details_one'>
           <h3>Get to know Us</h3>
            <h3>Facebook</h3>
            <p>Twitter</p>
            <p>Instragram</p>
           
        </div>
        <div className='footr_details_one'>
            <h3>Get to know Us</h3>
            <p>Abouts us</p>
            <p>Careers</p>
            <p>Press Realseses</p>
            <p>Amazon Cates</p>
        </div>
      </div>
      <div className="lastdetails">
                <img src="./amazon_PNG25.png" alt="logo" />
                <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
            </div>
    </footer>
  )
}

export default footer
