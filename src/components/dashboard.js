import "../styles/dashboard.css";
import { Outlet, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";

const Dashboard = () => {
  return (
    <>
      
      <Outlet />
    </>
  );
};

export default Dashboard;
