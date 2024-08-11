import React, { useState } from "react";
interface SideNavbarProps {
    li: [string, string][];
  }

const SideNavbar: React.FC<SideNavbarProps> = ({ li }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };

  let clickMenu = () => {
    
  }

  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 100 }}>
      <div className="burger" onClick={() => openClose()}>
      <img src="images/menu.svg" alt="burger" />
      </div>
      <ul className="navbar__list">
        {li.map((item: any, i: number) => (
          <div className="navbar__li-box" key={i} onClick={() => clickMenu()}>
            <img
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavbar;
