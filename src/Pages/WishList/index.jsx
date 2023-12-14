import { useState,useEffect } from "react";
import "./cart.css";
import Image from "../../Components/Image";
import prodImg from "../../assets/cart_prod_img.png";
import backArrow from "../../assets/white_arrow.svg";
import CartProduct from "./WishList";
import OrderSummary from "../../Components/Order-Summary";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWatchList, fetchProductFromWishList, removeProductFromWishList } from "../../StateManagement/slicer/product/action";
import { ToastContainer } from "react-toastify";
export default function WishList() {
  let dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchProductFromWishList())
  } , [])

  const {getAllProductFromWishhList} = useSelector(state => state.product)
  
 

  const navigate = useNavigate()
  const [addCount, setAddCount] = useState(0);

  const handleAdd = () => {
    setAddCount((count) => count + 1);
  };

  const handleLess = () => {
    if (addCount > 0) {
      setAddCount((count) => count - 1);
    }
  };

  

  const handleBack = ()=>{
    navigate(-1)
  }


  const handleAddToCart = (prod) => {
   
    let data = {
      product_id: prod?.product_id,
      product_attr_id: prod?.id,
      price: prod?.product_att?.product?.original_price      ,
      qty: 1,
    };
 
    // console.log('data', data)
    dispatch(addProductToWatchList(data));

    handleRemoveToCart(prod)
    

  };

  function handleRemoveToCart(prod) {

    dispatch(removeProductFromWishList(prod?.id));
  }

  return (
    <section className="same_width_container">
      <div className="btn_left_right_container">
      <ToastContainer  autoClose={1000} />
        <button onClick={handleBack}>
          <Image
            src={backArrow}
            alt="backArrow"
            outsideClassName="backArrow_container"
          />
          Back
        </button>
        <div className="left_right_side_cart_containre">
          <div className="left_cart_container">
            <p>MY WISH LIST</p>
            {getAllProductFromWishhList.length > 0 ? getAllProductFromWishhList?.map((prod, index) => {
              let sizeExtract = prod?.prodSize?.map((num) => num?.sizeName);

              let colorExtract = prod?.prodColor?.map((col) => "red");

              return (
                <CartProduct
                   key={index}
                  prodName={prod?.product_att?.product?.name}
                  prodPrice={prod?.product_att?.product?.original_price}
                  prodSize="30"
                  prodColor="green"
                  handleAdd={handleAdd}
                  handleAddToCart={()=>handleAddToCart(prod)}
                  handleLess={handleLess}
                  count={addCount}
                  handleRemoveToCart={()=>handleRemoveToCart(prod)}
                />
              );
            }) : 
            <div className="d-flex justify-content-center align-items-center">
              <p>No Wish List Found</p>
            </div>

            
            }
          </div>
        
        </div>
      </div>
    </section>
  );
}
