import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import star from "../../assets/Star.png";
import profile from "../../assets/Profile.png";
import profile2 from "../../assets/Profile2.png";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWishList, fetchParticularProductDetails } from "../../StateManagement/slicer/product/action";
import Loader from "../../Components/Loader";
import { IS_COLOR } from "../../StateManagement/slicer/product/type";
import { ToastContainer } from 'react-toastify';

const Product = () => {


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {productDetails,isLoading,isColor} = useSelector(state => state.product)
  console.log('productDetails', productDetails)




  const handleCart = (item)=>{
  
    let data ={
      product_id:item?.data?.product_id,
      product_attr_id:item?.data?.product_attr_img[0]?.product_attr_id,
    }
    dispatch(addProductToWishList(data))
  }

  const handleForColorDetails = (item)=>{

    let data = {
      product_id:item?.product_id,
      sku:item?.sku,
    }
    dispatch({type:IS_COLOR,response:item?.color_id})
    dispatch(fetchParticularProductDetails(data,navigate))
  }

    

  return (
    <div className="main">
     {isLoading ?  <Loader /> : null}
      <ToastContainer />
      <div className="box-grid">
        <img src={image1} />
        <div className="sub-contianer1">
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
        </div>
        <div className="sub-contianer2">
          <h3>Oversized</h3>
          <h1>{productDetails?.data?.product?.name}
            {/* Oversized T-shirt Black <br />
            Model no 145678-MSUW */}
          </h1>
          <div className="sub-sub-container2">
            <div className="review-column">
              <img src={star} />
              <span>4.5/5</span>
              <span>(25 Reviews)</span>
            </div>
            <div>
              <button>Share</button>
            </div>
          </div>
          <div className="dashed-line"></div>
          <div>
            <h3>Color</h3>
            <div className="review-column">
          
              {
                productDetails?.variations?.map((data,index)=>{
                  
                
                  return(
                    <div style={{borderWidth:'3px',borderColor:`${data?.color_id === isColor ? "yellow" : "transparent"}`,borderStyle:'solid'}} key={index}>
                    <div style={{backgroundColor:data?.color?.color,height:'50px',width:'50px',display:'flex',justifyContent:'center',alignItems:'center',margin:'10px'}} 
                    onClick={()=>handleForColorDetails(data)}
                    >
                      <div className="color-box"></div>
                      <span>{data?.color?.name}</span>
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="sub-container3">
          <div className="review-column">
            <h3>Size</h3>
            <h3>Size Chart</h3>
          </div>
          <div className="size-box">
            {
              productDetails?.data?.product_attr_multi_size
              ?.map((data,index)=>{
                return(
                  <div className="boxx" key={index}>{data?.size}</div>
                )
              }
              )
            }
          </div>
        </div>
        <div className="sub-container4">
          <h3>Description</h3>
          <p>{productDetails?.data?.product?.description}
          </p>
          <h3>Product details</h3>
          <div>
            <p>{productDetails?.data?.product?.casual_wear}</p>
            <p>100% ployster</p>
            <p>Country origin : India</p>
            <p>Machine wash</p>
          </div>
        </div>
        <div className="sub-container8">
          <div style={{ display: "flex" }}>
            <h2>₹ {productDetails?.data?.product?.original_price}</h2>
            <h5>₹ {productDetails?.data?.product?.original_price}</h5>
          </div>
          <button style={{ marginLeft: "350px" }} onClick={()=>handleCart(productDetails)}>ADD TO CART</button>
        </div>
        <div className="sub-container6">
          <h3>Return & Refund Policy</h3>
          <div>
            <p>This product is in no-refund policy.</p>
            <p>
              Exchange within 24 hours of delivery for size/quality issues
              <br />
              or damaged products.
            </p>
          </div>
        </div>
        <div className="sub-container7">
          <h3>Shipping info</h3>
          <div>
            <p>
              Please expect delivery of the product within 7 to 10 business days
              after order confirmation.
            </p>
          </div>
        </div>
        <div className="sub-container5">
          <h3>Review</h3>
          <div className="sub-container5-profile">
            <img src={profile} alt="" />
            <div>
              <h3>Brooklyn Simmons</h3>
              <h6>4.5 / 5</h6>
            </div>
            <p>25/10/2023</p>
          </div>
          <p>
            “ Made from organic cotton, this shirt is loosely knit for an airy
            feel which goes well with its relaxed silhouette. The garment-dye
            process also gives the tee more character. We prefer the
            straight-hemmed Slub Classic Pocket Tee. It has a great hand and
            tons of slubby texture to distance itself from the undershirt fare.
            It's made in LA and comes i “
          </p>
          <h3>Review</h3>
          <div className="sub-container5-profile">
            <img src={profile2} alt="" />
            <div>
              <h3>Jenny Wilson</h3>
              <h6>4.5 / 5</h6>
            </div>
            <p>25/10/2023</p>
          </div>
          <p>
            “ Made from organic cotton, this shirt is loosely knit for an airy
            feel which goes well with its relaxed silhouette. The garment-dye
            process also gives the tee more character. We prefer the
            straight-hemmed Slub Classic Pocket Tee. It has a great hand and
            tons of slubby texture to distance itself from the undershirt fare.
            It's made in LA and comes i “
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
