import IconIg from "../../assets/images/Ig.webp";
import IconYoutube from "../../assets/images/youtube.png";

const Footer = () => {
  // console.log(new Date().getFullYear());
  return (
    <div className="container-footer">
      <div className="conten-footer">
        <div className="footer-title">
          <a href="https://akutivi.com" target="_blank" rel="noreferrer">
            © {new Date().getFullYear()}- akutivi.com
          </a>
        </div>
        <div className="footer-nav-icon">
          <a
            href="https://www.instagram.com/akutivi"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="logo-akutivi" src={IconIg} />
          </a>
          <a
            href="https://www.youtube.com/c/akutivi"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="logo-akutivi" src={IconYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
