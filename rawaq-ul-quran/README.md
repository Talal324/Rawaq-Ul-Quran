# 🕌 Rawaq Ul Quran (رواق القرآن)

**The Portico of the Quran** - A sacred, welcoming space where seekers of knowledge gather to learn.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?logo=flutter)](https://flutter.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)](https://nextjs.org)

## 📖 Overview

Rawaq Ul Quran is a comprehensive platform connecting qualified Quran teachers with students worldwide through a trusted, transparent, and technologically advanced platform that preserves the sanctity of Quranic education.

### ✨ Key Features

- **Verified Teachers Only** — Every teacher goes through Ijazah verification + background check
- **Parent Dashboard** — Real-time child progress tracking (unique in market)
- **AI Tajweed Feedback** — Basic pronunciation analysis during practice
- **Islamic Ecosystem** — Adhkar, Prayer times, Islamic calendar
- **Transparent Pricing** — No hidden fees, clear commission structure
- **Multi-language Support** — Urdu, English, Arabic
- **Live Video Classes** — HD video calls with whiteboard and screen sharing

## 🎯 Target Markets

- 🇵🇰 **Pakistan** (Primary) - Large Muslim population, need for quality online Quran teachers
- 🇸🇦 **GCC Countries** (High) - Expat families need Urdu/English speaking teachers
- 🇺🇸🇬🇧 **USA/UK/Europe** (High) - Reverts and Muslim diaspora seeking authentic teachers
- 🇦🇪 **UAE/Qatar/Kuwait** (Medium) - High disposable income, demand for certified teachers

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                           │
├─────────────┬──────────────┬──────────────┬─────────────────┤
│  Mobile App │   Web App    │  Admin Panel │   Teacher Portal│
│  (Flutter)  │  (Next.js)   │  (Next.js)   │   (Next.js)     │
└──────┬──────┴──────┬───────┴──────┬───────┴────────┬────────┘
       │             │              │                 │
       └─────────────┴──────────────┴─────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │    API Gateway    │
                    │  (Node.js + JWT)  │
                    └─────────┬─────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
┌──────▼──────┐      ┌───────▼───────┐     ┌────────▼────────┐
│ Auth Service│      │  User Service │     │  Class Service  │
│  (JWT/OAuth)│      │  (Profiles)   │     │ (Booking/Sched) │
└─────────────┘      └───────────────┘     └─────────────────┘
       │                      │                      │
┌──────▼──────┐      ┌───────▼───────┐     ┌────────▼────────┐
│Payment Svc  │      │Notification Svc│    │   AI Service    │
│(Stripe/Pay) │      │(Email/SMS/Push)│    │(Tajweed Analysis)│
└─────────────┘      └───────────────┘     └─────────────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
┌──────▼──────┐      ┌───────▼───────┐     ┌────────▼────────┐
│ PostgreSQL  │      │   MongoDB     │     │     Redis       │
│ (Relational)│      │ (Logs/Chat)   │     │   (Cache)       │
└─────────────┘      └───────────────┘     └─────────────────┘
```

## 🛠️ Tech Stack

### Mobile App
- **Framework**: Flutter 3.x (iOS + Android)
- **State Management**: Riverpod / BLoC
- **Local DB**: Hive / SQLite
- **Video**: Agora Flutter SDK
- **Notifications**: Firebase Cloud Messaging

### Backend
- **Runtime**: Node.js 18+ with TypeScript
- **Framework**: NestJS / Express
- **Database**: PostgreSQL (Primary), MongoDB (Logs), Redis (Cache)
- **Authentication**: JWT + OAuth2
- **API Documentation**: Swagger/OpenAPI

### Web Applications
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: Zustand + React Query
- **Auth**: NextAuth.js

### DevOps
- **Cloud**: AWS / Google Cloud
- **Container**: Docker + Kubernetes
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Error Tracking**: Sentry

## 📁 Project Structure

```
rawaq-ul-quran/
├── backend/                 # Node.js + TypeScript backend
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Auth, validation, etc.
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   ├── tests/              # Unit & integration tests
│   └── package.json
│
├── mobile/                  # Flutter mobile app
│   ├── lib/
│   │   ├── core/           # Constants, theme, utils
│   │   ├── features/       # Feature modules
│   │   │   ├── auth/
│   │   │   ├── booking/
│   │   │   ├── chat/
│   │   │   ├── classroom/
│   │   │   ├── dashboard/
│   │   │   └── profile/
│   │   └── widgets/        # Reusable widgets
│   ├── assets/             # Images, fonts, icons
│   └── pubspec.yaml
│
├── web/                     # Next.js student/parent web app
│   ├── app/                # App router pages
│   ├── components/         # React components
│   ├── lib/                # Utilities
│   └── styles/             # Global styles
│
├── admin/                   # Next.js admin dashboard
│   ├── app/
│   └── components/
│
├── docs/                    # Documentation
│   ├── API.md
│   ├── DATABASE.md
│   └── DEPLOYMENT.md
│
└── scripts/                 # Deployment & utility scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Flutter 3.x
- PostgreSQL 15+
- Redis 7+
- Docker (optional)

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Configure your environment variables
npm run dev
```

### Mobile App Setup

```bash
cd mobile
flutter pub get
flutter run
```

### Web App Setup

```bash
cd web
npm install
cp .env.example .env
npm run dev
```

## 📊 Database Schema

The application uses PostgreSQL as the primary database with the following key tables:

- `users` - Master user accounts
- `user_profiles` - Extended profile data
- `teacher_profiles` - Teacher-specific data
- `student_profiles` - Student learning preferences
- `classes` - Scheduled sessions
- `bookings` - Booking records
- `payments` - Transaction records
- `progress_tracking` - Student learning progress
- [and 12+ more tables]

See [docs/DATABASE.md](docs/DATABASE.md) for complete schema.

## 🔐 Security

- **Data Encryption**: AES-256 at rest, TLS 1.3 in transit
- **Authentication**: JWT with refresh token rotation
- **2FA**: SMS/Email based
- **Child Safety**: COPPA compliant
- **GDPR**: Data deletion requests supported

## 💰 Monetization

- **Commission**: 15-20% per class booking
- **Featured Listings**: Teachers pay for top search placement
- **Premium Subscriptions**: $9.99/month for unlimited AI practice
- **Certificate Fees**: $5 per verified certificate

## 📅 Development Roadmap

- **Phase 1** (Month 1-2): Research & Planning ✅
- **Phase 2** (Month 2-4): Design & Prototyping
- **Phase 3** (Month 3-7): Backend Development
- **Phase 4** (Month 4-8): Frontend Development
- **Phase 5** (Month 8-10): Testing & QA
- **Phase 6** (Month 10-12): Launch & Marketing

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [Coming Soon]
- **Email**: support@rawaqulquran.com
- **Twitter**: [@RawaqUlQuran](#)

---

**Learn Quran. Anywhere. Anytime.** 🌙
