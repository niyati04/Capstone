import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./login.css";
import Input from "../../Components/Input";
import googleImg from "../../assets/google.png";
import fbImg from "../..//assets/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { requestUserForLogin } from "../../StateManagement/slicer/auth/action";


export default function LoginPage() {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMsg, setEmailMsg] = useState("")
  const [passwordMsg, setPasswordMsg] = useState("")




  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setEmailMsg("")
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      setPasswordMsg("")
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    if (!email) {
      setEmailMsg("please enter email")
    } else if (!password) {
      setPasswordMsg("please enter password")
    } else {
      dispatch(requestUserForLogin(data,navigate))
    }

  }
  return (
    <div>
      <div className="login_page_container">
        <div className="left_side_login_page_container"></div>
        <div className="right_side_login_page_container">
          <div>
            <p>Login</p>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="form_login_container">
              <Input
                label="Email"
                id="email"
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
              <p
                style={{ color: "red", fontSize: "12px", textAlign: "center" }}
              >{emailMsg}</p>

              <Input
                label="Password"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
              <p
                style={{ color: "red", fontSize: "12px", textAlign: "center" }}
              >{passwordMsg}</p>

              <div className="checkbox_forgot_container">
                <div>
                  <input
                    type="checkbox"
                    id="keep"
                    name="keepMeLogIn"
                    value="keep"
                  />
                  <label htmlFor="keep">Keep me logged in</label>
                  <br />
                </div>
                <a>Forgot password?</a>
              </div>

              <button>Log in</button>
            </form>
            <div className="extra_content_login_container">
              <p>
                Don't have an account? <Link to="/SignUpPage">Sign Up</Link>
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
    </div>
  );
}
