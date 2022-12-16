import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import BikeSale from '../../img/Bike-Sale.png'
import Elearning from '../../img/E-learning.png'
import Photograpy from '../../img/Photograpy.png'

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Hey </span>
      <span>Let's see my project</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://crazy-bikers-b555f.web.app/"><img src={BikeSale} alt="" /></a>
        </SwiperSlide>
        
        <SwiperSlide>
         <a href="https://get-personal-service-client.web.app/courses"> <img src={Photograpy} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://assig-10-client.firebaseapp.com/courses"> <img src={Elearning} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
