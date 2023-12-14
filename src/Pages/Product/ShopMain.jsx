import "./shop.css";
import ProdView from "./sections/prodView";
import ProdRatingShareColor from "./sections/ProdRatingShareColor";
import SizeChart from "./sections/SizeChart";
import InfoProd from "./sections/InfoProd";
import FeedbackView from "./sections/FeedbackView";
import ContactUs from "../../Components/Contact-Us";
import MarqueeSlider from "../../Components/MarqueeSlider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  fetchParticularProductDetails,
} from "../../StateManagement/slicer/product/action";
import Loader from "../../Components/Loader";
import { IS_COLOR } from "../../StateManagement/slicer/product/type";
import { ToastContainer } from "react-toastify";

export default function ShopMain() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productDetails, isLoading, isColor } = useSelector(
    (state) => state.product
  );

  const handleCart = (item) => {
    let data = {
      product_id: item?.data?.product_id,
      product_attr_id: item?.data?.product_attr_img[0]?.product_attr_id,
    };
    dispatch(addProductToWishList(data));
  };

  const handleForColorDetails = (item) => {
    let data = {
      product_id: item?.product_id,
      sku: item?.sku,
    };
    dispatch({ type: IS_COLOR, response: item?.color_id });
    dispatch(fetchParticularProductDetails(data, navigate));
  };

  const returnPolicyData = [
    `This product is in no-refund policy.`,
    `Exchange within 24 hours of delivery for size/quality issues or damaged products.`,
  ];
  return (
    <section>
      <div className="same_width_container">
        <div className="main_shop_container">
          <ProdView />

          <div className="shop_view_container prod_details_container">
            <div className="prod_left_details_container">
              <ProdRatingShareColor />
              <SizeChart />
              <InfoProd />
            </div>
            <div className="prod_right_details_container">
              <div className="price_container">
                <p>
                  <label>₹</label> 799 <span>₹ 1099</span>
                </p>
                <button onClick={() => handleCart(productDetails)}>
                  ADD TO CART
                </button>
              </div>
              <div className="return_policy_container">
                <p className="title_of_prod_details_text">
                  Return & Refund Policy
                </p>
                {returnPolicyData?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </div>

              <div className="review_refund_container  return_policy_container">
                <p className="title_of_prod_details_text">Shipping info</p>
                <p>
                  Please expect delivery of the product within 7 to 10 business
                  days after order confirmation.
                </p>
              </div>

              <FeedbackView />
            </div>
          </div>
        </div>
      </div>
      <ContactUs />

      <MarqueeSlider />
    </section>
  );
}
