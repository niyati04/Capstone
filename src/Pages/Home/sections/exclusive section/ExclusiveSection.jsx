import "./exclusive-slider-section.css";
import prodImg from "../../../../assets/prod2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWatchList,
  addProductToWishList,
  fetchProductDetails,
  fetchProductFromCart,
  sendForProductFilter,
} from "../../../../StateManagement/slicer/product/action";
import { useEffect, useState } from "react";
import { IS_COLOR } from "../../../../StateManagement/slicer/product/type";
import ProductView from "../../../../Components/ProductView/Index";

export default function ExclusiveSection() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [heartIcon, setHeartIcon] = useState(false);
  const { products } = useSelector((state) => state.product);


  
  useEffect(() => {
    dispatch(fetchProductFromCart());
    dispatch(sendForProductFilter());
  }, []);

  const handleProductDetails = (e, prod) => {
    e.stopPropagation();
    
    let data = {
      product_id: prod?.product_attr[0]?.product_id,
      sku: prod?.product_attr[0]?.sku,
    };
    dispatch({ type: IS_COLOR, response: prod?.product_attr[0]?.color_id });
    dispatch(fetchProductDetails(data, navigate));
  };

  const handleWishlist = (e, prod) => {
    e.stopPropagation();
    setHeartIcon(!heartIcon);
    let data = {
      product_id: prod?.product_attr[0]?.product_id,
      product_attr_id: prod?.product_attr[0]?.id,
      price: prod?.original_price,
      qty: 1,
    };
    dispatch(addProductToWishList(data, navigate));
  };

  function handleAddCart(e,prod) {
    e.stopPropagation();

    let data = {
      product_id: prod?.product_attr[0]?.product_id,
      product_attr_id: prod?.product_attr[0]?.id,
      price: prod?.original_price,
      qty: 1,
    };
 
    dispatch(addProductToWatchList(data, navigate));
  

  }

  return (
    <section className="same_width_container">
      <div className="exclusive_tshirt_slider_container">
        <p>EXCLUSIVE T-SHIRTS</p>

        <div className="subtitle_two_aerrow_container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing onsectetur
            adipisicing elit.
          </p>
        </div>
        <div className="resposive_product_container">
          {products?.product?.map((prod, index) => {
          {/* {productsData?.map((prod, index) => { */}
        
        
            return (
              <ProductView
                heartIcon={heartIcon}
                key={index}
                prodImg={prod?.product_attr[0]?.product_attr_img[0]?.image              } 
                // prodImg={prod?.image}

                prodType={prod?.casual_wear}
                prodName={prod?.name}
                prodPrice={prod?.original_price}
                prodMrpPrice={prod?.prodMrpPrice}
                handleProductDetails={(e) => handleProductDetails(e, prod)}
                handleWishlist={(e) => handleWishlist(e, prod)}
                handleAddCart={(e) => handleAddCart(e, prod)}
                // isHovered={isHovered}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
