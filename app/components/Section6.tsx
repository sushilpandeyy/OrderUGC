"use client";
import Slider from "react-slick";
import './Section6.css'
import car1 from "../../public/car1.png"
import car3 from "../../public/car3.png"
import car4 from "../../public/car4.png"
import righta from "../../public/righta.png"
import lefta from "../../public/lefta.png"

export default function Section6() {
    const AfroStyles = [
        {
          id: 1,
          src: car1.src,
        },
          {
            id: 3,
            src: car3.src,
          },
          {
            id: 4,
            src: car4.src,
          },
      ];
      
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: (
            <div>
              <div className="next-slick-arrow">
                  <img src={righta.src} height="100" width="100"/>
              </div>
            </div>
          ),
      
          prevArrow: (
            <div>
              <div className="next-slick-arrow rotate-180">
                <img src={righta.src} height="100" width="100"/>
              </div>
            </div>
          ),
      };
    
      return (
        <>
        <center><h2 className="font-poppins text-4xl font-medium font-bold mb-9">Access over best <br/>UGC creators in India</h2></center>
        <div className="content carouselg">
  <div className="container">
    <Slider {...settings}>
      {AfroStyles.map((item) => (
        <div key={item.id}>
          <div className="img-body">
            <img src={item.src} />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
</>
      );
}
