import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Image from "../Image";
import promocode from "../../assets/promo_code.svg";
import Input from "../Input";

function OrderSummary(props) {
  const location = useLocation();

  return (
    <div className="order_price_container">
      {location.pathname === "/Delivery" && (
        <>
          <div className="promocode_container">
            <div className="icon_text_promocode_container">
              <Image src={promocode} alt="promocodeImg" outsideClassName="" />
              <span>Promo code</span>
            </div>

            <Input
              label=""
              className="promo_code_input"
              id="coupon"
              type="text"
              name="coupon"
              placeholder="Enter promo code"
              onChange={props.handleChange}
            />
          </div>

          <button className="apply_btn_container" onClick={props?.handleCoupon}>Apply</button>
        </>
      )}

      <div>
        <p>SubTotal</p>
        <p>₹ {props.subTotal}</p>
      </div>
      <div>
        <p>Delivery</p>
        <p>{props.deliveryRate}</p>
      </div>
      <div>
        <p>{props.delivaryLocation}</p>
      </div>
      <div className="dashed_border_width" />
      <div className="total_container">
        <p>Total</p>
        <p>₹ {props.totalPrice}</p>
      </div>
      <span>(Tax included)</span>

      {location.pathname === "/Cart" && <button onClick={props.handleCheckout}>CHECKOUT</button>}
    </div>
  );
}

OrderSummary.propTypes = {
  subTotal: PropTypes.string,
  deliveryRate: PropTypes.string,
  delivaryLocation: PropTypes.string,
  totalPrice: PropTypes.string,
  handleChange: PropTypes.func,
  handleCheckout : PropTypes.func
};

export default OrderSummary;
