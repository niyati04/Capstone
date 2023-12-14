import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import "./customer-review-section.css";
import LeftAerrow from "../../../../assets/left_aerrow.svg";
import RightAerrow from "../../../../assets/right_aerrow.svg";

export default function ReviewSection() {
  const reviewData = [
    {
      reviewerName: "Smith Jason",
      reviewContent:
        "Keeps its shape, doesn't stretch out. Looks great and feels great. The fit is perfect. I was nervous buying a women's tee (I mostly buy men's or unisex .",
    },
    {
      reviewerName: "Smith Jason",
      reviewContent:
        "Keeps its shape, doesn't stretch out. Looks great and feels great. The fit is perfect. I was nervous buying a women's tee (I mostly buy men's or unisex .",
    },
    {
      reviewerName: "Smith Jason",
      reviewContent:
        "Keeps its shape, doesn't stretch out. Looks great and feels great. The fit is perfect. I was nervous buying a women's tee (I mostly buy men's or unisex .",
    },
    {
      reviewerName: "Smith Jason",
      reviewContent:
        "Keeps its shape, doesn't stretch out. Looks great and feels great. The fit is perfect. I was nervous buying a women's tee (I mostly buy men's or unisex .",
    },
  ];

  const settings = {
    lazyload: true,
    nav: false,
    autoplay: true,
    controls: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    responsive: {
      640: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  };

  const goToPrevSlide = () => {
    slider.slider.goTo("prev");
  };

  const goToNextSlide = () => {
    slider.slider.goTo("next");
  };

  let slider = null;
  return (
    <section className="same_width_container">
      <div className="exclusive_tshirt_slider_container customer_review_container">
        <p>CUSTOMER REVIEW</p>
        <label>#SATISFIEDITEM</label>
      </div>

      <div className="container">
        <div className="customer_review_slider">
          <TinySlider
            settings={settings}
            ref={(sliderRef) => (slider = sliderRef)}
          >
            {reviewData.map((el, index) => (
              <div key={index}>
                <div className="review_perslider_container">
                  <p>{el?.reviewContent}</p>
                  <p>- {el?.reviewerName}</p>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
        <ul
          className="control prev_next_btn_container review_left_right_btn_container"
          id="custom-control"
        >
          <li className="prev" onClick={goToPrevSlide}>
            <img src={LeftAerrow} alt="LeftAerrow" loading="lazy" />
          </li>
          <li className="next" onClick={goToNextSlide}>
            <img src={RightAerrow} alt="RightAerrow" loading="lazy" />
          </li>
        </ul>
      </div>
    </section>
  );
}
