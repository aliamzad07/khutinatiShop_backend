const express = require('express');
const {
  createOrder,
  getUserOrders,
  getOrderById,
  cancelOrder,
  updateOrderToPaid
} = require('../controllers/orderController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All order routes are protected
router.use(protect);

router.route('/')
  .post(createOrder)
  .get(getUserOrders);

router.get('/:id', getOrderById);
router.put('/:id/cancel', cancelOrder);
router.put('/:id/pay', updateOrderToPaid);

module.exports = router;
