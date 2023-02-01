import React from "react";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";
const Maincomp = () => {
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
        <Slide title="Deal of the day"/>
        </div>
        <div className="right_slide">
          <h4>Festival latest launches</h4>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
          <a href="#">See More</a>
        </div>
      </div>
      <Slide title="Today's Deal"/>
      <div className="certer_img">
       <img src="" alt=""/>
      </div>
      <Slide title="Best Seller"/>
      <Slide title="Upto 80% off"/>
    </div>
  );
};

export default Maincomp;
