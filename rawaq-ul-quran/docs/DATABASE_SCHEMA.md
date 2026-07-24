# 🗄️ Database Schema - Rawaq Ul Quran

## Overview
This document defines the complete database schema for Rawaq Ul Quran platform using PostgreSQL as the primary database.

## Entity Relationship Diagram

```
┌─────────────────┐       ┌──────────────────┐       ┌─────────────────┐
│     users       │───────│   user_profiles  │───────│ teacher_profiles│
└─────────────────┘       └──────────────────┘       └─────────────────┘
        │                                                   │
        │                                                   │
        ▼                                                   ▼
┌─────────────────┐       ┌──────────────────┐       ┌─────────────────┐
│ student_profiles│       │teacher_documents │       │   schedules     │
└─────────────────┘       └──────────────────┘       └─────────────────┘
        │                                                   │
        │                                                   │
        ▼                                                   ▼
┌─────────────────┐       ┌──────────────────┐       ┌─────────────────┐
│parent_child_links│      │     courses      │       │     classes     │
└─────────────────┘       └──────────────────┘       └─────────────────┘
        │                                                   │
        │                                                   │
        ▼                                                   ▼
┌─────────────────┐       ┌──────────────────┐       ┌─────────────────┐
│    bookings     │◄──────│     bookings     │       │  class_reviews  │
└─────────────────┘       └──────────────────┘       └─────────────────┘
        │
        ▼
┌─────────────────┐
│    payments     │
└─────────────────┘
```

## Core Tables

### 1. users (Master User Accounts)
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('student', 'teacher', 'parent', 'admin')),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'suspended', 'deleted')),
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);
```

### 2. user_profiles (Extended Profile Data)
```sql
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    full_name VARCHAR(200) NOT NULL,
    avatar_url TEXT,
    gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'prefer_not_to_say')),
    date_of_birth DATE,
    country VARCHAR(100),
    city VARCHAR(100),
    timezone VARCHAR(50) DEFAULT 'UTC',
    language VARCHAR(10) DEFAULT 'en' CHECK (language IN ('en', 'ur', 'ar')),
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id)
);

CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_user_profiles_country ON user_profiles(country);
```

### 3. teacher_profiles (Teacher-Specific Data)
```sql
CREATE TABLE teacher_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Professional Info
    qualification VARCHAR(255),
    institution VARCHAR(255),
    ijazah_details TEXT,
    experience_years INTEGER DEFAULT 0,
    
    -- Specializations (stored as JSON array)
    specializations JSONB DEFAULT '[]'::jsonb,
    -- Example: ["quran_recitation", "tajweed", "hifz", "tafsir", "noorani_qaida", "islamic_studies"]
    
    -- Teaching Details
    hourly_rate DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    class_duration INTEGER DEFAULT 30, -- in minutes
    available_hours JSONB, -- Weekly schedule
    timezone VARCHAR(50) DEFAULT 'UTC',
    
    -- Media
    intro_video_url TEXT,
    audio_sample_url TEXT,
    certificates_gallery JSONB DEFAULT '[]'::jsonb,
    
    -- Stats (denormalized for performance)
    total_students INTEGER DEFAULT 0,
    total_classes INTEGER DEFAULT 0,
    average_rating DECIMAL(3, 2) DEFAULT 0.00,
    total_reviews INTEGER DEFAULT 0,
    response_time_minutes INTEGER,
    
    -- Status
    is_verified BOOLEAN DEFAULT FALSE,
    verification_date TIMESTAMP WITH TIME ZONE,
    is_featured BOOLEAN DEFAULT FALSE,
    featured_until TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id)
);

CREATE INDEX idx_teacher_profiles_user_id ON teacher_profiles(user_id);
CREATE INDEX idx_teacher_profiles_hourly_rate ON teacher_profiles(hourly_rate);
CREATE INDEX idx_teacher_profiles_average_rating ON teacher_profiles(average_rating);
CREATE INDEX idx_teacher_profiles_is_verified ON teacher_profiles(is_verified);
CREATE INDEX idx_teacher_profiles_specializations ON teacher_profiles USING GIN(specializations);
```

### 4. teacher_documents (KYC/Verification Documents)
```sql
CREATE TABLE teacher_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_profile_id UUID NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,
    document_type VARCHAR(50) NOT NULL CHECK (document_type IN ('id_card', 'degree', 'ijazah_certificate', 'other')),
    file_url TEXT NOT NULL,
    file_name VARCHAR(255),
    file_size INTEGER, -- in bytes
    mime_type VARCHAR(100),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    admin_notes TEXT,
    reviewed_by UUID REFERENCES users(id),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_teacher_documents_teacher_id ON teacher_documents(teacher_profile_id);
CREATE INDEX idx_teacher_documents_status ON teacher_documents(status);
```

### 5. student_profiles (Student Learning Preferences)
```sql
CREATE TABLE student_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Learning Info
    learning_goal VARCHAR(100), -- e.g., "Hifz", "Tajweed Mastery", "Beginner Reading"
    current_level TEXT,
    preferred_teacher_gender VARCHAR(10) CHECK (preferred_teacher_gender IN ('male', 'female', 'no_preference')),
    preferred_language VARCHAR(10),
    learning_style VARCHAR(50), -- e.g., "Visual + Audio"
    special_needs TEXT,
    
    -- Schedule
    available_hours JSONB,
    budget_range VARCHAR(50), -- e.g., "$10-20/hour"
    
    -- Progress (denormalized)
    total_classes_attended INTEGER DEFAULT 0,
    current_streak INTEGER DEFAULT 0,
    longest_streak INTEGER DEFAULT 0,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id)
);

CREATE INDEX idx_student_profiles_user_id ON student_profiles(user_id);
CREATE INDEX idx_student_profiles_learning_goal ON student_profiles(learning_goal);
```

### 6. parent_child_links (Parent-Child Relationship Mapping)
```sql
CREATE TABLE parent_child_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    child_student_profile_id UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
    relationship VARCHAR(50), -- e.g., "father", "mother", "guardian"
    is_primary BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(parent_user_id, child_student_profile_id)
);

CREATE INDEX idx_parent_child_links_parent_id ON parent_child_links(parent_user_id);
CREATE INDEX idx_parent_child_links_child_id ON parent_child_links(child_student_profile_id);
```

## Class & Booking Tables

### 7. courses (Pre-defined Course Packages)
```sql
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100), -- e.g., "Quran Recitation", "Tajweed", "Hifz"
    level VARCHAR(50), -- e.g., "Beginner", "Intermediate", "Advanced"
    duration_weeks INTEGER,
    total_classes INTEGER,
    price DECIMAL(10, 2),
    currency VARCHAR(3) DEFAULT 'USD',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_courses_level ON courses(level);
CREATE INDEX idx_courses_is_active ON courses(is_active);
```

### 8. schedules (Teacher Availability Calendar)
```sql
CREATE TABLE schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_profile_id UUID NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,
    
    -- Recurring weekly schedule
    day_of_week INTEGER NOT NULL CHECK (day_of_week BETWEEN 0 AND 6), -- 0=Sunday, 6=Saturday
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_recurring BOOLEAN DEFAULT TRUE,
    
    -- One-time availability or blocks
    specific_date DATE, -- NULL for recurring, set for specific dates
    is_blocked BOOLEAN DEFAULT FALSE, -- If true, this slot is unavailable
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_schedules_teacher_id ON schedules(teacher_profile_id);
CREATE INDEX idx_schedules_day_of_week ON schedules(day_of_week);
CREATE INDEX idx_schedules_specific_date ON schedules(specific_date);
```

### 9. bookings (Student-Teacher Booking Records)
```sql
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_profile_id UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
    teacher_profile_id UUID NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id),
    
    -- Class Details
    scheduled_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    duration_minutes INTEGER NOT NULL,
    timezone VARCHAR(50) NOT NULL,
    
    -- Pricing
    hourly_rate DECIMAL(10, 2) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    platform_fee DECIMAL(10, 2) NOT NULL, -- e.g., 20%
    teacher_earning DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    
    -- Status
    status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled', 'no_show')),
    cancellation_reason TEXT,
    cancelled_by UUID REFERENCES users(id),
    
    -- Class Info
    lesson_topic VARCHAR(255),
    lesson_notes TEXT,
    homework_assigned TEXT,
    recording_url TEXT,
    recording_enabled BOOLEAN DEFAULT FALSE,
    
    -- Attendance
    student_attended BOOLEAN,
    teacher_attended BOOLEAN,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_bookings_student_id ON bookings(student_profile_id);
CREATE INDEX idx_bookings_teacher_id ON bookings(teacher_profile_id);
CREATE INDEX idx_bookings_scheduled_date ON bookings(scheduled_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created_at ON bookings(created_at);
```

### 10. class_reviews (Ratings & Feedback)
```sql
CREATE TABLE class_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    reviewer_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reviewed_teacher_id UUID NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,
    
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    is_public BOOLEAN DEFAULT TRUE,
    
    -- Sub-ratings
    teaching_quality INTEGER CHECK (teaching_quality BETWEEN 1 AND 5),
    punctuality INTEGER CHECK (punctuality BETWEEN 1 AND 5),
    communication INTEGER CHECK (communication BETWEEN 1 AND 5),
    
    admin_response TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(booking_id)
);

CREATE INDEX idx_class_reviews_booking_id ON class_reviews(booking_id);
CREATE INDEX idx_class_reviews_teacher_id ON class_reviews(reviewed_teacher_id);
CREATE INDEX idx_class_reviews_rating ON class_reviews(rating);
```

## Payment Tables

### 11. payments (Transaction Records)
```sql
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    booking_id UUID REFERENCES bookings(id),
    
    -- Payment Details
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    payment_method VARCHAR(50) NOT NULL, -- e.g., "stripe", "paypal", "jazzcash", "wallet"
    payment_type VARCHAR(50) NOT NULL, -- e.g., "class_booking", "wallet_topup", "withdrawal", "subscription"
    
    -- Transaction Info
    transaction_id VARCHAR(255), -- External payment gateway transaction ID
    status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed', 'refunded')),
    failure_reason TEXT,
    
    -- Gateway Response
    gateway_response JSONB,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_booking_id ON payments(booking_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_created_at ON payments(created_at);
```

### 12. teacher_earnings (Per-Teacher Earnings Breakdown)
```sql
CREATE TABLE teacher_earnings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_profile_id UUID NOT NULL REFERENCES teacher_profiles(id) ON DELETE CASCADE,
    booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    
    gross_amount DECIMAL(10, 2) NOT NULL,
    platform_fee DECIMAL(10, 2) NOT NULL,
    net_amount DECIMAL(10, 2) NOT NULL,
    payment_processing_fee DECIMAL(10, 2) DEFAULT 0.00,
    final_amount DECIMAL(10, 2) NOT NULL,
    
    currency VARCHAR(3) DEFAULT 'USD',
    status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'on_hold')),
    payout_batch_id UUID,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    paid_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_teacher_earnings_teacher_id ON teacher_earnings(teacher_profile_id);
CREATE INDEX idx_teacher_earnings_booking_id ON teacher_earnings(booking_id);
CREATE INDEX idx_teacher_earnings_status ON teacher_earnings(status);
```

### 13. wallets (In-App Wallet Balances)
```sql
CREATE TABLE wallets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    balance DECIMAL(10, 2) DEFAULT 0.00 NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id)
);

CREATE INDEX idx_wallets_user_id ON wallets(user_id);
```

### 14. wallet_transactions (Wallet Credit/Debit History)
```sql
CREATE TABLE wallet_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    wallet_id UUID NOT NULL REFERENCES wallets(id) ON DELETE CASCADE,
    
    transaction_type VARCHAR(30) NOT NULL CHECK (transaction_type IN ('credit', 'debit')),
    amount DECIMAL(10, 2) NOT NULL,
    balance_after DECIMAL(10, 2) NOT NULL,
    
    reference_type VARCHAR(50), -- e.g., "payment", "booking", "withdrawal", "refund"
    reference_id UUID, -- ID of the related entity
    
    description TEXT,
    metadata JSONB,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_wallet_transactions_wallet_id ON wallet_transactions(wallet_id);
CREATE INDEX idx_wallet_transactions_created_at ON wallet_transactions(created_at);
```

## Content Tables

### 15. quran_content (Full Quran with Translations)
```sql
CREATE TABLE quran_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    surah_number INTEGER NOT NULL,
    ayah_number INTEGER NOT NULL,
    surah_name_arabic VARCHAR(255) NOT NULL,
    surah_name_english VARCHAR(255) NOT NULL,
    text_uthmani TEXT NOT NULL, -- Uthmani script
    text_simple TEXT, -- Simple script
    translation_en TEXT,
    translation_ur TEXT,
    translation_ar TEXT,
    juz_number INTEGER,
    hizb_number INTEGER,
    rub_el_hizb_number INTEGER,
    page_number INTEGER,
    
    UNIQUE(surah_number, ayah_number)
);

CREATE INDEX idx_quran_content_surah ON quran_content(surah_number);
CREATE INDEX idx_quran_content_juz ON quran_content(juz_number);
```

### 16. lessons (Course Lesson Materials)
```sql
CREATE TABLE lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    lesson_number INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content JSONB, -- Structured lesson content
    resources JSONB DEFAULT '[]'::jsonb, -- PDFs, videos, links
    duration_minutes INTEGER,
    order_index INTEGER NOT NULL,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(course_id, lesson_number)
);

CREATE INDEX idx_lessons_course_id ON lessons(course_id);
CREATE INDEX idx_lessons_order ON lessons(course_id, order_index);
```

### 17. progress_tracking (Student Learning Progress)
```sql
CREATE TABLE progress_tracking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_profile_id UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
    teacher_profile_id UUID REFERENCES teacher_profiles(id),
    
    -- What is being tracked
    track_type VARCHAR(50) NOT NULL, -- e.g., "surah_memorization", "tajweed_skill", "course_completion"
    track_reference_id UUID, -- Could be course_id, surah_number, etc.
    
    -- Progress data
    progress_percentage DECIMAL(5, 2) DEFAULT 0.00,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    last_practiced_at TIMESTAMP WITH TIME ZONE,
    
    -- Detailed progress (JSON for flexibility)
    details JSONB,
    -- Example for surah memorization:
    -- {
    --   "surah_number": 1,
    --   "verses_total": 7,
    --   "verses_memorized": 5,
    --   "verses": [
    --     {"verse": 1, "status": "mastered", "last_reviewed": "2026-01-15"},
    --     {"verse": 2, "status": "mastered", "last_reviewed": "2026-01-15"},
    --     {"verse": 3, "status": "learning", "last_reviewed": "2026-01-14"}
    --   ]
    -- }
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_progress_tracking_student_id ON progress_tracking(student_profile_id);
CREATE INDEX idx_progress_tracking_type ON progress_tracking(track_type);
```

### 18. certificates (Completion Certificates)
```sql
CREATE TABLE certificates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_profile_id UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
    teacher_profile_id UUID REFERENCES teacher_profiles(id),
    course_id UUID REFERENCES courses(id),
    
    certificate_number VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    issue_date DATE NOT NULL,
    expiry_date DATE,
    
    -- Verification
    verification_hash VARCHAR(255) UNIQUE NOT NULL,
    verification_url TEXT,
    is_verified BOOLEAN DEFAULT TRUE,
    
    -- File
    pdf_url TEXT NOT NULL,
    
    -- Metadata
    grade VARCHAR(10), -- e.g., "A+", "Pass"
    honors TEXT, -- e.g., "With Distinction"
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_certificates_student_id ON certificates(student_profile_id);
CREATE INDEX idx_certificates_verification_hash ON certificates(verification_hash);
```

## Communication Tables

### 19. chat_messages (In-App Messaging)
```sql
CREATE TABLE chat_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    recipient_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    booking_id UUID REFERENCES bookings(id), -- Optional: link to specific class
    
    message_text TEXT NOT NULL,
    message_type VARCHAR(30) DEFAULT 'text' CHECK (message_type IN ('text', 'image', 'file', 'voice')),
    media_url TEXT,
    file_name VARCHAR(255),
    file_size INTEGER,
    
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP WITH TIME ZONE,
    is_deleted BOOLEAN DEFAULT FALSE,
    deleted_at TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_chat_messages_sender_id ON chat_messages(sender_id);
CREATE INDEX idx_chat_messages_recipient_id ON chat_messages(recipient_id);
CREATE INDEX idx_chat_messages_created_at ON chat_messages(created_at);
CREATE INDEX idx_chat_messages_booking_id ON chat_messages(booking_id);
```

### 20. notifications (Push/Email/SMS Notifications)
```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    notification_type VARCHAR(50) NOT NULL, -- e.g., "class_reminder", "booking_confirmation", "payment_received"
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    
    -- Channels
    send_push BOOLEAN DEFAULT TRUE,
    send_email BOOLEAN DEFAULT FALSE,
    send_sms BOOLEAN DEFAULT FALSE,
    
    -- Status
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP WITH TIME ZONE,
    sent_at TIMESTAMP WITH TIME ZONE,
    delivered_at TIMESTAMP WITH TIME ZONE,
    
    -- Deep link
    action_url TEXT,
    metadata JSONB,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_type ON notifications(notification_type);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);
```

## Additional Tables

### 21. admin_logs (Admin Actions Audit Trail)
```sql
CREATE TABLE admin_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_user_id UUID NOT NULL REFERENCES users(id),
    action_type VARCHAR(100) NOT NULL, -- e.g., "teacher_verified", "user_suspended", "refund_processed"
    target_type VARCHAR(50), -- e.g., "teacher_profile", "user", "booking"
    target_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_admin_logs_admin_id ON admin_logs(admin_user_id);
CREATE INDEX idx_admin_logs_action_type ON admin_logs(action_type);
CREATE INDEX idx_admin_logs_created_at ON admin_logs(created_at);
```

### 22. support_tickets (Customer Support)
```sql
CREATE TABLE support_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100), -- e.g., "technical", "payment", "account", "complaint"
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    
    status VARCHAR(30) DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'waiting_customer', 'resolved', 'closed')),
    assigned_to UUID REFERENCES users(id),
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_support_tickets_user_id ON support_tickets(user_id);
CREATE INDEX idx_support_tickets_status ON support_tickets(status);
CREATE INDEX idx_support_tickets_created_at ON support_tickets(created_at);
```

## Database Extensions & Configuration

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable pg_trgm for better text search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Add trigram indexes for fuzzy search on teacher names
CREATE INDEX idx_teacher_profiles_full_name_trgm ON user_profiles USING GIN (full_name gin_trgm_ops);
```

## Notes

1. **Soft Deletes**: Most tables use `deleted_at` for soft deletes instead of hard deletes
2. **Timestamps**: All tables have `created_at` and `updated_at` for audit trails
3. **UUIDs**: Primary keys use UUID for better security and distributed systems compatibility
4. **JSONB**: Flexible fields use JSONB for extensibility
5. **Indexes**: Strategic indexes added for common query patterns
6. **Foreign Keys**: All relationships enforced with foreign key constraints
7. **Check Constraints**: Data integrity enforced at database level

---

**Next Steps:**
1. Create migration scripts for each table
2. Set up database connection in backend
3. Implement repository layer for database operations
4. Create seed data for development environment
