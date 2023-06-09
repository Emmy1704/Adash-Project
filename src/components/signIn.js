import "../styles/signUp.css";
import { Link} from "react-router-dom";
// import { useState } from "react";
// import swal from "sweetalert";

const SignIn = () => {
//   async function loginUser() {
//     return fetch("https://concerned-pear-overcoat.cyclic.app//users/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({username, password}),
//     }).then((data) => data.json());
//   }

//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();
//   const navigate = useNavigate("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await loginUser({
//       username,
//       password,
//     });
//     if (response) {
//       swal("Success", response.message, "success", {
//         buttons: false,
//         timer: 2000,
//       }).then((value) => {
//         localStorage.setItem("accessToken", response["accessToken"]);
//         localStorage.setItem("user", JSON.stringify(response["user"]));
//         window.location.href = "/profile";
//       });
//       navigate("/dashboard/home");
//     } else {
//       swal("success", response.message, "success");
//       console.log(response.message);
//     }
    
//   };
  return (
    <>
      <div className="content">
         <div className="background"></div>
        <form className="form">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </Link>
          <h1>LOG IN</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            // onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/dashboard/home"} >
            <button>Log In</button>
          </Link>
          <p>
            don't have an account? <Link to={"/signup"}>sign up</Link>
          </p>
          <p id="p">or Sign in with</p>
          <div className="links">
            <a href="https://www.google.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
