import "./style.css";
import Dashboard from "./components/dashboard";
import Home from "./components/Home";
import LandingPage from "./components/landingPage";
import Groups from "./components/groups";
import Grpone from "./components/grp-one";
import Notifications from "./components/notifications";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Accounts from "./components/accounts";
import Invest from "./components/invest";
import Profile from "./components/profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return <>
  <Router>
   <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/signin" element={<SignIn/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}>
         <Route exact path="/dashboard/home" element={<Home/>}/>
         <Route exact path="/dashboard/notifications" element={<Notifications/>}/>
         <Route exact path="/dashboard/groups" element={<Groups/>}/>
         <Route exact path="/dashboard/grpOne" element={<Grpone/>}/>
         <Route exact path="/dashboard/accounts" element={<Accounts/>}/>
         <Route exact path="/dashboard/invest" element={<Invest/>}/>
         <Route exact path="/dashboard/profile" element={<Profile/>}/>
         
      </Route>
   </Routes>
  </Router>
  </>;
};

export default App;
