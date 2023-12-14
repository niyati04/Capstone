import "./policy.css";
import CartImg from '../../assets/cart-img.png'
import ContactUs from "../../Components/Contact-Us";
import { Link } from "react-router-dom";




export default function About() {
  return (
    <div className="same_width_container">
      <div className="about_main_container">
        <div className="title_subtitle_about_container">
          <p>Shipping Policy</p>
          <p>
          We know you are eager to receive your parcel. Keeping that in mind, we have partnered with some of the best delivery partners to ensure quality deliveries EVERY TIME!
          </p>
        </div>

        <div className="picture_content_container">
          <div>
            <img src={CartImg} loading="lazy" alt="content_img" />
          </div>
          <div className="policy_container">
            <ul>
              <li>
                Any order placed will be shipped within 2-3 days. Orders placed
                on Saturday and Sunday will be dispatched on Monday.
              </li>
              <li>
                Once dispatched, your order will take between 7-10 days to reach
                you. It can take more or less depending on the delivery
                location.
              </li>
              <li>
                Once the order is dispatched, a tracking ID and link will be
                sent via mail where you can track the parcel&rsquo;s
                whereabouts.
              </li>
              <li>
                For any assistance, you can reach out to the delivery agency or
                contact us via the&nbsp;
                <Link to="/Contact">Contact Us</Link>&nbsp;Page.
              </li>
            </ul>
          </div>
        </div>

        <ContactUs />
      </div>
    </div>
  );
}
