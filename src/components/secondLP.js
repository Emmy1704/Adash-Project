import "../style.css"
import invest from "../Images/invest.jpg";

const Second = () => {
  return (
    <>
      <div className="container-fluid second">
        <div className="l-top">
          <h1>ways to build your savings</h1>
          <p>we offer 5-15% interest on every investment</p>
        </div>
        <div className="invest">
          <img src={invest} alt="" />
        </div>
        <div className="cards">
          <div className="card-body one">
            <h5 className="card-title">Cooperative savings</h5>
            <p className="card-text direct">
              save your funds with other people for a duration of time either
              daily, weekly or monthly.
            </p>
            <a href="/" className="btn btn-primary">
              Adash groups
            </a>
          </div>
          <div className="card-body two">
            <h5 className="card-title">Fixed savings</h5>
            <p className="card-text direct">
              having a fixed account where you can lock your money without
              having access to it until the time frame elapse.
            </p>
            <a href="/" className="btn btn-primary">
              Adash fixed account
            </a>
          </div>
          <div className="card-body three">
            <h5 className="card-title">Flex account</h5>
            <p className="card-text direct">
              allows you to save, transfer and receive funds at anytime.
            </p>
            <a href="/" className="btn btn-primary">
              Flex account
            </a>
          </div>
          <div className="card-body four">
            <h5 className="card-title">Automated savings</h5>
            <p className="card-text direct ">
              gives you the ability to either save your money manually or
              automatically, as an individuals or as a team.
            </p>
            <a href="/" className="btn btn-primary">
              Automated savings
            </a>
          </div>
        </div>
        <button className="btn btn-danger">Start saving</button>
      </div>
    </>
  );
};

export default Second;
