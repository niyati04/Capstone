import PropTypes from "prop-types";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./hero-section.css";

 function HeroSection({allPosterData}) {
  

  
  return (
    <section>
      <div className="hero_img_slider_container">
        <div className="swiper heroSlider">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {allPosterData.map((perPoster) => {
              return (
                <SwiperSlide key={Math.random()}>
                  <img
                    src={perPoster?.posterImgName}
                    loading="lazy"
                    alt="posterImg"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={posterImg1} loading="lazy" alt="posterImg" />
            </div>
            <div className="swiper-slide">
              <img
                src={posterImg2}
                loading="lazy"
                alt="posterImg"
              />
            </div>
          </div> */}
          <button className="swiper-button-next image-swiper-button-next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
          <button className="swiper-button-prev image-swiper-button-prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  allPosterData: PropTypes.array,
};


export default HeroSection