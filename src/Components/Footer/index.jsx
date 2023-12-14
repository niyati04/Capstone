import './footer.css'
import sequenzLogo from '../../assets/tee_palette.png'
import { Link, useLocation } from 'react-router-dom';
export default function Footer() {
  const location = useLocation();


  if (location.pathname === '/SignUpPage' || location.pathname === '/') {
    return null; // Don't render the navbar
  }

  return (
    <div>
         <footer className="same_width_container footer_main_container">
        <div className="footer_logo_container">
          <img src={sequenzLogo} loading="lazy" alt="logo" />
        </div>
        <div className="footer_container">
          <div className="first_container">
            <p>CUSTOMER CARE</p>
            <a>Privacy & Policy</a>
            <Link to="/termsconditions">Terms & Condition</Link>
            <Link to="/Policy">Shiping Policy</Link>
            <Link to="/Refund">Refund Policy</Link>
            
          </div>
          <div className="first_container">
            <p>NAVIGATION</p>
            <Link to="/Home">Home</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/About">About Us</Link>
          </div>
          <div className="first_container">
            <p>SOCIAL MEDIA</p>
            <a><span><i className="fa fa-instagram" aria-hidden="true"></i>
            </span>clothes.store</a>
            <a><span><i className="fa fa-envelope-o" aria-hidden="true"></i>
            </span>clothes.store@gmail.com</a>
          </div>
          <div className="first_container">
            <p>CONTACT US</p>
            <a><span><i className="fa fa-map-marker" aria-hidden="true"></i>
            </span>2118 Thornridge Cir. Syracuse, Connecticut 35624</a>
            <a><span><i className="fa fa-phone" aria-hidden="true"></i>
            </span>+91 7979433378</a>
            
          </div>
          
        </div>
      </footer>
    </div>
  )
}
