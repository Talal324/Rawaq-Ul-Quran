# 🚀 Getting Started Guide

Welcome to Rawaq Ul Quran development! This guide will help you set up the project locally.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** or **yarn** (comes with Node.js)
- **Flutter** 3.x ([Install Guide](https://docs.flutter.dev/get-started/install))
- **Git** ([Download](https://git-scm.com))

### Database & Cache
- **PostgreSQL** 15+ ([Download](https://www.postgresql.org/download))
- **Redis** 7+ ([Download](https://redis.io/download))
- **MongoDB** 7+ ([Download](https://www.mongodb.com/try/download/community))

### Optional (Recommended)
- **Docker** & **Docker Compose** ([Install](https://docs.docker.com/get-docker))
- **VS Code** with recommended extensions

---

## Quick Start with Docker (Recommended)

If you have Docker installed, this is the easiest way to get started:

```bash
# Clone the repository
git clone https://github.com/your-org/rawaq-ul-quran.git
cd rawaq-ul-quran

# Start all services (PostgreSQL, Redis, MongoDB)
docker-compose up -d

# Verify services are running
docker-compose ps
```

---

## Backend Setup

### 1. Navigate to backend directory
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` file and update:
- Database connection string
- JWT secret (generate a strong random string)
- Payment gateway keys (Stripe, PayPal)
- Email/SMS service credentials
- Agora video SDK credentials

### 4. Set up database
```bash
# Create PostgreSQL database
createdb rawaq_ul_quran

# Run migrations
npx prisma migrate dev

# Seed initial data (optional)
npm run db:seed
```

### 5. Start development server
```bash
npm run dev
```

The API should now be running at `http://localhost:3000`

Check health: `http://localhost:3000/health`

---

## Mobile App Setup (Flutter)

### 1. Navigate to mobile directory
```bash
cd mobile
```

### 2. Install Flutter dependencies
```bash
flutter pub get
```

### 3. Configure Firebase (for push notifications)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing
3. Add Android/iOS apps
4. Download `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
5. Place files in:
   - `android/app/google-services.json`
   - `ios/Runner/GoogleService-Info.plist`

### 4. Configure Agora (for video calls)
1. Sign up at [Agora.io](https://www.agora.io)
2. Create a project and get App ID
3. Update `lib/core/config/agora_config.dart`

### 5. Run the app
```bash
# For Android
flutter run

# For iOS (macOS only)
flutter run -d ios

# For specific device
flutter devices
flutter run -d <device_id>
```

---

## Web App Setup (Next.js)

### 1. Navigate to web directory
```bash
cd web
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3001
```

### 4. Start development server
```bash
npm run dev
```

The web app should now be running at `http://localhost:3001`

---

## Admin Dashboard Setup

### 1. Navigate to admin directory
```bash
cd admin
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
```bash
cp .env.example .env.local
```

### 4. Start development server
```bash
npm run dev
```

The admin dashboard should be running at `http://localhost:3002`

---

## Verification

After setting up all components, verify everything is working:

| Component | URL | Status Check |
|-----------|-----|--------------|
| Backend API | http://localhost:3000 | GET `/health` |
| Web App | http://localhost:3001 | Load homepage |
| Admin Panel | http://localhost:3002 | Load dashboard |
| Mobile App | Device/Emulator | Launch app |

---

## Common Issues & Solutions

### Issue: Port already in use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>
```

### Issue: Database connection failed
- Ensure PostgreSQL is running
- Check DATABASE_URL in `.env`
- Verify database exists: `psql -U postgres -l`

### Issue: Flutter build fails
```bash
# Clean Flutter build
flutter clean
flutter pub get
flutter run
```

### Issue: npm install fails
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## Development Workflow

### 1. Create a new branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make changes and test
- Write tests for new features
- Ensure existing tests pass
- Test manually in browser/emulator

### 3. Commit changes
```bash
git add .
git commit -m "feat: add your feature description"
```

### 4. Push and create PR
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

---

## Testing

### Backend Tests
```bash
cd backend
npm test
npm run test:coverage
```

### Mobile Tests
```bash
cd mobile
flutter test
```

### Web Tests
```bash
cd web
npm test
```

---

## Code Style

### Backend (TypeScript)
```bash
npm run lint
npm run format
```

### Mobile (Dart)
```bash
dart analyze
dart format .
```

### Web (TypeScript/React)
```bash
npm run lint
npm run format
```

---

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment instructions.

---

## Need Help?

- Check existing [Issues](https://github.com/your-org/rawaq-ul-quran/issues)
- Read [CONTRIBUTING.md](../CONTRIBUTING.md)
- Join our Discord/Slack channel
- Contact: support@rawaqulquran.com

---

**Happy Coding!** 🌙
