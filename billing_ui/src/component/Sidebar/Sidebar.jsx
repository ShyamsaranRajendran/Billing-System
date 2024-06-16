import React from "react";
import { NavLink } from "react-router-dom";
import {
  AccountBalance,
  People,
  ShoppingCart,
  MonetizationOn,
  Payment,
  Receipt,
  AccessTime,
  Event,
  BarChart,
  Web,
} from "@material-ui/icons"; // Import icons from Material-UI
import "./Sidebar.css"; // Assuming you have a separate CSS file for Sidebar styles

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="title-billing">Billing</div>
      <ul className="sidebar-nav">
        <li>
          <NavLink to="/customers" activeClassName="active-link">
            <People className="icon" /> Customers
          </NavLink>
        </li>
        <li>
          <NavLink to="/product-catalog" activeClassName="active-link">
            <ShoppingCart className="icon" /> Product Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales" activeClassName="active-link">
            <MonetizationOn className="icon" /> Sales
          </NavLink>
        </li>
        <li>
          <NavLink to="/payments" activeClassName="active-link">
            <Payment className="icon" /> Payments
          </NavLink>
        </li>
        <li>
          <NavLink to="/expense" activeClassName="active-link">
            <Receipt className="icon" /> Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/time-tracking" activeClassName="active-link">
            <AccessTime className="icon" /> Time Tracking
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" activeClassName="active-link">
            <Event className="icon" /> Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName="active-link">
            <BarChart className="icon" /> Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/web-tabs" activeClassName="active-link">
            <Web className="icon" /> Web Tabs
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
