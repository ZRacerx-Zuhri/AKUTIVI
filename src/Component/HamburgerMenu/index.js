import { useState, useEffect } from "react";

const HamburgerMenu = (props) => {
  const [toggle, SetToggle] = useState(false);

  useEffect(() => {
    props.toggleNav(toggle);
  }, [toggle, props]);

  return (
    <div
      onClick={() => SetToggle(!toggle)}
      className={`container-menu-btn ${toggle ? "open" : ""}`}
    >
      <div className="menu-btn__burger"></div>
      <div className="menu-btn__burger"></div>
      <div className="menu-btn__burger"></div>
    </div>
  );
};

export default HamburgerMenu;
