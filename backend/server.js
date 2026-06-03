require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { sequelize, models } = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware de segurança
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(morgan('combined'));

// Middleware de parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database sync
sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Database synced successfully');
}).catch(err => {
  console.error('❌ Database sync error:', err);
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/users', require('./src/routes/users.routes'));
app.use('/api/products', require('./src/routes/products.routes'));
app.use('/api/inventory', require('./src/routes/inventory.routes'));
app.use('/api/purchases', require('./src/routes/purchases.routes'));
app.use('/api/consumption', require('./src/routes/consumption.routes'));
app.use('/api/reports', require('./src/routes/reports.routes'));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path 
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔗 API: http://localhost:${PORT}/api`);
});

module.exports = app;
