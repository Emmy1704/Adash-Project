import Sidebar from "./sidebar";
import "../styles/dashboard.css";
import "../styles/noti.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Notifications = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className="noti">
        <div className="sidebarcontainer">
          <div className="sidebarmenu" onClick={toogleHamburger}>
            <Hamburger />
          </div>
          <Sidebar />
        </div>
        <div className="body">
          <section className="heading">
            <h2>Notifications</h2>
          </section>
          <div className="messages">
            <h3>Recent</h3>
            <ul>
              <li>
                <h4>Refer 10 people to get 500</h4>
                <a href="/">click to get started</a>
              </li>
              <li>
                <h4>
                  Guess what Adash is giving room for its customers to get
                  access to their fix account incase of emergency.
                </h4>
                <a href="/">Click for more details</a>
              </li>
              <li>
                <h4>you can download adash from your android or ios.</h4>
                <a href="/">Click for more details</a>
              </li>
              <li>
                <h4>Newer version of the app is available.</h4>
                <a href="/">
                  Click to install or upgrade to the latest version
                </a>
              </li>
              <li>
                <h4>kungya admin sent a message to the group</h4>
                <a href="/">click to open</a>
              </li>
              <li>
                <h4>You can now collect loan through the adash app</h4>
                <a href="/">click to get started</a>
              </li>
            </ul>
          </div>
        </div>
        <style js>{`
            @media (max-width: 1000px) {
               .sidebar {
                  display: ${hamburgerOpen ? "inline" : "none"};
                  width: ${hamburgerOpen ? "250px" : ""};
                  height: 50vh;
               }
               .sidebar .buttons {
                  height: 50%;
               }
               .sidebarmenu {
                  width: ${hamburgerOpen ? "250px" : ""};
                  background-color: ${hamburgerOpen ? "#ADAFF1" : ""}
               }
               .sidebarcontainer {
                  width: fit-content;
                  position: ${hamburgerOpen ? "fixed" : ""};
               }
            }
        `}</style>
      </div>
    </>
  );
};

export default Notifications;
