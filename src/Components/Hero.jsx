import heroimg from "../assets/hero-img.png";
import elipse1 from "../assets/Ellipse 1.svg";
import elipse2 from "../assets/Ellipse 2.svg";
import elipse3 from "../assets/Ellipse 3.svg";
import { Play } from "phosphor-react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-txt">
        <h1>Helps for your ideal body fitness</h1>
        <p>
          Motivate users with benefits and positive reinforcement, and offer
          modifications and progress tracking.
        </p>
        <div className="hero-btn">
          <button className="start-btn">Start Traning</button>
          <button className="watch-btn">
            <span className="icon">
              <Play color="#097fd9" weight="fill" />
            </span>{" "}
            Watch Video
          </button>
        </div>
      </div>

      <div className="hero-right">
        {/* <h2 className="txt">Fitness</h2> */}
        <div className="img-content">
          <h2 className="txt">Fitness</h2>
          <div className="elipse-container">
            <div className="elipse-img">
              <img src={elipse1} alt="" />
              <img src={elipse2} alt="" />
              <img src={elipse3} alt="" />
            </div>
            <p>10k+ Satisfied customers</p>
          </div>
          <img src={heroimg} alt="gym-center-image" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
