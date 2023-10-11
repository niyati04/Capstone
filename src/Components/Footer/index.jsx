import './footer.css'
import sequenzLogo from '../../assets/the_sequenz_logo.png'
export default function Footer() {
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
            <a>Terms & Condition</a>
            <a>Shiping Info & Return</a>
            <a>FAQ</a>
            
          </div>
          <div className="first_container">
            <p>NAVIGATION</p>
            <a>Home</a>
            <a>Shop</a>
            <a>Contact Us</a>
            <a>About Us</a>
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
