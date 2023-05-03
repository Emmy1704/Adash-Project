import "../styles/dashboard.css";
import Sidebar from "./sidebar";

const Accounts = () => {
  return (
    <>
      <div className="accounts">
        <Sidebar />
        <div className="body">
          <h2>Savings</h2>
          <div className="inside">
            <div className="balance">
               <h2>Total balance</h2>
               <h3>&#8358; 5,000.<span>00</span></h3>
            </div>
            <div className="fixed">
               <h2>Fixed Savings</h2>
               <p>Save your money here for a long period of time without touching it and get 5% interest.</p>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
            </div>
            <div className="flex">
               <h2>Flex account</h2>
               <p>save your money here and get access to it at anytime.</p>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
            </div>
            <div className="wallet">
               <h2>Adash wallet</h2>
               <p>Allows you to save your money automatically, either daily, weekly or monthly.</p>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
