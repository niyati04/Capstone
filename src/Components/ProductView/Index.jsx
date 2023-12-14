import PropTypes from "prop-types";
import { useState } from "react";
import borderHeart from "../../assets/heart-border.svg";
import fillHeart from "../../assets/heart-fill.svg";

function ProductView({ heartIcon, ...props }) {
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="product_img_details_container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="product_img_container"
        onClick={(e) => props.handleProductDetails(e)}
      >
        <button onClick={(e) => props.handleWishlist(e)}>
          <img
            src={heartIcon === true ? fillHeart : borderHeart}
            alt="wishlish-icon"
            loading="lazy"
          />
        </button>
        <img src={props.prodImg} loading="lazy" alt="productImg" />
        {isHovered && (
          <button className="add_cart_btn" onClick={(e)=>props.handleAddCart(e)}>
            Add to cart
          </button>
        )}
      </div>
      <div className="product_details_container">
        <p>{props.prodType}</p>
        <p>{props.prodName}</p>
        <p>
          ₹ {props.prodPrice} <label>₹ {props.prodMrpPrice}</label>
        </p>
      </div>
    </div>
  );
}
ProductView.propTypes = {
  prodType: PropTypes.string,
  prodImg: PropTypes.string,
  prodName: PropTypes.string,
  prodPrice: PropTypes.string,
  prodMrpPrice: PropTypes.string,
  handleProductDetails: PropTypes.func,
  handleWishlist: PropTypes.func,
  handleAddCart: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  hoverStyle: PropTypes.any,
  isHovered: PropTypes.bool,
  heartIcon: PropTypes.bool,
};
export default ProductView;
