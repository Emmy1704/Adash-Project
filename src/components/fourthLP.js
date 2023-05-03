import "../style.css";
import testimonial from "../Images/testimonial.jpg";

const Fourth = () => {
  return (
    <>
      <div className="fourth">
        <div className="image">
          <img src={testimonial} alt="" />
        </div>
        <div className="article">
          <h2>Testimonials</h2>
          <h3>Our client say</h3>
          <div className="date">
            <svg
              xmlnsname="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-chat-right-quote-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM7.194 4.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 0 1-.612.01.405.405 0 0 1-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 0 1-.613.01.405.405 0 0 1-.011-.59c.42-.416.672-.831.81-1.22z" />
            </svg>
            <p>17 march 2023</p>
          </div>
          <div className="writing">
            <p>
              Using adash has been one of the best decision have ever made while
              investing my funds, i use to have problem of keeping my money for
              a longer period of time without touching it but i always fail. but
              after using the adash fix saving i have been able to keep my money
              fr long and it really help me a lot, thanks adash for the great
              help.
            </p>
            <h4>Mr Bash</h4>
            <p className="work">Manager of Nhub</p>
          </div>
          <div className="extra">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="blue"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            <div className="seemore">
              See more
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="red"
                  className="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
