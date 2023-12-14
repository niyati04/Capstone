import { useState ,useEffect} from "react";
import Image from "../../Components/Image";
import backArrow from "../../assets/white_arrow.svg";
import OrderSummary from "../../Components/Order-Summary";
import "./delivery.css";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";
import { fetchCoupon } from "../../StateManagement/slicer/product/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Delivery() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let totalAmount = 0
  const [tabChange, setTabChange] = useState("Delivery details");
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    zcode: "",
    coupon: "",
  });


  useEffect(()=>{
    dispatch(fetchCoupon())
  },[])

  const {coupon} = useSelector((state) => state.product);
  const {getAllProductFromCart} = useSelector(state => state.product)

  console.log('coupon', coupon)
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
  const stepperData = [
    {
      stepperLabel: "Delivery details",
    },
    {
      stepperLabel: "Payment method",
    },
    {
      stepperLabel: "Review",
    },
  ];

  const handleChange = (e) => {
    console.log(e.target.value,"e.target.value")
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };


  const handleTab = (tabName) => {
    setTabChange(tabName);
  };

  const handleBack = () => {
    if (tabChange === "Payment method") {
      setTabChange("Delivery details");
    } else if (tabChange === "Review") {
      setTabChange("Payment method");
    }
  };

  const handleDeliveryDetails = () => {
    setTabChange("Payment method");
  };

  const handlePayment = () => {
    setTabChange("Review");
  };

  const handleSubmit = () => {
    navigate("/Home");
  };

  const handleCoupon = () => {
    console.log(userDetails,"handleCoupon")
    
    let data = coupon?.filter((data)=>{
     
      if(data?.coupon_code === userDetails?.coupon){
        toast.success("Coupon Code Applied", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }else{
        toast.error("Invalid Coupon Code", {
          position: toast.POSITION.TOP_RIGHT,
        });

      }
    }
    )
  }

  return (
    <section className="same_width_container margin_controller">
      <ToastContainer />
      {tabChange === "Delivery details" ? null : (
        <button className="back_arrow_btn" onClick={handleBack}>
          <Image
            src={backArrow}
            alt="backArrow"
            outsideClassName="backArrow_container"
          />
          Back
        </button>
      )}

      <div className="left_right_side_cart_containre">
        <div className="left_cart_container no_border padding_controller">
          <div className="three_steps_container">
            <ul className="step-wizard-list">
              {stepperData?.map((data, index) => {
                console.log('data', data)
                const tabName = data?.stepperLabel;
                return (
                  <li
                    key={index}
                    className="step-wizard-item current-item"
                    onClick={() => handleTab(tabName)}
                  >
                    <span className="progress-count" >{index + 1}</span>
                    <span className="progress-label">{data?.stepperLabel}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {tabChange === "Delivery details" && (
            <>
              <p className="header_of_tab">DELIVERY DETAILS</p>
              <div className="delivery_details_container">
                <Input
                  className="delivery_input"
                  label="First name"
                  id="fname"
                  type="text"
                  name="fname"
                  placeholder="Enter first name"
                  value={userDetails?.fname}
                  onChange={handleChange}
                />
                <Input
                  className="delivery_input"
                  label="Last name"
                  id="lname"
                  type="text"
                  name="lname"
                  placeholder="Enter last name"
                  value={userDetails?.lname}
                  onChange={handleChange}
                />
                <Input
                  className="delivery_input"
                  label="Email for order confirmation*"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={userDetails?.email}
                  onChange={handleChange}
                />
                <Input
                  className="delivery_input"
                  label="Phone no*"
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="Enter phone no."
                  value={userDetails?.phone}
                  onChange={handleChange}
                />
                <Input
                  className="delivery_input"
                  label="Pin / Postal code*"
                  id="zcode"
                  type="number"
                  name="zcode"
                  placeholder="Enter pin/postal code"
                  value={userDetails?.zcode}
                  onChange={handleChange}
                />
              </div>

              <button className="continue_btn" onClick={handleDeliveryDetails}>
                Continue
              </button>
            </>
          )}

          {tabChange === "Payment method" && (
            <>
              <p className="header_of_tab">PAYMENT METHOD</p>
              <div style={{ margin: "3rem 0 " }}>Coming soon</div>
              <button className="continue_btn" onClick={handlePayment}>
                Continue
              </button>
            </>
          )}

          {tabChange === "Review" && (
            <>
              <p className="header_of_tab">Review</p>
              <div style={{ margin: "3rem 0 " }}>Coming soon</div>
              <button className="continue_btn" onClick={handleSubmit}>
                SUBMIT
              </button>
            </>
          )}
        </div>
        <div className="right_cart_container">
          <div>
            <p>ORDER SUMMARY</p>
            <OrderSummary
              subTotal={totalAmount}
              deliveryRate={OrderSummaryData[0]?.deliveryRate}
              delivaryLocation={OrderSummaryData[0]?.delivaryLocation}
              totalPrice={totalAmount}
              handleChange={handleChange}
              handleCoupon={handleCoupon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
