import { useEffect, useState } from "react";
import Image from "../../Components/Image";
import downArrow from "../../assets/down_arrow.svg";
import "./shop-page.css";
import ExclusiveSection from "../Home/sections/exclusive section/ExclusiveSection";
import prodImg from "../../assets/prod2.png";
import ContactUs from "../../Components/Contact-Us";
import MarqueeSlider from '../../Components/MarqueeSlider'
import { useDispatch, useSelector } from "react-redux";
import { addProductToWatchList, addProductToWishList, fetchProductDetails, sendForProductFilter } from "../../StateManagement/slicer/product/action";
import Loader from "../../Components/Loader";
import { IS_COLOR } from "../../StateManagement/slicer/product/type";
import { useNavigate } from "react-router-dom";
import ProductView from "../../Components/ProductView/Index";
import { ToastContainer } from "react-toastify";


export default function Shop() {
  let dispatch = useDispatch()
  const navigate = useNavigate()
  const [showSortBy, setShowSortBy] = useState(false);
  const {products,isLoading} = useSelector(state => state.product)
  const [productList,setProductList] = useState([])
  const [heartIcon, setHeartIcon] = useState(false);


  

  useEffect(()=>{
    dispatch(sendForProductFilter())
  },[])


  useEffect(()=>{
    if(products?.product){
    setProductList(products)
  }
  },[products])

  
  const sortByOpt = [
    {
      sortName: "Popularity",
    },
    {
      sortName: "Price -- Low to High",
    },
    {
      sortName: "Price -- High to Low",
    },
    {
      sortName: "Newest First",
    },
  ];

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

 
  const handleProductDetails = (e,prod) => {
    e.stopPropagation();
    let data={
      product_id:prod?.product_attr[0]?.product_id,
      sku:prod?.product_attr[0]?.sku,
     
    }
    dispatch({type:IS_COLOR,response :prod?.product_attr[0]?.color_id})
    dispatch(fetchProductDetails(data,navigate))
 

  }

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

  const handleSort = (e) => {
    if(e?.sortName==="Price -- High to Low"){
      let sortedList = productList?.product?.sort((a,b)=>b?.original_price-a?.original_price)
      setProductList({...productList,product:sortedList})
    }else if(e?.sortName==="Price -- Low to High"){
      let sortedList = productList?.product?.sort((a,b)=>a?.original_price-b?.original_price)
      setProductList({...productList,product:sortedList})
    }
  };
  return (
    <div>
      {/* {isLoading ? <Loader /> : null } */}
      <ToastContainer />
      <section>
        <div className="border_for_sorttype_container">
          <div className="same_width_container no_margin sortby_title_count_container">
            <div>
              <p>ALL T-SHIRTS</p>
              <span>{products?.total}</span>
            </div>

            <div className="shop_sortby_opt_container">
              <button onClick={() => setShowSortBy(!showSortBy)}>
                <p>Sort By</p>
                <Image
                  src={downArrow}
                  alt="cartImg"
                  outsideClassName={
                    showSortBy
                      ? "cartImg_container_rotate cartImg_container"
                      : "cartImg_container"
                  }
                />
              </button>
              <div
                className={
                  showSortBy ? "opt_container " : "opt_container no_border"
                }
              >
                {showSortBy &&
                  sortByOpt?.map((item, index) => {
                    return (
                      <button key={index} onClick={()=>handleSort(item)}>
                        {item?.sortName}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="shop_prods_container same_width_container no_margin">
          {products?.product?.map((prod, index) => {
            console.log('prod', prod)
            return (
              <ProductView
              heartIcon={heartIcon}
              key={index}
              prodImg={prod?.product_attr[0]?.product_attr_img[0]?.image              } 
              prodType={prod?.casual_wear}
              prodName={prod?.name}
              prodPrice={prod?.original_price}
              prodMrpPrice={prod?.prodMrpPrice}
              handleProductDetails={(e) => handleProductDetails(e, prod)}
                handleWishlist={(e) => handleWishlist(e, prod)}
                handleAddCart={(e) => handleAddCart(e, prod)}

              />
            );
          })}
        </div>

        <ContactUs />

        <MarqueeSlider />
      </section>
    </div>
  );
}
