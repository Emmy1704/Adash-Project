import "../style.css"
import play from "../Images/playstore.png";
import apple from "../Images/iphone.png";

import rImage from "../Images/josh-appel-NeTPASr-bmQ-unsplash.jpg";
import lImage from "../Images/Savings.jpg";
import shield from "../Images/shield.jpeg";

const First = () => {
  return (
    <>
      <div className="container-fluid first">
        <div className="l-top">
          <h1>Better, safe and reliable way to invest.</h1>
          <p>
            Adash helps a lot of individuals, traders and cooperative society to
            save and invest their funs with ease and full security.
          </p>
          <div className="get">
            <a href="https://www.applestore.com">
              <img className="iphone" src={apple} alt="" />
            </a>
            <a href="https://www.playstore.com">
              <img src={play} alt="" />
            </a>
          </div>
        </div>
        <div className="r-image">
          <img src={rImage} alt="" />
        </div>
        <div className="black-box one"></div>
        <div className="black-box two"></div>
        <div className="l-image">
          <img src={lImage} alt="" />
        </div>
        <div className="shield">
          <img src={shield} alt="" />
          <article>
            <h2>Your security is our top priority</h2>
            <p>
              Adash uses the best internet security to secure its customers
              funds, and all customers information are encrypted.
            </p>
          </article>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default First;
