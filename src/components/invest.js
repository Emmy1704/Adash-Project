import "../styles/dashboard.css";
import Sidebar from "./sidebar";

const Invest = () => {
  return (
    <>
      <div className="investment">
        <Sidebar />
        <div className="body">
          <h2 id="top">Invest</h2>
          <div className="inside">
            <div className="expect">
              <h3>Expectations</h3>
              <h2>
                Up to 20%{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#300444"
                  className="bi bi-graph-up-arrow"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                  />
                </svg>
              </h2>
              <h3>per annum</h3>
            </div>
            <div className="balance">
              <h3>Total balance</h3>
              <h2>
                150,000.<span>00</span>
              </h2>
            </div>
            <div className="setup">
              <h2>
                Account Setup{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </h2>
              <button>start</button>
            </div>
            <div className="start">
               <div className="top">
                  <h3 className="sps">My investment</h3>
                  <h3>Explore</h3>
                  <h3>Completed</h3>
               </div>
               <div className="main">
                  <h2>Start investing</h2>
                  <button>Invest now</button>
                  <button>Learn more</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invest;
