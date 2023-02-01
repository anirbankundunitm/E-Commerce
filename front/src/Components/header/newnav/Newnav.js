import React from "react";
import "./newnav.css";
const Newnavbaar = () => {
  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p>All</p>
          <p>Mobile</p>
          <p>BestSeller</p>
          <p>Fashion</p>
          <p>Customer</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Today's Deal</p>
          <p>Amazon Pay</p>
        </div>
        <div className="right_data">
          <img src="./nav.jpg" alt="navta" />
        </div>
      </div>
    </div>
  );
};

export default Newnavbaar;
