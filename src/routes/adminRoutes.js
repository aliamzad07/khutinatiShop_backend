const express = require('express');
const {
  getAllOrders,
  updateOrderStatus,
  getAnalytics,
  getSalesReport
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect);
router.use(authorize('admin'));

// Order management
router.get('/orders', getAllOrders);
router.put('/orders/:id', updateOrderStatus);

// Analytics
router.get('/analytics', getAnalytics);
router.get('/sales-report', getSalesReport);

module.exports = router;

