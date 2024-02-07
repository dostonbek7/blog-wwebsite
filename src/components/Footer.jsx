import { footer, footerCards, footerText, icons, icon } from "./Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={footer}>
      <div className="container">
        <div className={footerCards}>
          <div className={footerText}>
            <h5>Finstreet 118 2561 Fintown</h5>
            <h5>Hello@finsweet.com 020 7993 2905</h5>
          </div>
          <div className={icons}>
            <a
              href="https://www.facebook.com
"
            >
             <FaFacebook className={icon}/>
            </a>
            <a
              href="https://twitter.com
"
            >
              <FaTwitter className={icon}/>
            </a>
            <a
              href="https://www.instagram.com
"
            >
              <FaInstagramSquare className={icon}/>
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedin className={icon}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
