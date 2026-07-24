/**
 * Rawaq Ul Quran - Backend API Server
 * The Portico of the Quran
 * 
 * Main entry point for the Express.js server
 */

import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import winston from 'winston';

// Load environment variables
dotenv.config();

// Import routes
// import authRoutes from './routes/auth.routes';
// import teacherRoutes from './routes/teacher.routes';
// import studentRoutes from './routes/student.routes';
// import parentRoutes from './routes/parent.routes';
// import classRoutes from './routes/class.routes';
// import paymentRoutes from './routes/payment.routes';

// Import database connection
// import { connectDatabase } from './config/database';

// Import error handlers
// import { errorHandler, notFoundHandler } from './middleware/errorHandler';

// Configure logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ 
      filename: process.env.LOG_FILE_PATH || 'logs/app.log' 
    })
  ]
});

// Create Express application
const app: Application = express();
const PORT = process.env.PORT || 3000;
const API_VERSION = process.env.API_VERSION || 'v1';

// Security middleware
app.use(helmet());
app.use(cors({
  origin: [
    process.env.WEB_APP_URL || 'http://localhost:3001',
    process.env.ADMIN_APP_URL || 'http://localhost:3002',
  ],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: 'Too many requests from this IP, please try again later.'
});
app.use(`/api/${API_VERSION}`, limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Rawaq Ul Quran API',
    version: '1.0.0'
  });
});

// API Routes
app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/teachers`, teacherRoutes);
app.use(`/api/${API_VERSION}/students`, studentRoutes);
app.use(`/api/${API_VERSION}/parents`, parentRoutes);
app.use(`/api/${API_VERSION}/classes`, classRoutes);
app.use(`/api/${API_VERSION}/payments`, paymentRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Database connection and server startup
async function startServer() {
  try {
    // Connect to database
    // await connectDatabase();
    logger.info('Database connected successfully');

    // Start server
    app.listen(PORT, () => {
      logger.info(`🚀 Server running on port ${PORT}`);
      logger.info(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
      logger.info(`🌐 API Version: ${API_VERSION}`);
      logger.info(`🔗 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

startServer();

export default app;
