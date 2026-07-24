# 🕌 Rawaq Ul Quran - Project Overview

## Vision
**"Connecting qualified Quran teachers with students worldwide through a trusted, transparent, and technologically advanced platform that preserves the sanctity of Quranic education."**

## App Name Meaning
**Rawaq Ul Quran (رواق القرآن)** = "The Portico of the Quran" — A sacred, welcoming space where seekers of knowledge gather to learn.

## Target Markets
1. 🇵🇰 **Pakistan** (Primary) - Large Muslim population, need for quality online Quran teachers
2. 🇸🇦 **GCC Countries** (High Priority) - Expat families need Urdu/English speaking teachers
3. 🇺🇸🇬🇧 **USA/UK/Europe** (High Priority) - Reverts and Muslim diaspora seeking authentic teachers
4. 🇦🇪 **UAE/Qatar/Kuwait** (Medium) - High disposable income, demand for certified teachers

## Unique Selling Propositions (USPs)
- ✅ **Verified Teachers Only** — Ijazah verification + background check
- ✅ **Parent Dashboard** — Real-time child progress tracking (unique in market)
- ✅ **AI Tajweed Feedback** — Basic pronunciation analysis during practice
- ✅ **Islamic Ecosystem** — Adhkar, Prayer times, Islamic calendar
- ✅ **Transparent Pricing** — No hidden fees, clear commission structure

## User Roles

### 1. 👨‍🏫 Teacher (Ustad/Ustazah)
- Create detailed profile with qualifications, Ijazah, experience
- Set availability, hourly rates, specializations
- Conduct live video classes
- Track earnings and student progress
- Receive ratings and reviews

### 2. 👨‍👩‍👧 Parent (Waalid/Waalida)
- Manage multiple children profiles
- Track real-time progress of each child
- Book classes with verified teachers
- View class recordings and homework
- Monitor payments and certificates

### 3. 🧑‍🎓 Student (Self-Learner Adult)
- Browse and book teachers
- Attend live classes
- Track personal progress
- Earn badges and certificates
- Access Islamic tools

### 4. 🔧 Admin
- Verify teacher documents
- Manage users and content
- Monitor platform analytics
- Handle support tickets
- Manage commissions and payouts

## Core Features by Module

### Onboarding & Authentication (8 Screens)
- Splash screen with animated logo
- 3 Onboarding screens explaining value propositions
- Role selection (Student/Teacher/Parent)
- Sign up with email/phone/social login
- OTP verification
- Biometric login support

### Teacher Module (18 Screens)
- 8-step profile setup wizard
- Document upload (ID, Degree, Ijazah)
- Availability calendar management
- Class management (upcoming, completed, cancelled)
- Earnings dashboard with withdrawal requests
- Student list with progress tracking
- Reviews and ratings management

### Student/Parent Module (20 Screens)
- Smart teacher search with advanced filters
- Booking flow (single class or packages)
- Live video classroom with chat & whiteboard
- Progress dashboard with visual charts
- Quran tracker with verse marking
- Certificates and wallet management
- **UNIQUE: Parent Dashboard** - All children's progress in one view

### Video Classroom (Core Feature)
- HD video calling (<200ms latency)
- Multi-student support
- Chat panel
- Digital whiteboard
- Screen sharing
- Lesson notes
- Class recording (optional)

## Tech Stack Summary

### Mobile App
- **Framework**: Flutter 3.x (iOS + Android)
- **State Management**: Riverpod / BLoC
- **Local DB**: Hive / SQLite
- **Video**: Agora Flutter SDK
- **Push Notifications**: Firebase Cloud Messaging

### Web App
- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: Zustand + React Query
- **Auth**: NextAuth.js

### Backend (Microservices)
- **API Gateway**: Node.js + Express/NestJS
- **Auth Service**: Node.js + JWT + OAuth2
- **User Service**: Node.js + TypeScript
- **Class Service**: Node.js + Socket.io
- **Payment Service**: Node.js + Stripe SDK
- **Notification Service**: Node.js + Bull Queue
- **AI Service**: Python + FastAPI + TensorFlow
- **Content Service**: Node.js

### Database
- **PostgreSQL**: Primary relational DB
- **MongoDB**: Logs, chat, notifications
- **Redis**: Session cache, rate limiting
- **Elasticsearch**: Search functionality

### DevOps
- **Cloud**: AWS / Google Cloud
- **Containers**: Docker + Kubernetes
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Error Tracking**: Sentry

### Third-Party Services
- **Video**: Agora.io / Twilio
- **Payments**: Stripe + PayPal + JazzCash/EasyPaisa
- **SMS**: Twilio / MessageBird
- **Email**: SendGrid / AWS SES
- **Storage**: AWS S3 + CloudFront
- **AI**: TensorFlow Lite / OpenAI API
- **Maps**: Google Maps API
- **Analytics**: Mixpanel + Google Analytics

## Monetization Model

### Revenue Streams
1. **Commission**: 15-20% per class booking (70% of revenue)
2. **Featured Listings**: Teachers pay to appear top in search (15%)
3. **Premium Subscriptions**: $9.99/month for unlimited AI practice (10%)
4. **Certificate Fees**: $5 per verified certificate (5%)

### Example Payout
```
Class Price: $20 (set by teacher)
Platform Fee: 20% = $4
Teacher Receives: $16
Payment Processing: ~$0.60 (Stripe)
Net to Teacher: $15.40
```

## Development Timeline (12 Months)

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| 1. Research & Planning | Month 1-2 | Competitor analysis, PRD, team hiring |
| 2. Design & Prototyping | Month 2-4 | Brand identity, Figma designs, prototypes |
| 3. Backend Development | Month 3-7 | APIs, database, integrations |
| 4. Frontend Development | Month 4-8 | Flutter app, web app, admin dashboard |
| 5. Testing & QA | Month 8-10 | Unit/integration/E2E tests, UAT, security audit |
| 6. Launch & Marketing | Month 10-12 | Beta launch, app stores, public launch |

## Security & Compliance
- AES-256 encryption at rest, TLS 1.3 in transit
- GDPR compliant
- COPPA compliant (child safety)
- End-to-end encrypted video calls
- 2FA authentication
- Biometric login support

## Success Factors
1. **Trust**: Verified teachers with Ijazah + background checks
2. **Transparency**: Parent dashboard shows real-time child progress
3. **Quality**: AI-assisted Tajweed feedback + human teacher review
4. **Accessibility**: Multiple languages, affordable pricing, global reach
5. **Community**: Complete Islamic learning ecosystem
6. **Incentives**: Fair teacher payouts, student rewards, certificates

---

**Next Steps**: 
1. Review this overview
2. Proceed to database schema design
3. Start backend API development
4. Begin mobile app UI development
