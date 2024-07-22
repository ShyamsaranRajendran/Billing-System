const express = require("express");
const router = express.Router();
const authenticate = require("../utils/AuthDecode"); // Assuming you have authentication middleware
const Customer = require("../models/customer.js");

// GET customers for the authenticated user
router.get("/customer", authenticate, async function (req, res) {
  try {
    const customers = await Customer.find({ userId: req.userId });

    if (!customers || customers.length === 0) {
      return res.status(404).json({ error: "No customers found" });
    }

    res.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/customer/search", authenticate, async function (req, res) {
 try {
    const userId = req.userId;
    const searchQuery = req.query.query.toLowerCase();
    let query = { userId };
    if (searchQuery) {
      query = {
        ...query,
        name: { $regex: searchQuery, $options: 'i' }
      };
    }
    const customers = await Customer.find(query);
    if (!customers || customers.length === 0) {
      return res.status(404).json({ error: "No customers found" });
    }
    res.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/customer/add", authenticate, async (req, res) => {
   try {
    const customerData = req.body;
    customerData.userId = req.userId;
    const newCustomer = new Customer(customerData);
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error("Error saving customer data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
