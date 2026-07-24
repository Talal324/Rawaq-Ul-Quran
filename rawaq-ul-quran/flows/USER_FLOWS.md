# 🔄 Rawaq Ul Quran - Complete User Flows

## Overview
Detailed user journey flows for all user roles across the platform.

---

## 📊 FLOW CATEGORIES

| Flow Type | Count | Description |
|-----------|-------|-------------|
| Authentication Flows | 5 | Sign up, login, verification |
| Teacher Flows | 8 | Profile setup to earning |
| Student Flows | 7 | Learning journey |
| Parent Flows | 6 | Child management & tracking |
| Booking & Class Flows | 4 | Complete class lifecycle |
| Payment Flows | 4 | Transactions & withdrawals |
| **Total** | **34 flows** | Complete coverage |

---

## A. AUTHENTICATION FLOWS

### Flow 1: New User Sign Up (Student)
```
┌─────────────┐
│   Splash    │
│  (3 seconds)│
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Onboarding  │
│   Screen 1  │
└──────┬──────┘
       │ Swipe
       ▼
┌─────────────┐
│ Onboarding  │
│   Screen 2  │
└──────┬──────┘
       │ Swipe
       ▼
┌─────────────┐
│ Onboarding  │
│   Screen 3  │
└──────┬──────┘
       │ Get Started
       ▼
┌─────────────┐
│   Select    │
│ "I'm Student"│
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Sign Up   │
│   Form      │
└──────┬──────┘
       │ Submit
       ▼
┌─────────────┐
│   OTP       │
│ Verification│
└──────┬──────┘
       │ Verify
       ▼
┌─────────────┐
│   Home      │
│  Dashboard  │
└─────────────┘
```

**Validation Rules:**
- Email: Must be valid format
- Phone: Country code + 10 digits
- Password: Min 8 chars, 1 uppercase, 1 number, 1 special char
- Age: Must be 13+ (or parent consent)

**Error States:**
- Invalid email → Show error message
- Phone already exists → Suggest login
- Weak password → Show requirements
- OTP wrong (3 attempts) → Lock for 15 min

---

### Flow 2: Teacher Sign Up (Extended)
```
Sign Up → OTP Verify → Select "I'm Teacher" 
→ Profile Setup Wizard (8 Steps) → Document Upload 
→ Admin Review → Approval Notification → Go Live
```

#### Step-by-Step Wizard:

**Step 1: Basic Info**
```
Enter Name → Upload Photo → Select Gender → Enter Age
↓
[Continue]
```

**Step 2: Languages**
```
Select Teaching Languages:
☑ Urdu  ☑ English  ☐ Arabic  ☐ Other
↓
[Continue]
```

**Step 3: Qualifications**
```
Add Degree → Institution Name → Year Passed → Upload Certificate
↓
[+ Add Another] or [Continue]
```

**Step 4: Ijazah Details**
```
Have Ijazah? → Yes/No
If Yes: Institute Name → Year → Upload Certificate
↓
[Continue]
```

**Step 5: Specializations**
```
Select Areas:
☑ Tajweed  ☑ Hifz  ☐ Tafsir  ☐ Noorani Qaida
☑ Kids     ☐ Adults ☐ Islamic Studies
↓
[Continue]
```

**Step 6: Teaching Details**
```
Set Hourly Rate ($5-$50) → Available Hours → Timezone
Class Duration Preference (30/45/60 min)
↓
[Continue]
```

**Step 7: Media Upload**
```
Upload Intro Video (30 sec max) → Upload Audio Sample (Tilawat)
↓
[Continue]
```

**Step 8: Bio**
```
Write Teaching Philosophy (500 chars max)
↓
[Submit for Review]
```

**Review Process:**
```
Submission → Admin Notification → Document Verification
→ Background Check (Optional) → Approval/Rejection
→ Email Notification → Profile Goes Live
```

**Timeline:** 24-48 hours for approval

---

### Flow 3: Login Flow
```
┌─────────────┐
│   Login     │
│   Screen    │
└──────┬──────┘
       │ Enter credentials
       ▼
┌─────────────┐
│   Validate  │
│   Credentials│
└──────┬──────┘
       │
    ┌──┴──┐
    │     │
 Success  Failure
    │     │
    ▼     ▼
┌──────┐ ┌──────────┐
│Home  │ │Show Error│
│Dash  │ │Retry     │
└──────┘ └──────────┘
              │
         After 3 failures
              │
              ▼
         ┌──────────┐
         │ CAPTCHA  │
         │ Required │
         └──────────┘
```

**Biometric Login (Optional):**
```
Enable Biometric → Scan Fingerprint/Face → Store Token
→ Next Login: One-tap biometric auth
```

---

### Flow 4: Password Reset
```
Login Screen → Forgot Password → Enter Email/Phone
→ Send Reset Link/OTP → Enter OTP → Set New Password
→ Confirm → Login with New Password
```

**Security Measures:**
- Reset link expires in 1 hour
- Max 3 reset requests per day
- Old passwords cannot be reused
- Password change notification email

---

### Flow 5: Account Deletion
```
Settings → Privacy → Delete Account
→ Select Reason → Enter Password → Confirm
→ 7-day Cooling Period → Permanent Deletion
```

**Data Retention:**
- Personal data: Deleted immediately after cooling period
- Transaction history: Anonymized (legal requirement)
- Class recordings: Deleted if no other participants

---

## B. TEACHER FLOWS

### Flow 6: First Class Preparation
```
Profile Approved → Email Notification → Login
→ Complete Onboarding Tutorial → Set Availability
→ Wait for Booking → Receive Booking Notification
→ Accept Booking → Prepare Lesson → Start Class
```

**Onboarding Tutorial:**
1. How to use video classroom (2 min video)
2. Setting up your teaching space (tips)
3. Best practices for online teaching (guide)
4. Platform rules & guidelines (must read)

---

### Flow 7: Daily Teaching Flow
```
Morning:
Login → Check Today's Schedule → Review Student Notes
→ Test Equipment (camera/mic) → Wait for Class

Before Each Class (15 min prior):
Notification → Open Class Room → Test Audio/Video
→ Review Previous Notes → Prepare Materials

During Class:
Join → Take Attendance → Teach → Assign Homework
→ Mark Completion → Submit Notes

After Class:
Submit Summary → Update Progress → Wait for Rating
→ Earnings Credited (after 24 hours)
```

---

### Flow 8: Earning Withdrawal
```
Earnings Dashboard → Check Available Balance
→ Click Withdraw → Enter Amount (min $50)
→ Select Method (Bank/PayPal) → Confirm
→ Processing (1-3 business days) → Received
```

**Withdrawal Rules:**
- Minimum: $50
- Maximum per transaction: $500
- Frequency: Once per week (or daily for premium teachers)
- Fee: Free for first withdrawal/month, then $2

---

### Flow 9: Handling Cancellations
```
Student Cancels (>24h before):
Notification → Slot Becomes Available → No Penalty

Student Cancels (<24h before):
Notification → 50% Compensation → Slot Blocked

Teacher Cancels:
Initiate Cancel → Select Reason → Notify Student
→ Admin Alert → Penalty (3 cancellations = suspension)

Reschedule Request:
Receive Request → Check Availability → Propose New Time
→ Student Confirms → Updated Calendar
```

---

### Flow 10: Responding to Reviews
```
New Review Notification → Open Reviews Section
→ Read Review → Rate Experience
→ Write Response (optional) → Submit
→ Public Display (after moderation)
```

**Response Guidelines:**
- Professional tone only
- No personal information
- Address concerns constructively
- Thank for positive feedback

---

## C. STUDENT FLOWS

### Flow 11: Finding & Booking a Teacher
```
Home → Search Teachers → Apply Filters
→ Browse Results → View Teacher Profile
→ Watch Intro Video → Read Reviews
→ Select Package (1/4/8/12 classes)
→ Choose Date/Time → Confirm Booking
→ Payment → Booking Confirmed
```

**Filter Options:**
- Price range slider ($5-$50/hr)
- Rating (4+ stars toggle)
- Language (multi-select)
- Gender preference
- Specialty tags
- Availability time slots
- Experience years

**Booking Confirmation:**
```
Success Screen → Calendar Invite Added
→ Email Confirmation → SMS Reminder Set
→ Teacher Notified → Class Appears in "My Classes"
```

---

### Flow 12: Attending First Class
```
Day Before: Reminder Notification
1 Hour Before: Push Notification + SMS
15 Min Before: "Get Ready" Notification

Join Class (5 min early):
Open App → My Classes → Click "Join"
→ Test Audio/Video → Enter Virtual Waiting Room
→ Teacher Admits → Class Begins

During Class:
Listen → Repeat → Ask Questions → Take Notes
→ Use Whiteboard (if needed)

End of Class:
Teacher Summary → Homework Assigned
→ Next Class Scheduled (optional) → Rate Teacher
→ Download Recording (if available)
```

---

### Flow 13: Learning Progress Tracking
```
After Each Class:
Progress Auto-Updated → Surah/Verses Marked
→ Streak Counter Updated → Badge Check

Weekly:
Progress Report Generated → Email to Student/Parent
→ Weak Areas Identified → Practice Suggestions

Monthly:
Comprehensive Report → Certificate Eligibility Check
→ Goal Adjustment Recommendations
```

**Progress Metrics:**
- Classes attended
- Verses learned
- Revision completion
- Tajweed score improvement
- Time spent practicing
- Quiz scores

---

### Flow 14: Completing a Course
```
Final Class Completed → All Requirements Met
→ Final Assessment (optional) → Teacher Recommendation
→ Generate Certificate → Notification
→ Download/Share Certificate → Order Physical Copy (paid)
```

**Certificate Includes:**
- Student name
- Course completed
- Teacher name & signature
- Date of completion
- Verification QR code
- Unique certificate ID

---

## D. PARENT FLOWS

### Flow 15: Adding Child Profile
```
Parent Dashboard → Add Child → Enter Details
(Name, Age, Gender, Learning Goal)
→ Set Current Level → Choose Preferences
(Language, Teacher Gender, Schedule)
→ Save → Child Profile Created
```

**Multiple Children:**
```
Add Second Child → Separate Profile
→ Independent Progress Tracking
→ Combined Parent Dashboard View
```

---

### Flow 16: Monitoring Child Progress
```
Daily:
Login → Parent Dashboard → Check Today's Classes
→ View Completed Classes → Review Teacher Notes

Weekly:
Open Progress Reports → Compare with Previous Week
→ Identify Improvement Areas → Message Teacher
→ Adjust Schedule if Needed

Monthly:
Detailed Report → Certificate Progress
→ Spending Analysis → Plan Next Month
```

**Alerts & Notifications:**
- Class reminder (1 hour before)
- Class completed summary
- Low attendance warning
- Excellent performance praise
- Payment due reminder

---

### Flow 17: Managing Payments for Children
```
View All Children → Select Child → See Payment History
→ Add Money to Wallet → Auto-Deduct for Classes
→ Monthly Statement → Export for Records
```

**Payment Controls:**
- Set monthly budget limit
- Auto-recharge threshold
- Spending notifications
- Receipt storage

---

## E. BOOKING & CLASS FLOWS

### Flow 18: Complete Booking Lifecycle
```
1. SEARCH
   Home → Search → Filters → Results

2. SELECT
   View Profile → Check Availability → Read Reviews

3. BOOK
   Choose Package → Select Time → Add Note → Confirm

4. PAY
   Wallet/Card → Payment Gateway → Confirmation

5. PREPARE
   Calendar Added → Reminders Set → Teacher Notified

6. ATTEND
   Join Class → Learn → Interact

7. COMPLETE
   Summary → Homework → Rating → Progress Update

8. FOLLOW-UP
   Next Booking → Practice → Certificate Path
```

---

### Flow 19: Rescheduling a Class
```
My Classes → Select Class → Reschedule
→ View Teacher Availability → Pick New Slot
→ Confirm → Both Parties Notified
→ Calendar Updated
```

**Rules:**
- Free reschedule up to 24 hours before
- Late reschedule: 50% charge
- Maximum 2 reschedules per booking
- Teacher must confirm within 2 hours

---

### Flow 20: Joining Video Classroom
```
Class Time Approaches → "Join" Button Active
→ Click Join → Permission Request (Camera/Mic)
→ Allow → Loading Screen → Enter Waiting Room
→ Teacher Admits → Video Connected

In-Class Features:
- Mute/Unmute toggle
- Camera on/off
- Chat panel
- Whiteboard access
- Screen share (teacher)
- Raise hand feature
- Emoji reactions
- Settings (audio/video quality)

Ending Class:
Teacher Ends → Summary Screen → Rating Prompt
→ Download Recording → Exit Room
```

---

## F. PAYMENT FLOWS

### Flow 21: Adding Money to Wallet
```
Wallet → Add Money → Enter Amount
→ Select Payment Method (Card/Bank/PayPal)
→ Redirect to Gateway → Authenticate
→ Success → Wallet Updated → Receipt Email
```

**Payment Methods:**
- Credit/Debit Card (Stripe)
- PayPal
- JazzCash (Pakistan)
- EasyPaisa (Pakistan)
- Bank Transfer

**Auto-Recharge Option:**
```
Enable Auto-Recharge → Set Threshold ($20)
→ Set Recharge Amount ($50)
→ When balance < $20 → Auto-charge $50
→ Notification sent
```

---

### Flow 22: Paying for Class
```
Booking Confirmation → Payment Screen
→ Select: Wallet / Card / Other
→ If Wallet: Deduct Balance → Confirm
→ If Card: Enter Details → Process → Confirm
→ Payment Success → Booking Confirmed
```

**Refund Policy:**
```
Cancel >24h before: Full refund
Cancel <24h before: 50% refund
Teacher cancellation: Full refund + credit
Technical issue: Full refund or reschedule
```

---

### Flow 23: Teacher Payout
```
Earnings Dashboard → Available Balance ≥ $50
→ Withdraw → Select Bank Account
→ Enter Amount → Confirm
→ Admin Approval (automated)
→ Transfer Initiated (1-3 days)
→ Teacher Notified → Transaction Recorded
```

**Payout Schedule:**
- Standard: Weekly (every Monday)
- Premium Teachers: Daily (for 5% fee)
- Minimum: $50
- Maximum per week: $2000

---

### Flow 24: Dispute Resolution
```
Issue Raised → Support Ticket Created
→ Admin Review → Evidence Collection
→ Decision Made (48 hours)
→ Refund/Adjustment → Both Parties Notified
→ Appeal Option (7 days)
```

**Common Disputes:**
- Class quality issues
- Technical problems
- No-show conflicts
- Payment discrepancies

---

## G. NOTIFICATION FLOWS

### Flow 25: Notification Types & Triggers

**Push Notifications:**
```
Class Reminder → 1 hour before class
New Message → Instant when message received
Booking Confirmation → Immediately after booking
Payment Received → Teacher: when payment arrives
Progress Update → Weekly summary
System Announcement → Admin broadcasts
```

**Email Notifications:**
```
Welcome Email → After sign up
Booking Confirmation → With calendar invite
Class Summary → After each class
Weekly Report → Every Monday
Monthly Statement → 1st of each month
Password Reset → On request
Account Updates → Profile changes
```

**SMS Notifications:**
```
OTP → During authentication
Class Reminder → 30 minutes before (if push failed)
Payment Alerts → Large transactions
Urgent Updates → System maintenance
```

---

## H. ERROR HANDLING FLOWS

### Flow 26: Network Connection Lost
```
Detect No Internet → Show Banner "No Connection"
→ Queue Actions Locally → Retry Every 30s
→ Connection Restored → Sync Queued Actions
→ Confirm Success to User
```

**Offline Capabilities:**
- View downloaded Quran content
- Access cached schedules
- Draft messages
- Review past lessons

---

### Flow 27: Video Call Failed
```
Connection Failed → Show Error "Can't Connect"
→ Suggest Troubleshooting:
  1. Check internet
  2. Restart app
  3. Switch network
→ Auto-Reconnect Attempt (3 times)
→ If Still Failed: Reschedule Option + Credit
```

---

### Flow 28: Payment Failed
```
Payment Declined → Show Specific Error
(Card expired / Insufficient funds / Bank declined)
→ Suggest Alternative Method
→ Retry Option → Contact Support if Persistent
```

---

## I. ANALYTICS & REPORTING FLOWS

### Flow 29: Teacher Performance Analytics
```
Dashboard → Analytics → Select Time Range
→ View Metrics:
  - Total classes taught
  - Average rating
  - Earnings breakdown
  - Student retention rate
  - Peak hours
→ Export Report (PDF/Excel)
```

---

### Flow 30: Parent Insights
```
Parent Dashboard → Insights → Select Child
→ View:
  - Attendance percentage
  - Progress velocity
  - Strength areas
  - Improvement needed
  - Teacher comparison
→ Recommendations Generated
```

---

## J. ADMIN FLOWS

### Flow 31: Teacher Verification
```
New Application → Admin Dashboard → Review Queue
→ Check Documents → Verify Certificates
→ Background Check (if applicable)
→ Approve/Reject → Notification Sent
→ If Approved: Profile Goes Live
→ If Rejected: Reason Provided → Reapply Option
```

---

### Flow 32: Handling Support Tickets
```
Ticket Created → Assigned to Agent
→ Priority Set (Low/Medium/High/Urgent)
→ Investigation → Response Drafted
→ Send to User → Await Reply
→ Resolution → Close Ticket → Satisfaction Survey
```

---

### Flow 33: Content Management
```
Admin Panel → Content → Select Type
(Quran Data / Courses / Blog / FAQs)
→ Add/Edit/Delete → Preview
→ Publish → Cache Cleared → Live
```

---

### Flow 34: Platform Analytics
```
Admin Dashboard → Analytics → Real-time Metrics
- Active users
- Classes in progress
- Revenue today/week/month
- New signups
- Popular teachers
- Geographic distribution
→ Export → Share with Stakeholders
```

---

## ✅ FLOW IMPLEMENTATION CHECKLIST

For Each Flow:
- [ ] Flow diagram created
- [ ] All states identified (success, error, edge cases)
- [ ] Validation rules documented
- [ ] Notification triggers defined
- [ ] API endpoints mapped
- [ ] UI screens linked
- [ ] Error messages written
- [ ] Accessibility considered
- [ ] Performance optimized
- [ ] Tested end-to-end

---

**Document Version:** 1.0.0  
**Total Flows:** 34  
**Last Updated:** 2026
