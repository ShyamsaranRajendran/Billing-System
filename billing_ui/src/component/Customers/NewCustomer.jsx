import React, { useState } from "react";
import axios from "axios";
import "./css/newcus.css";
const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: { email: "", phone: "" },
    image: "",
    customerType: "",
    salesMetrics: {
      totalSalesCount: 0,
      totalAmountPurchased: 0,
      averagePurchaseValue: 0,
      lastPurchaseDate: "",
      frequentProducts: [],
    },
    billingInfo: {
      recentInvoices: [],
      totalOutstandingAmount: 0,
      billingCycle: "",
    },
    paymentInfo: { recentPayments: [], preferredPaymentMethod: "" },
    discounts: { totalDiscountsReceived: 0, recentDiscounts: [] },
    subscription: [],
    usage: { recentUsageRecords: [], totalUsage: "" },
    notifications: { recentNotifications: [], pendingActions: "" },
    accountStatus: "",
    lastLoginDate: "",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, section) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  const handleArrayChange = (e, section, index) => {
    const { name, value } = e.target;
    const updatedArray = [...formData[section]];
    updatedArray[index] = { ...updatedArray[index], [name]: value };
    setFormData((prevState) => ({
      ...prevState,
      [section]: updatedArray,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/customers",
        formData
      );
      console.log("Customer data saved:", response.data);
    } catch (error) {
      console.error("Error saving customer data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.contactInfo.email}
          onChange={(e) => handleNestedChange(e, "contactInfo")}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.contactInfo.phone}
          onChange={(e) => handleNestedChange(e, "contactInfo")}
        />
      </div>
      <div>
        <label>Total Sales Count:</label>
        <input
          type="number"
          name="totalSalesCount"
          value={formData.salesMetrics.totalSalesCount}
          onChange={(e) => handleNestedChange(e, "salesMetrics")}
        />
      </div>
      <div>
        <label>Total Amount Purchased:</label>
        <input
          type="number"
          name="totalAmountPurchased"
          value={formData.salesMetrics.totalAmountPurchased}
          onChange={(e) => handleNestedChange(e, "salesMetrics")}
        />
      </div>
      <div>
        <label>Average Purchase Value:</label>
        <input
          type="number"
          name="averagePurchaseValue"
          value={formData.salesMetrics.averagePurchaseValue}
          onChange={(e) => handleNestedChange(e, "salesMetrics")}
        />
      </div>
      <div>
        <label>Last Purchase Date:</label>
        <input
          type="date"
          name="lastPurchaseDate"
          value={formData.salesMetrics.lastPurchaseDate}
          onChange={(e) => handleNestedChange(e, "salesMetrics")}
        />
      </div>
      <div>
        <label>Frequent Products:</label>
        {formData.salesMetrics.frequentProducts.map((product, index) => (
          <input
            key={index}
            type="text"
            name="product"
            value={product}
            onChange={(e) =>
              handleArrayChange(e, "salesMetrics.frequentProducts", index)
            }
          />
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData((prevState) => ({
              ...prevState,
              salesMetrics: {
                ...prevState.salesMetrics,
                frequentProducts: [
                  ...prevState.salesMetrics.frequentProducts,
                  "",
                ],
              },
            }))
          }
        >
          Add Product
        </button>
      </div>
      <div>
        <label>Billing Cycle:</label>
        <input
          type="text"
          name="billingCycle"
          value={formData.billingInfo.billingCycle}
          onChange={(e) => handleNestedChange(e, "billingInfo")}
        />
      </div>
      <div>
        <label>Preferred Payment Method:</label>
        <input
          type="text"
          name="preferredPaymentMethod"
          value={formData.paymentInfo.preferredPaymentMethod}
          onChange={(e) => handleNestedChange(e, "paymentInfo")}
        />
      </div>
      <div>
        <label>Account Status:</label>
        <input
          type="text"
          name="accountStatus"
          value={formData.accountStatus}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Login Date:</label>
        <input
          type="date"
          name="lastLoginDate"
          value={formData.lastLoginDate}
          onChange={handleChange}
        />
      </div>
      {/* Add similar sections for other nested objects and arrays */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;
