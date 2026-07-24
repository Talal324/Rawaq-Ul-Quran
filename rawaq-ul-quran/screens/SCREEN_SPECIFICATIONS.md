# 📱 Rawaq Ul Quran - Complete Screen Specifications

## Overview
Detailed specifications for all 40+ screens across Teacher, Student, Parent, and Admin modules.

---

## 🎯 SCREEN CATEGORIES

| Category | Count | Description |
|----------|-------|-------------|
| Onboarding & Auth | 8 screens | First-time user experience |
| Teacher Module | 18 screens | Teacher dashboard & features |
| Student/Parent Module | 20 screens | Learning & tracking features |
| Video Classroom | 1 screen | Live class interface |
| **Total** | **47 screens** | Complete app coverage |

---

## A. ONBOARDING & AUTHENTICATION (8 Screens)

### Screen 1: Splash Screen
**Purpose:** Brand introduction while app loads  
**Duration:** 3 seconds auto-transition  

#### Layout:
```
┌─────────────────────────────┐
│                             │
│     [Animated Logo]         │
│        🌙 ر                 │
│                             │
│   [Islamic Pattern Fade]    │
│                             │
│                             │
│   رَوَاقُ الْقُرْآن         │
│   RAWAQ UL QURAN           │
│                             │
│   "Learn Quran. Anywhere." │
│                             │
└─────────────────────────────┘
```

#### Elements:
- **Background:** Gradient (#1a5c3a → #0d3320)
- **Logo:** Animated gold "ر" with glow effect
- **Arabic Text:** Amiri font, 32px, white
- **English Text:** Poppins, 20px, white
- **Tagline:** Inter, 16px, cream color
- **Animation:** Logo fade-in + rotate, pattern shimmer

#### Interactions:
- Auto-navigate to Onboarding 1 after 3s
- Skip button (top-right) for returning users

---

### Screen 2: Onboarding 1 - Learn
**Purpose:** Introduce core learning feature  

#### Layout:
```
┌─────────────────────────────┐
│                    [Skip]   │
│                             │
│      [Illustration]         │
│   Teacher + Student Video   │
│                             │
│                             │
│   Learn Quran from          │
│   Certified Teachers        │
│                             │
│   Connect with qualified    │
│   Quran teachers worldwide  │
│   for personalized lessons  │
│                             │
│       ● ○ ○                 │
│                             │
│      [Get Started]          │
│                             │
└─────────────────────────────┘
```

#### Elements:
- **Illustration:** Vector art of online class
- **Heading:** Poppins Bold, 28px, charcoal
- **Subtext:** Inter Regular, 16px, gray
- **Pagination:** 3 dots, active = gold
- **CTA Button:** Primary green, full width

#### Interactions:
- Swipe left/right to navigate
- Dot tap to jump to specific screen
- "Get Started" → Role Selection
- "Skip" → Role Selection

---

### Screen 3: Onboarding 2 - Track
**Purpose:** Highlight parent tracking feature  

#### Layout:
```
┌─────────────────────────────┐
│                    [Skip]   │
│                             │
│      [Illustration]         │
│   Parent Dashboard Mockup   │
│                             │
│                             │
│   Track Your Child's        │
│   Progress in Real-Time     │
│                             │
│   Monitor classes, progress │
│   and performance with our  │
│   unique parent dashboard   │
│                             │
│       ○ ● ○                 │
│                             │
│      [Continue]             │
│                             │
└─────────────────────────────┘
```

#### Elements:
- **Illustration:** Parent viewing child progress
- **Heading:** Poppins Bold, 28px
- **Subtext:** Inter Regular, 16px
- **Unique Feature Badge:** "Only on Rawaq"

---

### Screen 4: Onboarding 3 - Earn
**Purpose:** Attract teachers to platform  

#### Layout:
```
┌─────────────────────────────┐
│                    [Skip]   │
│                             │
│      [Illustration]         │
│   Teacher Earnings Graph    │
│                             │
│                             │
│   Earn While You Teach      │
│                             │
│   Set your own rates,       │
│   schedule flexibly, and    │
│   grow your student base    │
│                             │
│       ○ ○ ●                 │
│                             │
│      [Continue]             │
│                             │
└─────────────────────────────┘
```

---

### Screen 5: Role Selection
**Purpose:** User selects their primary role  

#### Layout:
```
┌─────────────────────────────┐
│                             │
│   How would you like to     │
│   use Rawaq?                │
│                             │
│   ┌───────────────────┐     │
│   │ 👨‍🏫               │     │
│   │ I am a Teacher    │     │
│   │ Teach students    │     │
│   │ & earn money      │     │
│   └───────────────────┘     │
│                             │
│   ┌───────────────────┐     │
│   │ 👨‍👩‍👧              │     │
│   │ I am a Parent     │     │
│   │ Track my child's  │     │
│   │ Quran learning    │     │
│   └───────────────────┘     │
│                             │
│   ┌───────────────────┐     │
│   │ 🧑‍🎓               │     │
│   │ I am a Student    │     │
│   │ Learn Quran       │     │
│   │ myself            │     │
│   └───────────────────┘     │
│                             │
└─────────────────────────────┘
```

#### Elements:
- **Cards:** 3 vertical cards with icons
- **Card Style:** White bg, shadow, border
- **Icon Size:** 48px
- **Selection:** Tap card → highlight gold border
- **Auto-navigation:** After selection → Sign Up

---

### Screen 6: Sign Up
**Purpose:** Create new account  

#### Layout:
```
┌─────────────────────────────┐
│  ← Back                     │
│                             │
│   Create Account            │
│                             │
│   ┌───────────────────┐     │
│   │ 👤 Full Name      │     │
│   └───────────────────┘     │
│                             │
│   ┌───────────────────┐     │
│   │ 📧 Email          │     │
│   └───────────────────┘     │
│                             │
│   ┌───────────────────┐     │
│   │ 📱 Phone Number   │     │
│   └───────────────────┘     │
│                             │
│   ┌───────────────────┐     │
│   │ 🔒 Password       │     │
│   └───────────────────┘     │
│                             │
│   ☐ I agree to Terms &      │
│     Privacy Policy          │
│                             │
│   [Create Account]          │
│                             │
│   ─────── Or ───────        │
│                             │
│   [G] Continue with Google  │
│   [] Continue with Apple   │
│                             │
│   Already have account?     │
│   [Login]                   │
│                             │
└─────────────────────────────┘
```

#### Validation:
- Name: Min 2 characters
- Email: Valid format
- Phone: Country code + number
- Password: Min 8 chars, 1 uppercase, 1 number, 1 special char
- Checkbox: Must be checked

---

### Screen 7: OTP Verification
**Purpose:** Verify phone/email  

#### Layout:
```
┌─────────────────────────────┐
│                             │
│   Verification Code         │
│                             │
│   Enter the 6-digit code    │
│   sent to +92 XXX XXXXXXX   │
│                             │
│   ┌───┬───┬───┬───┬───┬───┐│
│   │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 ││
│   └───┴───┴───┴───┴───┴───┘│
│                             │
│   Resend code in 00:29      │
│                             │
│   [Verify]                  │
│                             │
│   Wrong number? [Edit]      │
│                             │
└─────────────────────────────┘
```

#### Features:
- Auto-detect SMS (mobile)
- Auto-fill OTP
- Resend timer: 30 seconds
- Max 3 resend attempts

---

### Screen 8: Login
**Purpose:** Existing user login  

#### Layout:
```
┌─────────────────────────────┐
│                             │
│   Welcome Back!             │
│                             │
│   ┌───────────────────┐     │
│   │ 📧 Email/Phone    │     │
│   └───────────────────┘     │
│                             │
│   ┌───────────────────┐     │
│   │ 🔒 Password       │     │
│   └───────────────────┘     │
│                             │
│   [Forgot Password?]        │
│                             │
│   [Login]                   │
│                             │
│   ─────── Or ───────        │
│                             │
│   [G] Continue with Google  │
│   [] Continue with Apple   │
│                             │
│   Don't have account?       │
│   [Sign Up]                 │
│                             │
│   🔐 Enable Biometric       │
│                             │
└─────────────────────────────┘
```

---

## B. TEACHER MODULE (18 Screens)

### Screen 9: Teacher Profile Setup (Wizard Step 1-8)
**Purpose:** Complete teacher onboarding  

#### Steps:
1. **Basic Info** - Name, photo, gender, age
2. **Languages** - Select teaching languages
3. **Qualification** - Degrees, institutions
4. **Ijazah Details** - Certificate upload
5. **Specializations** - Tajweed, Hifz, Tafsir, etc.
6. **Teaching Details** - Rate, hours, timezone
7. **Media** - Intro video, audio sample
8. **Bio** - Teaching philosophy

---

### Screen 10: Teacher Public Profile
**Purpose:** Display teacher to students/parents  

#### Layout:
```
┌─────────────────────────────┐
│  ← Back        ⋮ Share     │
│                             │
│  [Teacher Photo - Hero]     │
│                             │
│  Qari Muhammad Usman        │
│  ⭐ 4.9 (120 reviews)       │
│  🇵🇰 Pakistan • 🕐 PKT       │
│                             │
│  [▶ Watch Intro Video]      │
│                             │
│  ─── About ───              │
│  Certified Qari with 10+    │
│  years experience...        │
│  [Read More]                │
│                             │
│  ─── Qualifications ───     │
│  🎓 Ijazah from Al-Azhar    │
│  🎓 MA Islamic Studies      │
│                             │
│  ─── Specializations ───    │
│  [Tajweed] [Hifz] [Kids]    │
│                             │
│  ─── Availability ───       │
│  Mon-Fri: 4PM - 8PM PKT     │
│                             │
│  ─── Reviews (120) ───      │
│  ⭐⭐⭐⭐⭐ "Excellent teacher" │
│  - Ahmed, Parent            │
│  [View All]                 │
│                             │
│  [Book Class - $15/hr]      │
│                             │
└─────────────────────────────┘
```

---

### Screen 11: Edit Profile
**Purpose:** Teacher updates profile  

#### Features:
- All fields editable
- Photo/video upload
- Preview before save
- Auto-save drafts

---

### Screen 12: Document Upload
**Purpose:** KYC and verification  

#### Documents Required:
- CNIC/Passport (ID proof)
- Degree certificates
- Ijazah certificate
- Background check (optional)

#### Upload Format:
- PDF, JPG, PNG
- Max 5MB per file
- Multiple files allowed

---

### Screen 13: Availability Calendar
**Purpose:** Set teaching schedule  

#### Layout:
```
┌─────────────────────────────┐
│  ← Back                     │
│                             │
│  Set Your Availability      │
│                             │
│  ┌─────────────────────┐    │
│  │ Monday              │    │
│  │ [✓] Available       │    │
│  │ 09:00 AM - 12:00 PM │    │
│  │ 04:00 PM - 08:00 PM │    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────┐    │
│  │ Tuesday             │    │
│  │ [✓] Available       │    │
│  │ ...                 │    │
│  └─────────────────────┘    │
│                             │
│  [+ Add Time Slot]          │
│  [Block Dates]              │
│                             │
│  [Save Schedule]            │
│                             │
└─────────────────────────────┘
```

---

### Screen 14: Class Management
**Purpose:** View all classes  

#### Tabs:
- **Upcoming** - Future classes
- **Completed** - Past classes
- **Cancelled** - Cancelled classes

#### Class Card:
```
┌─────────────────────────────┐
│  📅 Today, 4:00 PM          │
│  👶 Ahmed Ali (Age 8)       │
│  📚 Surah Al-Baqarah        │
│  ⏱️ 45 minutes              │
│  [Join Class] [Reschedule]  │
└─────────────────────────────┘
```

---

### Screen 15: Class Detail
**Purpose:** Individual class view  

#### Features:
- Student info
- Join video button
- Lesson notes
- Mark attendance
- Submit homework

---

### Screen 16: Earnings Dashboard
**Purpose:** Track income  

#### Layout:
```
┌─────────────────────────────┐
│  💰 Earnings                │
│                             │
│  ┌─────────────────────┐    │
│  │ Total Balance       │    │
│  │ $485.50             │    │
│  │ Available: $320.00  │    │
│  │ Pending: $165.50    │    │
│  └─────────────────────┘    │
│                             │
│  This Week: $145.00 ▲ 12%   │
│  This Month: $620.00 ▲ 8%   │
│                             │
│  ─── Recent Earnings ───    │
│  Dec 15: $45 (3 classes)    │
│  Dec 14: $30 (2 classes)    │
│  Dec 13: $60 (4 classes)    │
│                             │
│  [Withdraw Funds]           │
│                             │
└─────────────────────────────┘
```

---

### Screen 17: Earnings Detail
**Purpose:** Per-class breakdown  

#### Columns:
- Date
- Student name
- Class duration
- Amount earned
- Status (Paid/Pending)

---

### Screen 18: Withdrawal
**Purpose:** Request payout  

#### Fields:
- Bank account / PayPal
- Amount (min $50)
- Withdrawal method
- Confirmation

---

### Screen 19: Student List
**Purpose:** All current students  

#### Features:
- Search students
- Filter by active/completed
- View progress per student

---

### Screen 20: Student Detail
**Purpose:** Individual student progress  

#### Shows:
- Learning history
- Progress charts
- Notes
- Chat option

---

### Screen 21: Reviews & Ratings
**Purpose:** View and respond to reviews  

#### Features:
- All reviews list
- Filter by rating
- Reply to reviews
- Report inappropriate reviews

---

### Screen 22: Notifications
**Purpose:** Teacher notifications  

#### Categories:
- Class reminders
- Booking alerts
- Payment notifications
- Messages
- System announcements

---

### Screen 23: Settings
**Purpose:** Account settings  

#### Options:
- Edit profile
- Change password
- Notification preferences
- Language selection
- Theme (Light/Dark)
- Logout

---

### Screen 24: Help & Support
**Purpose:** Customer support  

#### Features:
- FAQs
- Chat support
- Report issue form
- Contact info

---

## C. STUDENT/PARENT MODULE (20 Screens)

### Screen 25: Home Dashboard (Student)
**Purpose:** Main landing page  

#### Layout:
```
┌─────────────────────────────┐
│  ☰  Rawaq Ul Quran    🔔 👤│
├─────────────────────────────┤
│  ┌─────────────────────┐   │
│  │  Assalamu Alaikum   │   │
│  │  Ahmed! 🌙          │   │
│  │  Ready to learn?    │   │
│  └─────────────────────┘   │
│                             │
│  [🔍 Search Teachers...]   │
│                             │
│  📚 Quick Categories:       │
│  [Quran] [Tajweed] [Hifz]   │
│  [Tafsir] [Arabic] [Kids]   │
│                             │
│  ⭐ Recommended Teachers    │
│  ┌─────┐ ┌─────┐ ┌─────┐   │
│  │👨‍🏫  │ │👩‍🏫  │ │👨‍🏫  │   │
│  │Qari │ │Usta-│ │Hafiz│   │
│  │Usman│ │zah A│ │Khalid│  │
│  │$15/h│ │$12/h│ │$18/h│   │
│  │⭐4.9│ │⭐4.8│ │⭐5.0│   │
│  └─────┘ └─────┘ └─────┘   │
│                             │
│  📅 Upcoming Class          │
│  ┌─────────────────────┐   │
│  │ Today, 4:00 PM      │   │
│  │ Qari Usman          │   │
│  │ Surah Al-Baqarah    │   │
│  │ [Join Class]        │   │
│  └─────────────────────┘   │
│                             │
│  📊 My Progress             │
│  ████████████░░░░  75%     │
│                             │
│  [🏠] [🔍] [📅] [💬] [👤] │
└─────────────────────────────┘
```

---

### Screen 26: Teacher Search
**Purpose:** Find teachers with filters  

#### Filters:
- Price range ($5-$50/hr)
- Rating (4+ stars)
- Language (Urdu, English, Arabic)
- Gender (Male, Female, No preference)
- Specialty (Tajweed, Hifz, Tafsir)
- Availability (Time slots)
- Experience (Years)

---

### Screen 27: Teacher List
**Purpose:** Browse search results  

#### Card Elements:
- Photo
- Name
- Rating + review count
- Hourly rate
- Specialties tags
- Languages
- "Book Now" button

---

### Screen 28: Teacher Profile View
**Purpose:** Detailed teacher info (same as Screen 10)

---

### Screen 29: Booking Flow
**Purpose:** Book a class  

#### Steps:
1. Select package (1 class / 4 classes / 8 classes / 12 classes)
2. Choose date from calendar
3. Select time slot
4. Add note (optional)
5. Confirm booking
6. Payment

---

### Screen 30: My Classes
**Purpose:** View booked classes  

#### Tabs:
- Upcoming
- Completed
- Cancelled
- Rescheduled

---

### Screen 31: Video Classroom
**Purpose:** Live class interface  

#### Layout:
```
┌─────────────────────────────┐
│  🔴 LIVE - 45:23 remaining │
├─────────────────────────────┤
│                             │
│  ┌─────────────────────┐   │
│  │ [Teacher Video]     │   │
│  │ Qari Usman          │   │
│  │ Reciting...         │   │
│  └─────────────────────┘   │
│                             │
│  ┌────┐ ┌────┐ ┌────┐      │
│  │You │ │Ahmed│ │Fatima│   │
│  └────┘ └────┘ └────┘      │
│                             │
│  [🎤] [📹] [💬] [🖊️] [⚙️] [❌]│
│                             │
│  💬 Chat (collapsed)        │
│                             │
└─────────────────────────────┘
```

#### Features:
- HD video streaming
- Mute/unmute
- Camera on/off
- Chat
- Digital whiteboard
- Screen sharing
- Recording (if enabled)
- End class button

---

### Screen 32: Class Summary
**Purpose:** Post-class review  

#### Shows:
- What was taught
- Homework assigned
- Teacher notes
- Next class schedule
- Rate teacher option

---

### Screen 33: Progress Dashboard
**Purpose:** Track learning progress  

#### Visualizations:
- Circular progress chart
- Streak counter (days learned)
- Badges earned
- Hours spent
- Surahs completed
- Tajweed improvement graph

---

### Screen 34: Quran Tracker
**Purpose:** Visual Mushaf tracking  

#### Features:
- Interactive Quran image
- Mark verses as learned
- Revision schedule
- Memorization progress
- Color-coded by status (New/Learning/Revision/Mastered)

---

### Screen 35: Certificates
**Purpose:** View earned certificates  

#### Features:
- List of certificates
- Download PDF
- Share on social media
- Verification QR code

---

### Screen 36: Wallet
**Purpose:** Manage balance  

#### Shows:
- Current balance
- Add money button
- Transaction history
- Auto-recharge option

---

### Screen 37: Payments
**Purpose:** Payment history  

#### Details:
- All transactions
- Invoices
- Receipts
- Refund status
- Export to PDF

---

### Screen 38: Chat
**Purpose:** Message teachers  

#### Features:
- Direct messaging
- File sharing
- Voice messages
- Read receipts
- Typing indicators

---

### Screen 39: Notifications
**Purpose:** Student/parent notifications  

#### Types:
- Class reminders (1 hour before)
- Teacher messages
- Payment confirmations
- Progress updates
- Special offers

---

### Screen 40: Islamic Tools
**Purpose:** Additional Islamic features  

#### Tools:
- Prayer times (by location)
- Qibla direction (compass)
- Daily Adhkar
- Hijri calendar
- Tasbeeh counter

---

### Screen 41: Settings
**Purpose:** User settings  

#### Options:
- Profile management
- Children management (for parents)
- Notification preferences
- Language (Urdu/English/Arabic)
- Theme toggle
- Privacy settings
- Logout

---

### Screen 42: Parent Dashboard (UNIQUE FEATURE)
**Purpose:** Monitor multiple children  

#### Layout:
```
┌─────────────────────────────┐
│  👨‍👩‍👧 Parent Dashboard        │
├─────────────────────────────┤
│                             │
│  📊 OVERVIEW                │
│  ┌─────┐ ┌─────┐ ┌─────┐   │
│  │Children│ Active │Spend │ │
│  │   3   │   8   │ $120  │ │
│  └─────┘ └─────┘ └─────┘   │
│                             │
│  👶 AHMED (Age 8)           │
│  ┌─────────────────────┐   │
│  │ 🎯 Goal: Hifz Juz 1 │   │
│  │ 📈 Progress: 78%    │   │
│  │ 📅 Next: Today 4PM  │   │
│  │ 👨‍🏫 Teacher: Qari U. │   │
│  │ 📚 Last: Al-Baqarah │   │
│  │ ⭐ Rating: 5/5      │   │
│  │ [Progress] [Chat]   │   │
│  └─────────────────────┘   │
│                             │
│  👧 FATIMA (Age 12)         │
│  ┌─────────────────────┐   │
│  │ 🎯 Goal: Tajweed    │   │
│  │ 📈 Progress: 60%    │   │
│  │ ...                 │   │
│  └─────────────────────┘   │
│                             │
│  📜 Recent Certificates     │
│  🎓 Ahmed - Qaida Complete  │
│  🎓 Fatima - Fatiha Mastery │
│                             │
│  💳 Recent Payments         │
│  $30 - Qari Usman (3 cls)   │
│  $45 - Ustazah Ayesha       │
│                             │
└─────────────────────────────┘
```

---

## D. ADMIN MODULE (Web Dashboard)

### Key Admin Screens:
1. **Dashboard** - Platform overview
2. **User Management** - Approve/block users
3. **Teacher Verification** - Review documents
4. **Analytics** - Revenue, users, retention
5. **Payments** - All transactions
6. **Content Management** - Quran data, courses
7. **Support Tickets** - Customer issues
8. **Notifications** - Broadcast messages
9. **Reports** - Generate PDFs/Excel
10. **Settings** - Platform configuration

---

## 🎨 DESIGN SPECIFICATIONS BY SCREEN TYPE

### Cards
- Border radius: 12px
- Padding: 20px
- Shadow: medium elevation
- Hover: lift 2px

### Buttons
- Primary: Green gradient
- Secondary: White with green border
- Gold: Premium actions
- Height: 48px (touch target)

### Inputs
- Border radius: 8px
- Border: 2px solid gray-200
- Focus: Green border + shadow
- Error: Red border + message

### Navigation
- Bottom nav height: 80px
- Icon size: 24px
- Active color: Green
- Inactive color: Gray-400

---

## ✅ IMPLEMENTATION CHECKLIST

### For Each Screen:
- [ ] Wireframe approved
- [ ] High-fidelity design ready
- [ ] All states designed (empty, loading, error, success)
- [ ] Responsive layouts (mobile/tablet)
- [ ] Dark mode variant
- [ ] RTL support (Arabic/Urdu)
- [ ] Accessibility audit
- [ ] Component library mapped
- [ ] Animation specs defined
- [ ] Developer handoff complete

---

**Document Version:** 1.0.0  
**Total Screens:** 47  
**Last Updated:** 2026
