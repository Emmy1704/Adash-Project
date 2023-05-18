import Sidebar from "./sidebar";
import "../styles/grp.css";
import "../styles/dashboard.css";

const Grpone = () => {
  const openMP = () => {
    document.getElementById("ps").style.display = "none";
    document.getElementById("mp").style.display = "block";
    document.getElementById("au").style.display = "none";
  };
  const openPS = () => {
    document.getElementById("ps").style.display = "block";
    document.getElementById("mp").style.display = "none";
    document.getElementById("au").style.display = "none";
  };
  const openAU = () => {
    document.getElementById("ps").style.display = "none";
    document.getElementById("mp").style.display = "none";
    document.getElementById("au").style.display = "block";
  };

  return (
    <>
      <div className="grpOne">
        <Sidebar />
        <div className="body">
          <div className="mainContent">
            <div className="ps" id="ps">
              <div className="one">
                <h2>Payment schedule</h2>
              </div>
              <div className="two">
                <section>
                  <p className="money">January</p>
                  <p>Benedict</p>
                </section>
                <section>
                  <p>February</p>
                  <p>Stephen</p>
                </section>
                <section>
                  <p>March</p>
                  <p>Gabriel</p>
                </section>
                <section>
                  <p>April</p>
                  <p>Peter</p>
                </section>
                <section>
                  <p>May</p>
                  <p>Samson</p>
                </section>
                <section>
                  <p>June</p>
                  <p>Terry</p>
                </section>
                <section>
                  <p>July</p>
                  <p>David</p>
                </section>
                <section>
                  <p>August</p>
                  <p>Jesse</p>
                </section>
                <section>
                  <p>September</p>
                  <p>Caleb</p>
                </section>
                <section>
                  <p>October</p>
                  <p>Gift</p>
                </section>
                <section>
                  <p>November</p>
                  <p>Jessica</p>
                </section>
                <section>
                  <p>December</p>
                  <p>Elyon</p>
                </section>
              </div>
              <div className="three">
                <button onClick={openAU}>Add user</button>
                <button id="psb">Payment schedule</button>
                <button onClick={openMP}>My payment</button>
              </div>
              <div className="four"></div>
            </div>
            <div className="mp" id="mp">
              <div className="one">
                <h2>My payment</h2>
              </div>
              <div className="two">
                <section>
                  <p>January </p>
                  <p className="money">&#x20A6;5000</p>
                </section>
                <section>
                  <p>March </p>
                  <p className="money">&#x20A6;5000</p>
                </section>
                <section>
                  <p>june </p>
                  <p className="money">&#x20A6;5000</p>
                </section>
                <section>
                  <p>August </p>
                  <p className="money">&#x20A6;5000</p>
                </section>
                <section>
                  <p>September </p>
                  <p className="money">&#x20A6;5000</p>
                </section>
                <section>
                  <p>December </p>
                  <p className="money">&#x20A6;5000</p>
                </section>
                <section>
                  <p>February </p>
                  <p className="money">&#x20A6;5000</p>
                </section>
              </div>
              <div className="three">
                <button onClick={openAU}>Add user</button>
                <button onClick={openPS}>Payment schedule</button>
                <button id="mpb">My payment</button>
              </div>
              <div className="four"></div>
            </div>
            <div className="au" id="au">
              <div className="one">
                <h2>Add user</h2>
              </div>
              <div className="two">
                <div className="up">
                  <h2>Invite user</h2>
                  <div className="addUser">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="User email"
                    />
                    <button>Add user</button>
                  </div>
                </div>
                <div className="down">
                  <h2>Membership request</h2>
                  <div className="names">
                    <section>
                      <p>Benedict Nyam</p>
                      <div>
                        <button id="acc">Accept &#10003;</button>
                        <button id="dec">Decline &#10008;</button>
                      </div>
                    </section>
                    <section>
                      <p>Abdul Ibrahim</p>
                      <div>
                        <button id="acc">Accept &#10003;</button>
                        <button id="dec">Decline &#10008;</button>
                      </div>
                    </section>
                    <section>
                      <p>Antonia Ezeagu</p>
                      <div>
                        <button id="acc">Accept &#10003;</button>
                        <button id="dec">Decline &#10008;</button>
                      </div>
                    </section>
                    <section>
                      <p>Manji Lemut</p>
                      <div>
                        <button id="acc">Accept &#10003;</button>
                        <button id="dec">Decline &#10008;</button>
                      </div>
                    </section>
                    <section>
                      <p>Victoria Adeleye</p>
                      <div>
                        <button id="acc">Accept &#10003;</button>
                        <button id="dec">Decline &#10008;</button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="three">
                <button id="aub">Add user</button>
                <button onClick={openPS}>Payment schedule</button>
                <button onClick={openMP}>My payment</button>
              </div>
              <div className="four"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grpone;
