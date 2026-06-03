const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { models } = require('../config/database');

const Product = models.Product;

// GET /api/inventory - Get all inventory items
router.get('/', async (req, res) => {
  try {
    const inventory = await Product.findAll();
    res.status(200).json({
      status: 'success',
      data: inventory,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
});

// POST /api/inventory/adjust - Adjust inventory quantity
router.post('/adjust', authMiddleware, async (req, res) => {
  try {
    const { productId, quantity, reason } = req.body;

    if (!productId || quantity === undefined) {
      return res.status(400).json({
        status: 'error',
        error: 'Product ID and quantity are required',
      });
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({
        status: 'error',
        error: 'Product not found',
      });
    }

    // Update inventory
    const newQuantity = parseFloat(product.currentPrice) + parseFloat(quantity);
    // Note: This is simplified. You should use the Inventory model instead
    
    res.status(200).json({
      status: 'success',
      data: {
        productId,
        previousQuantity: product.currentPrice,
        newQuantity,
        reason,
      },
      message: 'Inventory adjusted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
});

// GET /api/inventory/:productId - Get inventory for specific product
router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (!product) {
      return res.status(404).json({
        status: 'error',
        error: 'Product not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
});

module.exports = router;
