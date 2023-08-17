import elipse1 from "../assets/Ellipse 1.svg";
import elipse2 from "../assets/Ellipse 2.svg";
import elipse3 from "../assets/Ellipse 3.svg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "phosphor-react";

const Review = () => {
  return (
    <div className="rev-container">
      <h1>Testimonials</h1>
        <h2 className="text">What our members say about us?</h2>
        <h2 className="text2">What our members say about us?</h2>
      <div className="rev-content">
       
  
          <div className="elipse-rev">
            <div className="elipse-img">
              <img src={elipse1} alt="" />
              <img src={elipse2} alt="" />
              <img src={elipse3} alt="" />
            </div>
            <p>10k+ Satisfied customers</p>
          </div>
    
        <Swiper className="swiper"
          modules={[Pagination]}
          spaceBetween={70}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="swiper-slide">

            <span style={{alignItems:"end",
            display:"flex",
            justifyContent:"flex-end",
          padding:"1rem 3rem"}}>
              <Star weight="fill"
              color="yellow" />
             <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
              
            </span>
            <p>
             “ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”
            </p>
            <div className="rev-txt1">
              <img src={elipse1} alt="" />
              <div>
                <h2>Albert doe</h2>
                <p>software Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <span style={{alignItems:"end",
            display:"flex",
            justifyContent:"flex-end",
          padding:"1rem 3rem"}}>
              <Star weight="fill"
              color="yellow" />
             <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
              
            </span>
            <p>
             “ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”
            </p>
            <div className="rev-txt1">
              <img src={elipse2}alt="" />
              <div>
                <h2>Albert doe</h2>
                <p>software Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swpier-slide">
            <span style={{alignItems:"end",
            display:"flex",
            justifyContent:"flex-end",
          padding:"1rem 3rem"}}>
              <Star weight="fill"
              color="yellow" />
             <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
               <Star weight="fill"
              color="yellow" />
              
            </span>
            <p>
           “ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”
            </p>
            <div className="rev-txt1">
              <img src={elipse3} alt="" />
              <div>
                <h2>Albert doe</h2>
                <p>software Engineer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
