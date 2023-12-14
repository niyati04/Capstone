import { useState, useEffect } from "react";
import HeroSection from "./sections/hero section/HeroSection";
import ExclusiveSection from "./sections/exclusive section/ExclusiveSection";
import MarqueeSlider from "../../Components/MarqueeSlider/index";
import ReviewSection from "./sections/review section/ReviewSection";
import ContactUs from "../../Components/Contact-Us";


import posterImg1 from "../../assets/hero_img1.jpg";
import posterImg2 from "../../assets/hero_img.png";
import { addProductToWishList, fetchCategory, fetchProductFromWishList, fetchSize, sendForProductFilter } from "../../StateManagement/slicer/product/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Loader from "../../Components/Loader";


export default function Home() {

  let dispatch = useDispatch()


  useEffect(()=>{
    dispatch(sendForProductFilter())
     dispatch(fetchCategory())
     dispatch(fetchSize())
    
  },[])




 
  const allPosterData = [
    {
      posterImgName: posterImg1,
    },
    {
      posterImgName: posterImg2,
    },
  ];

  async function handlesend() {
    let data ={
      product_id:1,
      product_attr_id:1,
    }
   
    dispatch(addProductToWishList(data))

   

    }

  return (
    <>
      {/* <button onClick={handlesend}>meet</button> */}
     
      <ToastContainer />
          <HeroSection allPosterData={allPosterData} />
        
          <MarqueeSlider />

          {/* <!-- exclusive section --> */}
          <ExclusiveSection />
          {/* <!-- exclusive section end --> */}

          <MarqueeSlider />

          {/* <!-- best seller section --> */}
          <ExclusiveSection />
          {/* <!-- best seller section end --> */}

          <ReviewSection />

          <ContactUs />

          <MarqueeSlider />
    </>
  );
}
