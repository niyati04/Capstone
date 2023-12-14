import tshirtImg from "../../assets/tshirts_img.png";
import starImg from "../../assets/contact_star.svg";
import "./contact-us-section.css";
import Input from "../Input";
import { useState } from "react";
import { addContactUs } from "../../StateManagement/slicer/auth/action";
import { useDispatch } from "react-redux";

export default function ContactUs() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContactUs(userDetails));

  };
  return (
    <div>
      <section className="same_width_container">
        <div className="contact_us_container">
          <div className="contact_us_left_container">
            <div className="contact_us_star_img_container">
              <img src={starImg} alt="starImg" loading="lazy" />
            </div>
            <p>WE’D LOVE TO HERE FROM YOU</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div className="contact_tshirt_img_container">
              <img src={tshirtImg} alt="tshirtImg" loading="lazy" />
            </div>
            <div className="contact_us_star2_img_container">
              <img src={starImg} alt="starImg" loading="lazy" />
            </div>
          </div>
          <div className="contact_us_right_container">
            <div className="contact_us_star_img_container visibility_none">
              <img src={starImg} alt="starImg" loading="lazy" />
            </div>
            <p>Contact Us</p>

            <form className="contact_us_form_container" onSubmit={handleSubmit}>
              <div className="input_label_container">
                <Input
                  label="First Name"
                  value={userDetails.firstName}
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  onChange={handleChange}
                />
              </div>
              <div className="input_label_container">
                <Input
                  label="Last Name"
                  value={userDetails.lastName}
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter Last name"
                  onChange={handleChange}
                />
              </div>
              <div className="input_label_container">
                <Input
                  label="Email"
                  value={userDetails.email}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div className="input_label_container">
                <Input
                  label="Contact no."
                  value={userDetails.contactNo}
                  id="contactNo"
                  type="number"
                  name="contactNo"
                  placeholder="Enter contact no."
                  onChange={handleChange}
                />
              </div>
              <div className="input_label_container textarea_label_container">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  type="text"
                  value={userDetails.message}
                  id="message"
                  placeholder="Enter message"
                  name="message"
                  rows="3"
                  cols="50"
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
            <div className="contact_us_star_img_container">
              <img src={starImg} alt="starImg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
