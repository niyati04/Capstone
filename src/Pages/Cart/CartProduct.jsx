import PropTypes from "prop-types";
import "./cart.css";
import Image from "../../Components/Image";
import prodImg from "../../assets/cart_prod_img.png";

function CartProduct(props) {

  return (
    <div className="cart_container">
      <div className="img_prod_details_container">
        <Image
          src={prodImg}
          alt="prodImg"
          outsideClassName="prod_img_container"
        />
        <div>
          <p>{props?.prodName}</p>
          <p>₹&nbsp; {props?.prodPrice}</p>
          <p>
            Size &nbsp;:<span>{props?.prodSize}</span>
          </p>
          <p>
            Color &nbsp;:<label>{props?.prodColor}</label>
          </p>
        </div>
      </div>
      <div className="plus_minus_remove_btn_container">
        <div>
          <button onClick={props.handleAdd}>+</button>
          <span>{props.count}</span>
          <button onClick={props.handleLess}>-</button>
        </div>
        <button className="remove_btn" onClick={props.handleRemove}>REMOVE CART</button>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  prodName: PropTypes.string,
  prodPrice: PropTypes.string,
  prodSize: PropTypes.array,
  prodColor: PropTypes.array,
  handleAdd: PropTypes.func,
  count: PropTypes.number,
  handleLess: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default CartProduct;
