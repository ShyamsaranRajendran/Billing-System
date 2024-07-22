import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/header';
import Footer from './component/Footer/footer';
import Land from './component/landing';
import User from './component/User/UserDash';
import Dashboard from './component/Dashboard/Dashboard';
import Customers from './component/Customers/Customers.jsx';
import ProductCatalog from './component/ProductCatalog/ProductCatalog.jsx';
import ProductDetails from './component/ProductCatalog/ProductDetails.jsx';
import Sales from './component/Sales/Sales';
import Payments from './component/Payments/Payments.jsx';
import Expense from './component/Expense/Expense.jsx';
import TimeTracking from './component/TimeTracking/TimeTracking.jsx';
import Events from './component/Events/Events.jsx';
import Reports from './component/Reports/Reports.jsx';
import WebTabs from './component/WebTabs/WebTabs.jsx';
import 'leaflet/dist/leaflet.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Dashboard/*" element={<Dashboard />}>
            <Route path="customers" element={<Customers />} />
            <Route path="product-catalog" element={<ProductCatalog />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="sales" element={<Sales />} />
            <Route path="payments" element={<Payments />} />
            <Route path="expense" element={<Expense />} />
            <Route path="time-tracking" element={<TimeTracking />} />
            <Route path="events" element={<Events />} />
            <Route path="reports" element={<Reports />} />
            <Route path="web-tabs" element={<WebTabs />} />
          </Route>
          <Route path="/user" element={<User />} /> 
          <Route path="/" element={<Land />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
