import React, { useState } from "react";
import {
  Refresh,
  Add,
  Group,
  Notifications,
  Settings,
  Person,
  Apps,
} from "@material-ui/icons";
import "./header.css"
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const DashboardHeader = () => {

 const randomColor = getRandomColor();

  return (
    <div className="dash-header">
      <div className="left-head">
        <div className="refresh-btn">
          <Refresh />
        </div>
        <div className="search-box">
          <form action="">
            <input type="text" placeholder="Search in customers" />
          </form>
        </div>
      </div>
      <div className="right-head">
        <div className="newcustomer-box">
          <Add />
        </div>
        <div className="group-list-icon">
          <Group />
        </div>
        <div className="bell-icon-subcript">
          <Notifications />
        </div>
        <div className="settings-icon">
          <Settings />
        </div>
      
      </div>
    </div>
  );
};

export default DashboardHeader;