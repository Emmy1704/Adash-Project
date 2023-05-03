import Sidebar from "./sidebar";
import "../styles/dashboard.css";

const Notifications = () => {
  return (
    <>
      <div className="noti">
        <Sidebar />
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
      </div>
    </>
  );
};

export default Notifications;
