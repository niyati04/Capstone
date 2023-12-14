import ContactUs from "../../Components/Contact-Us";

export default function Refund() {
  return (
    <div className="same_width_container">
      <div className="about_main_container">
        <div className="title_subtitle_about_container">
          <p>REFUND POLICY</p>
          <p>Tee Palette Exchange Policy</p>
        </div>

        <div className="">
          <div className="policy_container text-left">
            <p>
              At Tee Palette, we want you to be completely satisfied with your
              purchase. We stand behind the items we sell. However, if an issue
              arises due to a quality problem, we offer exchanges within 7 days
              of purchase.
            </p>

            <p>
              Due to the delicate nature of our goods and the inability to
              restock used or worn apparel, we only offer exchanges for items
              with significant product defects, and these items must be returned
              in their original condition.
            </p>

            <p>
              Refunds are only issued if you have received a damaged product. We
              do not issue a refund for issues related to size, quality, or
              color of the product. We believe in transparency; that's why we
              provide every detail about the product in the description. Please
              read all the information of the product before ordering.
            </p>

            <p>
              All tags and accessories must be returned with the item. We
              reserve the right to refuse to accept any item returned for
              exchange if it's not in its original condition.
            </p>

            <p>
              If you wish to make an exchange, please contact us via email at{" "}
              <a href="mailto:contactteepalette@gmail.com">
                contactteepalette@gmail.com
              </a>{" "}
              to receive a Return Request Form.
            </p>

            <p>
              Once your request is approved, you will be sent a return shipping
              label. Once we receive the item in its original condition, we will
              exchange your item for a new one. We cannot guarantee that a
              specific item will be in stock, and the customer may have to
              choose a different size or style if the original is no longer
              available.
            </p>

            <ul>
              <li>No returns.</li>
              <li>Only Exchange in 7 days.</li>
            </ul>

            <p>
              We will cross-check all the pieces carefully before dispatching
              the item to the customers to avoid any sort of size issue or
              damage.
            </p>

            <p>
              If you have any further inquiries or questions, please do not
              hesitate to <a href="#contact">contact us</a>. Thank you for
              shopping with Tee Palette.
            </p>
          </div>

          <div className="contact-info" id="contact">
            <p>
              If you have any further inquiries or questions, please do not
              hesitate to contact us at:{" "}
              <a href="mailto:contactteepalette@gmail.com">
                contactteepalette@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <ContactUs />
    </div>
  );
}
