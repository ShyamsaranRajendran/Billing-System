import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import SpLoader from "../utils/SpLoader"; 
const Dashboard = () => {
  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  return (
    <div className={`Dashboard-container ${showLoader ? "blur" : ""}`}>
      <Sidebar/>
    </div>
  );
};

export default Dashboard;
