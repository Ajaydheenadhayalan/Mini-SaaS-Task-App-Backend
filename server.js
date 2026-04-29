const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors({
  origin: ['https://mini-saa-s-task-app-gold.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('Mini SaaS Task API is running...');
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    
    // Sync models
    // In production, use migrations instead of { force: false } or { alter: true }
    await sequelize.sync({ alter: true });
    console.log('✅ Database models synced');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
  }
};

startServer();
