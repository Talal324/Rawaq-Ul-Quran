# 🛠️ Backend API Development - Step 1

## Project Setup

This document guides you through setting up the backend API for Rawaq Ul Quran using Node.js, Express, and TypeScript.

## Prerequisites

- Node.js v18+ installed
- PostgreSQL database running
- Redis server (optional for now)
- Git installed

## Step 1: Initialize Backend Project

```bash
cd /workspace/rawaq-ul-quran/backend

# Initialize npm project
npm init -y

# Install core dependencies
npm install express cors helmet morgan dotenv pg sequelize jsonwebtoken bcryptjs uuid
npm install --save-dev typescript @types/node @types/express @types/cors @types/morgan @types/jsonwebtoken @types/bcryptjs ts-node nodemon
```

## Step 2: Create TypeScript Configuration

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Step 3: Environment Configuration

Create `.env.example`:

```env
# Server
NODE_ENV=development
PORT=5000
API_VERSION=v1

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rawaq_ul_quran
DB_USER=postgres
DB_PASSWORD=your_password_here

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRES_IN=30d

# Redis (optional)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads

# Third Party APIs (add later)
STRIPE_SECRET_KEY=
AGORA_APP_ID=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
SENDGRID_API_KEY=
```

## Step 4: Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   ├── index.ts
│   │   └── app.config.ts
│   ├── models/
│   │   ├── index.ts
│   │   ├── User.ts
│   │   ├── UserProfile.ts
│   │   ├── TeacherProfile.ts
│   │   └── ... (other models)
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── teacher.controller.ts
│   │   └── ...
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── teacher.service.ts
│   │   └── ...
│   ├── routes/
│   │   ├── index.ts
│   │   ├── auth.routes.ts
│   │   ├── user.routes.ts
│   │   └── ...
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── validation.middleware.ts
│   │   └── ...
│   ├── utils/
│   │   ├── AppError.ts
│   │   ├── catchAsync.ts
│   │   ├── logger.ts
│   │   └── helpers.ts
│   ├── validators/
│   │   ├── auth.validator.ts
│   │   └── ...
│   └── app.ts
├── tests/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Step 5: Core Files Implementation

### 5.1 Main Application Entry Point (`src/app.ts`)

```typescript
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { config } from './config';
import { errorHandler } from './middleware/error.middleware';
import routes from './routes';
import { AppError } from './utils/AppError';

dotenv.config();

const app: Application = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: config.corsOrigin,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Rawaq Ul Quran API is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use(`/api/${config.apiVersion}`, routes);

// 404 handler
app.all('*', (req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// Global error handler
app.use(errorHandler);

export default app;
```

### 5.2 Configuration (`src/config/index.ts`)

```typescript
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),
  apiVersion: process.env.API_VERSION || 'v1',
  
  // Database
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    name: process.env.DB_NAME || 'rawaq_ul_quran',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
  },
  
  // JWT
  jwt: {
    secret: process.env.JWT_SECRET || 'default-secret-change-me',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'default-refresh-secret',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  },
  
  // CORS
  corsOrigin: process.env.CORS_ORIGIN || '*',
  
  // File upload
  maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10),
  uploadPath: process.env.UPLOAD_PATH || './uploads',
};
```

### 5.3 Database Configuration (`src/config/database.ts`)

```typescript
import { Sequelize } from 'sequelize';
import { config } from './index';

export const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    port: config.database.port,
    dialect: 'postgres',
    logging: config.nodeEnv === 'development' ? console.log : false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export const connectDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    
    // Sync all models (use migrations in production)
    await sequelize.sync({ 
      alter: config.nodeEnv === 'development',
      force: false 
    });
    console.log('✅ Database models synchronized.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1);
  }
};
```

### 5.4 Error Handling Middleware (`src/middleware/error.middleware.ts`)

```typescript
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';
import { config } from '../config';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = { ...err };
  error.message = err.message;

  // Log error for debugging
  if (config.nodeEnv === 'development') {
    console.error('Error:', err);
  }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new AppError(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new AppError(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors)
      .map((val: any) => val.message)
      .join(', ');
    error = new AppError(message, 400);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = new AppError(message, 401);
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = new AppError(message, 401);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: {
      message: error.message || 'Server Error',
      statusCode: error.statusCode || 500,
      ...(config.nodeEnv === 'development' && { stack: err.stack }),
    },
  });
};
```

### 5.5 AppError Utility (`src/utils/AppError.ts`)

```typescript
export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
```

### 5.6 CatchAsync Utility (`src/utils/catchAsync.ts`)

```typescript
import { Request, Response, NextFunction } from 'express';

export const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
```

### 5.7 Logger Utility (`src/utils/logger.ts`)

```typescript
import fs from 'fs';
import path from 'path';

const logDir = path.join(__dirname, '../../logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

export const logger = {
  info: (message: string, meta?: any) => {
    log('INFO', message, meta);
  },
  error: (message: string, meta?: any) => {
    log('ERROR', message, meta);
  },
  warn: (message: string, meta?: any) => {
    log('WARN', message, meta);
  },
  debug: (message: string, meta?: any) => {
    log('DEBUG', message, meta);
  },
};

function log(level: string, message: string, meta?: any) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...(meta && { meta }),
  };

  const logLine = JSON.stringify(logEntry) + '\n';
  const logFile = path.join(logDir, `${new Date().toISOString().split('T')[0]}.log`);

  fs.appendFileSync(logFile, logLine);

  if (process.env.NODE_ENV === 'development') {
    console.log(`[${level}] ${message}`);
  }
}
```

## Step 6: Create Models

### 6.1 Base Model Setup (`src/models/index.ts`)

```typescript
import { sequelize } from '../config/database';
import { User } from './User';
import { UserProfile } from './UserProfile';
import { TeacherProfile } from './TeacherProfile';
import { StudentProfile } from './StudentProfile';

// Define model relationships here
UserProfile.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasOne(UserProfile, { foreignKey: 'user_id', as: 'profile' });

TeacherProfile.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasOne(TeacherProfile, { foreignKey: 'user_id', as: 'teacherProfile' });

StudentProfile.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasOne(StudentProfile, { foreignKey: 'user_id', as: 'studentProfile' });

export { sequelize, User, UserProfile, TeacherProfile, StudentProfile };
export default { sequelize, User, UserProfile, TeacherProfile, StudentProfile };
```

### 6.2 User Model (`src/models/User.ts`)

```typescript
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import bcrypt from 'bcryptjs';

interface UserAttributes {
  id: string;
  email: string;
  phone?: string;
  password_hash: string;
  role: 'student' | 'teacher' | 'parent' | 'admin';
  status: 'pending' | 'active' | 'suspended' | 'deleted';
  email_verified: boolean;
  phone_verified: boolean;
  two_factor_enabled: boolean;
  last_login?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'status' | 'email_verified' | 'phone_verified' | 'two_factor_enabled' | 'created_at' | 'updated_at'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public email!: string;
  public phone?: string;
  public password_hash!: string;
  public role!: 'student' | 'teacher' | 'parent' | 'admin';
  public status!: 'pending' | 'active' | 'suspended' | 'deleted';
  public email_verified!: boolean;
  public phone_verified!: boolean;
  public two_factor_enabled!: boolean;
  public last_login?: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public deleted_at?: Date;

  // Instance methods
  public async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password_hash);
  }

  public toJSON(): object {
    const values = { ...this.get() };
    delete (values as any).password_hash;
    return values;
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: true,
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('student', 'teacher', 'parent', 'admin'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'active', 'suspended', 'deleted'),
      defaultValue: 'pending',
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    phone_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    two_factor_enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    last_login: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
    hooks: {
      beforeCreate: async (user: User) => {
        if (user.password_hash) {
          const salt = await bcrypt.genSalt(12);
          user.password_hash = await bcrypt.hash(user.password_hash, salt);
        }
      },
      beforeUpdate: async (user: User) => {
        if (user.changed('password_hash')) {
          const salt = await bcrypt.genSalt(12);
          user.password_hash = await bcrypt.hash(user.password_hash, salt);
        }
      },
    },
  }
);
```

### 6.3 UserProfile Model (`src/models/UserProfile.ts`)

```typescript
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface UserProfileAttributes {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  avatar_url?: string;
  gender?: 'male' | 'female' | 'prefer_not_to_say';
  date_of_birth?: Date;
  country?: string;
  city?: string;
  timezone?: string;
  language?: 'en' | 'ur' | 'ar';
  bio?: string;
  created_at?: Date;
  updated_at?: Date;
}

interface UserProfileCreationAttributes extends Optional<UserProfileAttributes, 'id' | 'timezone' | 'language' | 'created_at' | 'updated_at'> {}

export class UserProfile extends Model<UserProfileAttributes, UserProfileCreationAttributes> implements UserProfileAttributes {
  public id!: string;
  public user_id!: string;
  public first_name!: string;
  public last_name!: string;
  public full_name!: string;
  public avatar_url?: string;
  public gender?: 'male' | 'female' | 'prefer_not_to_say';
  public date_of_birth?: Date;
  public country?: string;
  public city?: string;
  public timezone!: string;
  public language!: 'en' | 'ur' | 'ar';
  public bio?: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

UserProfile.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.TEXT,
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'prefer_not_to_say'),
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
    },
    country: {
      type: DataTypes.STRING(100),
    },
    city: {
      type: DataTypes.STRING(100),
    },
    timezone: {
      type: DataTypes.STRING(50),
      defaultValue: 'UTC',
    },
    language: {
      type: DataTypes.ENUM('en', 'ur', 'ar'),
      defaultValue: 'en',
    },
    bio: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'user_profiles',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
```

## Step 7: Create Authentication Service & Controller

### 7.1 Auth Service (`src/services/auth.service.ts`)

```typescript
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { AppError } from '../utils/AppError';
import { config } from '../config';

interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export class AuthService {
  /**
   * Generate JWT token
   */
  public generateToken(payload: TokenPayload): string {
    return jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    });
  }

  /**
   * Generate refresh token
   */
  public generateRefreshToken(payload: TokenPayload): string {
    return jwt.sign(payload, config.jwt.refreshSecret, {
      expiresIn: config.jwt.refreshExpiresIn,
    });
  }

  /**
   * Verify JWT token
   */
  public verifyToken(token: string): TokenPayload {
    try {
      return jwt.verify(token, config.jwt.secret) as TokenPayload;
    } catch (error) {
      throw new AppError('Invalid or expired token', 401);
    }
  }

  /**
   * Register new user
   */
  public async register(email: string, password: string, role: string, phone?: string) {
    // Check if user already exists
    const existingUser = await User.findOne({
      where: {
        email,
        deleted_at: null,
      },
    });

    if (existingUser) {
      throw new AppError('User with this email already exists', 400);
    }

    // Create user
    const user = await User.create({
      email,
      password_hash: password,
      role: role as any,
      phone,
      status: 'pending',
    });

    // Generate tokens
    const tokenPayload: TokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.generateToken(tokenPayload);
    const refreshToken = this.generateRefreshToken(tokenPayload);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Login user
   */
  public async login(email: string, password: string) {
    const user = await User.findOne({
      where: {
        email,
        deleted_at: null,
      },
    });

    if (!user) {
      throw new AppError('Invalid email or password', 401);
    }

    if (user.status !== 'active') {
      throw new AppError('Account is not active. Please contact support.', 403);
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      throw new AppError('Invalid email or password', 401);
    }

    // Update last login
    await user.update({ last_login: new Date() });

    // Generate tokens
    const tokenPayload: TokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.generateToken(tokenPayload);
    const refreshToken = this.generateRefreshToken(tokenPayload);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Refresh access token
   */
  public async refreshToken(refreshToken: string) {
    try {
      const payload = jwt.verify(refreshToken, config.jwt.refreshSecret) as TokenPayload;
      
      const user = await User.findByPk(payload.id);
      
      if (!user || user.status !== 'active') {
        throw new AppError('User not found or inactive', 401);
      }

      const newAccessToken = this.generateToken(payload);

      return {
        accessToken: newAccessToken,
      };
    } catch (error) {
      throw new AppError('Invalid refresh token', 401);
    }
  }
}

export const authService = new AuthService();
```

### 7.2 Auth Controller (`src/controllers/auth.controller.ts`)

```typescript
import { Request, Response, NextFunction } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { authService } from '../services/auth.service';

export class AuthController {
  /**
   * Register new user
   * POST /api/v1/auth/register
   */
  public register = catchAsync(async (req: Request, res: Response) => {
    const { email, password, role, phone } = req.body;

    const result = await authService.register(email, password, role, phone);

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: result,
    });
  });

  /**
   * Login user
   * POST /api/v1/auth/login
   */
  public login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: result,
    });
  });

  /**
   * Refresh token
   * POST /api/v1/auth/refresh-token
   */
  public refreshToken = catchAsync(async (req: Request, res: Response) => {
    const { refresh_token } = req.body;

    const result = await authService.refreshToken(refresh_token);

    res.status(200).json({
      success: true,
      message: 'Token refreshed successfully',
      data: result,
    });
  });

  /**
   * Get current user profile
   * GET /api/v1/auth/me
   */
  public getMe = catchAsync(async (req: Request, res: Response) => {
    const user = req.user; // Set by auth middleware

    res.status(200).json({
      success: true,
      data: { user },
    });
  });
}

export const authController = new AuthController();
```

## Step 8: Create Routes

### 8.1 Auth Routes (`src/routes/auth.routes.ts`)

```typescript
import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.get('/me', authMiddleware, authController.getMe);

export default router;
```

### 8.2 Main Routes Index (`src/routes/index.ts`)

```typescript
import { Router } from 'express';
import authRoutes from './auth.routes';

const router = Router();

// Mount routes
router.use('/auth', authRoutes);
// Add more routes here as we build them
// router.use('/users', userRoutes);
// router.use('/teachers', teacherRoutes);
// router.use('/students', studentRoutes);
// router.use('/bookings', bookingRoutes);
// router.use('/payments', paymentRoutes);

export default router;
```

## Step 9: Authentication Middleware (`src/middleware/auth.middleware.ts`)

```typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { AppError } from '../utils/AppError';
import { config } from '../config';
import { catchAsync } from '../utils/catchAsync';

export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = catchAsync(async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token: string | undefined;

  // Check for token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    throw new AppError('You are not logged in. Please log in to get access.', 401);
  }

  // Verify token
  const decoded = jwt.verify(token, config.jwt.secret) as { id: string };

  // Get user from database
  const user = await User.findByPk(decoded.id, {
    attributes: { exclude: ['password_hash'] },
  });

  if (!user) {
    throw new AppError('The user belonging to this token no longer exists.', 401);
  }

  if (user.status !== 'active') {
    throw new AppError('Your account has been suspended.', 403);
  }

  // Attach user to request
  req.user = user;

  next();
});

/**
 * Restrict to specific roles
 */
export const restrictTo = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new AppError('You do not have permission to perform this action', 403);
    }
    next();
  };
};
```

## Step 10: Server Entry Point (`src/server.ts`)

```typescript
import app from './app';
import { connectDatabase } from './config/database';
import { config } from './config';

const PORT = config.port;

// Connect to database and start server
const startServer = async () => {
  try {
    // Connect to database
    await connectDatabase();

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📝 Environment: ${config.nodeEnv}`);
      console.log(`🌐 API Version: ${config.apiVersion}`);
      console.log(`🏥 Health check: http://localhost:${PORT}/health`);
      console.log(`📡 API endpoint: http://localhost:${PORT}/api/${config.apiVersion}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
```

## Step 11: Update package.json Scripts

```json
{
  "name": "rawaq-ul-quran-backend",
  "version": "1.0.0",
  "description": "Backend API for Rawaq Ul Quran platform",
  "main": "dist/server.js",
  "scripts": {
    "dev": "nodemon --exec ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "lint": "eslint src/**/*.ts",
    "test": "jest",
    "test:watch": "jest --watch",
    "db:migrate": "npx sequelize-cli db:migrate",
    "db:seed": "npx sequelize-cli db:seed:all"
  },
  "keywords": ["quran", "education", "islamic", "learning"],
  "author": "",
  "license": "MIT"
}
```

## Step 12: Create .gitignore

```gitignore
node_modules/
dist/
.env
.env.local
*.log
logs/
.DS_Store
coverage/
.vscode/
.idea/
uploads/
```

## Step 13: Run the Server

```bash
# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env and set your database credentials

# Start development server
npm run dev
```

Visit: `http://localhost:5000/health`

## Testing the API

### Register a New User

```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "teacher@example.com",
    "password": "SecurePass123!",
    "role": "teacher",
    "phone": "+923001234567"
  }'
```

### Login

```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "teacher@example.com",
    "password": "SecurePass123!"
  }'
```

### Get Current User

```bash
curl -X GET http://localhost:5000/api/v1/auth/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN_HERE"
```

---

**Next Steps:**
1. ✅ Backend project setup complete
2. ➡️ Create remaining models (TeacherProfile, StudentProfile, Booking, Payment, etc.)
3. ➡️ Implement teacher profile CRUD operations
4. ➡️ Implement booking system
5. ➡️ Integrate payment gateway
6. ➡️ Add file upload functionality
7. ➡️ Set up notification service
8. ➡️ Write unit tests

Would you like me to continue with the next step?
