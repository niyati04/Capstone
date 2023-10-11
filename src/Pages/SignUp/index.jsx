import { useState } from "react";
import Input from "../../Components/Input";
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../../assets/google.png";
import fbImg from "../..//assets/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import { requestUserForRegister, requestUserForOtp } from "../../StateManagement/slicer/auth/action";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [otp, setOtp] = useState("");
  const [otpMsg, setOtpMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [re, setRe] = useState("");
  const [reMsg, setReMsg] = useState("");

  const { visibleinput ,otpValue} = useSelector((state) => state.auth);


  function handleChange(e) {

    if (e.target.name === "email") {
      setEmail(e.target.value);
      // if (e.target.value === "") {
      //   setEmailMsg("Please enter email");
      // } else {
      //   setEmailMsg("");
      // }
    }
    if (e.target.name === "otp") {
      setOtp(e.target.value);
      if (e.target.value === "") {
        setOtpMsg("Please enter otp");
      } else {
        setOtpMsg("");
      }
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      if (e.target.value === "") {
        setPasswordMsg("Please enter password");
      } else {
        setPasswordMsg("");
      }
    }

  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!visibleinput) {

      dispatch(requestUserForOtp(email))
    } else {
      dispatch(requestUserForRegister({ email, otp, password }, navigate))
    }


  }


  return (
    <div className="login_page_container">
      <div className="left_side_login_page_container"></div>
      <div className="right_side_login_page_container">
        <div>
          <p>Sign Up</p>
          <ToastContainer/>
          <form onSubmit={handleSubmit} className="form_login_container">
         
            <Input
              label="Email"
              id="email"
              type="email"
              name="email"
              placeholder="Enter name"
              onChange={handleChange}
            />
            <span className="error_msg">{emailMsg}</span>
            {visibleinput ?
              <>
                <Input

                  label="OTP"
                  id="otp"
                  type="otp"
                  name="otp"
                  placeholder="Enter otp"
                  onChange={handleChange}
                />
               {otpValue ?  <span className="error_msg">enter OTP : -{otpValue}</span> : null}

                <span className="error_msg">{otpMsg}</span>

                <Input

                  id="pwd"
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                />
                <span className="error_msg">{passwordMsg}</span>
                <Input
                  htmlFor="repwd"
                  id="repwd"
                  label="Re-Password"
                  type="password"
                  placeholder="Enter re-password"
                  className="width_half_container"
                  name="repassword"
                  onChange={(e) => {
                   
                    if (password !== e.target.value) {
                      setRe(e.target.value)
                      setReMsg("Password not match e")
                    } else if (password === e.target.value) {
                     
                      setReMsg("")
                      
                    }
                  }}
                />
              </>
              : null}

            <span className="error_msg">{reMsg}</span>

            <div className="checkbox_forgot_container checkbox_forgot_container1">
              <div>
                <input
                  type="checkbox"
                  id="keep"
                  name="keepMeLogIn"
                  value="Bike"
                />
                <label htmlFor="keep">Keep me logged in</label>
                <br />
              </div>
              <a href="#" target="blank">
                Forgot password?
              </a>
            </div>

            <button>Log in</button>
          </form>
          <div className="extra_content_login_container">
            <p>
              Already have an account? <Link to="./SignUpPage">Sign In</Link>
            </p>

            <div className="or_with_container">
              <div></div>
              <span>or continue with</span>
              <div></div>
            </div>

            <div className="btn_log_in_container">
              <button>
                <img src={googleImg} alt="google" loading="lazy" />
              </button>
              <button>
                <img src={fbImg} alt="facebook" loading="lazy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
