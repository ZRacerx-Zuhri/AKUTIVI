import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import IconIg from "../../assets/images/Ig.webp";
import IconYoutube from "../../assets/images/youtube.png";
import { forwardRef } from "react";
import HamburgerMenu from "../HamburgerMenu";

const Header = forwardRef((props, ref) => {
  const [Open, SetOpen] = useState(false);

  return (
    <div className="header" ref={ref}>
      <div className={`header-container ${Open ? "open-menu" : ""}`}>
        <Link to="/">
          <img alt="logo-akutivi" src={Logo} className="header-logo" />
        </Link>

        <div className="header-nav">
          <div className="menu-nav">
            <Link to="/">Home</Link>
            <Link to="/Fashion">Fashion</Link>
            <Link to="/EcoLife">Eco Life</Link>
            <Link to="/Family">Family</Link>
            {/* <Link to="/Education">Education</Link> */}
          </div>
          <div className="header-nav-icon">
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

        <HamburgerMenu toggleNav={SetOpen} />
      </div>
    </div>
  );
});

export default Header;
