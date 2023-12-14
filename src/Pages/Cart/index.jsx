import { useState,useEffect } from "react";
import "./cart.css";
import Image from "../../Components/Image";
import prodImg from "../../assets/cart_prod_img.png";
import backArrow from "../../assets/white_arrow.svg";
import CartProduct from "./CartProduct";
import OrderSummary from "../../Components/Order-Summary";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWatchList, fetchProductFromCart, removeProductFromCart } from "../../StateManagement/slicer/product/action";

export default function Cart() {
  let dispatch = useDispatch()
  let totalAmount = 0
  useEffect(() => {
  dispatch(fetchProductFromCart())
  } , [])

  const {getAllProductFromCart} = useSelector(state => state.product)
  
  
  function callTotalAmount(){
    for(let i=0;i<getAllProductFromCart.length;i++){
      let convert = parseInt(getAllProductFromCart[i]?.price) * parseInt(getAllProductFromCart[i]?.qty)
      totalAmount += convert
    }
  }

  callTotalAmount()

  const OrderSummaryData = [
    {
      subTotal: "1699",
      deliveryRate: "FREE",
      delivaryLocation: "Surat,Gujarat,India",
      totalPrice: "1699",
    },
  ];

  const navigate = useNavigate()
  const handleAdd = (e) => {
    let count = parseInt(e?.qty) + 1
    let data = {
      product_id: e?.product_id,
      product_attr_id: e?.product_attr_id,
      price: e?.price,
      qty:count ,
    };
 
    dispatch(addProductToWatchList(data));
  };

  const handleLess = (e) => {
    
    let count = parseInt(e?.qty) - 1
    let data = {
      product_id: e?.product_id,
      product_attr_id: e?.product_attr_id,
      price: e?.price,
      qty:count ,
    };
 
    dispatch(addProductToWatchList(data));
 
  };

  

  const handleBack = ()=>{
    navigate(-1)
  }

  const handleCheckout = ()=>{
    navigate("/Delivery")
  }

  const handleRemove = (id) => {
   
    dispatch(removeProductFromCart(id))

  };
  return (
    <section className="same_width_container">
      <div className="btn_left_right_container">
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
            <p>MY CART</p>
            {getAllProductFromCart.length > 0 ? getAllProductFromCart?.map((prod, index) => {
              let sizeExtract = prod?.prodSize?.map((num) => num?.sizeName);

              let colorExtract = prod?.prodColor?.map((col) => "red");

              return (
                <CartProduct
                   key={index}
                  prodName="prod?.name"
                  prodPrice={prod?.price}
                  prodSize="30"
                  prodColor="green"
                  handleAdd={()=>handleAdd(prod)}
                  handleRemove={()=>handleRemove(prod?.id)}
                  handleLess={()=>handleLess(prod)}
                  count={prod?.qty}
                />
              );
            }) : 
            <div className="d-flex justify-content-center align-items-center">
              <p>No Product Found</p>
            </div>

            
            }
          </div>
          <div className="right_cart_container">
            <div>
              <p>ORDER SUMMARY</p>
              
              <OrderSummary
                subTotal={totalAmount}
                deliveryRate={OrderSummaryData[0]?.deliveryRate}
                delivaryLocation={OrderSummaryData[0]?.delivaryLocation}
                totalPrice={totalAmount}
                handleCheckout={handleCheckout}
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
