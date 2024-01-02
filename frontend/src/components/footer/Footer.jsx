import "./footer.css";
import image from "../../assets/KNN.png";
import flag from "../../assets/fevicon.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-col">
          <img src={image} alt="logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            fugiat debitis quo nisi libero, est ipsa repellendus molestias quas
            perspiciatis odio nulla laboriosam minus accusantium, quisquam
            dolores temporibus. Nisi, placeat!
          </p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">profile</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Socials</h3>
          {/* <ul className="social-links">
        <li><a href="#"><img src={Facebook} alt="" /></a></li>
        <li><a href="#"><img src={twitter} alt="" /></a></li>
        <li><a href="#"><img src={telegram} alt="" /></a></li>
      </ul> */}
          <ul className="social-links">
            <li>
              <a href="#">
                <span>
                  <FacebookIcon />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <TwitterIcon />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <TelegramIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        © 2023 kinin.net All Rights Reserved by Estifanos.
        <span>
          Made by <i className="fas fa-heart"></i> Febtechdynamics LLC
        </span>
        <img className="img" src={flag} alt="flag" />
      </div>
    </footer>
  );
};

export default Footer;
