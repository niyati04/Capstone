import "./../About/about.css";
import ContactUs from "../../Components/Contact-Us";

export default function ContactPage() {
  return (
    <div className="same_width_container">
      <div className="about_main_container">
        <div className="title_subtitle_about_container">
          <p>Contact Us</p>
          <p>
            Made from organic cotton, this shirt is loosely knit for an airy
            feel which goes well with its relaxed silhouette.
          </p>
        </div>

        <ContactUs />
      </div>
    </div>
  );
}
