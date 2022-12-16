import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Newaj from "../../img/Newaj.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter'
import resume from './resume.pdf'
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro" >  
      {/* left name side */}
      <div className="i-left" data-aos="fade-down-right" >
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span className="typeWriter">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Newaj Sharif']}
            loop={5}
            cursor
            cursorStyle='.'
            typeSpeed={200}
            deleteSpeed={50}
            
           
          />
        </span>
          <span>
          <strong>I am a quick learner, passionate and creative. I believe in hard work,
efficiency and quality. I always like to learn new technology and
ensure my skills are kept up to date within this rapidly changing
industry.</strong>
          </span>
          <a href={resume} download>
          <button className="button cv-button">Resune</button>
        </a>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link> */}
       
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/newajsharif91"><img src={Github} alt="" /></a>
         <a href="https://www.linkedin.com/in/newaj-sharif-55289222a/"> <img src={LinkedIn} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right" data-aos="fade-down-left">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img  src={Newaj} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
