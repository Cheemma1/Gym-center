import img1 from "../assets/Group 4.svg";
import img2 from "../assets/Group 3.svg";
import img3 from "../assets/Group 5.svg";

const Program = () => {
  return (
    <div>
      <div className="program">
        <h1>Program</h1>
        
          <h2  className="program-txt">Explore our programs</h2>
        

        <div className="splide">
          <div className="splide-box">
            <img src={img1} alt="" />
            <h2>Cardio Strength</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              venenatis, nunc a pretium viverra.
            </p>
          </div>
          <div className="splide-box">
            <img src={img2} alt="" />
            <h2>Fat loose</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              venenatis, nunc a pretium viverra.
            </p>
          </div>
          <div className="splide-box">
            <img src={img3} alt="" />
            <h2>Muscle Gain</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              venenatis, nunc a pretium viverra.
            </p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Program;
