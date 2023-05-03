import "../styles/signUp.css";
import "../styles/dashboard.css";
import Sidebar from "./sidebar";

const Groups = () => {
  return (
    <>
      <div className="group">
        <Sidebar />
        <div className="body">
          <div className="balance">
            <h2>Adash wallet</h2>
            <p>
              &#8358; 25000.<span>00</span>
            </p>
            <button>Fund wallet</button>
          </div>
          <div className="mygroups">
            <h2>My groups</h2>
            <section>
              <article>
                <h3>community savings</h3>
                <p>Admin</p>
              </article>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </section>
            <section>
              <article>
                <h3>Better growth</h3>
                <p>member</p>
              </article>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </section>
          </div>
          <div className="create">
            <h2>Create a group</h2>
            <form>
              <label htmlFor="name">Group Name</label>
              <input type="text" name="name" />
              <label htmlFor="duration">Duration</label>
              <input type="number" name="duration" />
              <label htmlFor="amount">Amount</label>
              <input type="number" name="amount" />
              <label htmlFor="members">Number of members</label>
              <input type="number" name="members" />
            </form>
            <button>Create</button>
          </div>
          <div className="join">
            <h2>Join a group</h2>
            <h3>by invite link</h3>
            <input type="text" />
            <button>Join</button>
            <div className="line"></div>
            <h3>by sending request</h3>
            <input type="search" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
