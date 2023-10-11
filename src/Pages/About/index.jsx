import React from "react";
import "./about.css";
import contentImg from "../../assets/tshirtImg.png";

export default function About() {
  return (
    <div className="same_width_container">
      <div className="about_main_container">
        <div className="title_subtitle_about_container">
          <p>ABOUT US</p>
          <p>
            Made from organic cotton, this shirt is loosely knit for an airy
            feel which goes well with its relaxed silhouette.
          </p>
        </div>

        <div className="picture_content_container">
          <div>
            <img src={contentImg} alt="content_img" />
          </div>
          <div>
            <p>
              Welcome - Thanks For visiting here as this page doesn't get lot of
              attention in response to other 'amazing' pages. Heartly welcome!!{" "}
              <br /> <br />
              Who Are We - We are an ecommerce platforms basically for selling
              clothing apparels like T Shirts, Joggers, Shirts, Full Sleeves
              etc. <br /><br />
              Located At - We are operating our operation from Punjab, India
              since 2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
