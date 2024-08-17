import { useState } from "react";
import { Link } from "react-router-dom";
// interface SideNavbarProps {
//   li: [string, string, string][];
// }

// const SideNavbar: React.FC<SideNavbarProps> = ({ li }) => {
const SideNavbar = () => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };

  const list = [
    ["Home", "images/home.svg", "/"],
    ["Start Timer", "images/play.svg", "/timer"],
    ["Dashboard", "images/dashboard.svg", "/dashboard"],
    ["Time Tracker", "images/clock.svg", "/timeTracker"],
    ["Get Motivated", "images/motivation.svg", "/motivation"],
    ["My Profile", "images/profile.svg", "/myProfile"],
  ];

  return (
    <nav
      className="navbar-menu w-3/4 bg-white h-screen shadow-lg transition-all ease-in-out delay-75"
      style={{ width: window === false ? 300 : 100 }}
    >
      <div
        className="flex justify-end p-2 cursor-pointer"
        onClick={() => openClose()}
      >
        <img src="images/menu.svg" alt="burger" />
      </div>
      <ul className="list-none pt-3">
        {list.map((item: any, i: number) => (
          <div className="navbar__li-box pt-2 flex" key={i}>
            <Link to={item[2]}>
              <div className="p-3 inline-flex">
                <img
                  src={item[1]}
                  alt={item[1]}
                  style={{ paddingLeft: window === false ? 27 : 17   }}
                />
              </div>
              <div className="align-top pt-4 inline-flex">
              <li
                className="inline-block relative text-lg"
                style={{
                  display: window === false ? "inline-block" : "none",
                }}
              >
                {item[0]}
              </li>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavbar;
