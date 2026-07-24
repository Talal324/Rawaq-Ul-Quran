# 🎨 Rawaq Ul Quran - Complete Design System

## Overview
Comprehensive design system for Rawaq Ul Quran application covering colors, typography, components, and UI patterns.

---

## 1. 🌈 Color Palette

### Primary Colors
```css
/* Deep Green - Islam, Trust, Growth */
--color-primary-900: #0d3320;
--color-primary-800: #1a5c3a;  /* Main Brand Color */
--color-primary-700: #237a4e;
--color-primary-600: #2d8f5f;
--color-primary-500: #3aa872;
--color-primary-400: #5bc48b;
--color-primary-300: #85dbaa;
--color-primary-200: #b0eec9;
--color-primary-100: #dcf9e6;
--color-primary-50:  #f0fcf5;

/* Gold - Premium, Sacred, Achievement */
--color-gold-900: #8b6d2a;
--color-gold-800: #a38234;
--color-gold-700: #bd973d;
--color-gold-600: #d4a843;  /* Main Accent */
--color-gold-500: #e3bc5c;
--color-gold-400: #edc972;
--color-gold-300: #f3d68a;
--color-gold-200: #f8e3a3;
--color-gold-100: #fbefbc;
--color-gold-50:  #fdf7e6;
```

### Neutral Colors
```css
/* Charcoal - Text, Authority */
--color-charcoal-900: #1a252f;
--color-charcoal-800: #2c3e50;  /* Primary Text */
--color-charcoal-700: #3d5063;
--color-charcoal-600: #4f6377;
--color-charcoal-500: #61768b;
--color-charcoal-400: #7b8ea0;
--color-charcoal-300: #95a6b5;
--color-charcoal-200: #b0bcc5;
--color-charcoal-100: #cbd3da;
--color-charcoal-50:  #e6e9ec;

/* Cream - Backgrounds, Warmth */
--color-cream-900: #c9bfa8;
--color-cream-800: #d6ceb9;
--color-cream-700: #e3dcc9;
--color-cream-600: #f0ead9;
--color-cream-500: #f5f0e6;  /* Main Background */
--color-cream-400: #f8f5ed;
--color-cream-300: #faf8f2;
--color-cream-200: #fcfbf7;
--color-cream-100: #fefdfb;
--color-cream-50:  #fffefc;

/* Gray - Secondary Elements */
--color-gray-900: #1a1a1a;
--color-gray-800: #333333;
--color-gray-700: #4d4d4d;
--color-gray-600: #666666;
--color-gray-500: #808080;
--color-gray-400: #999999;
--color-gray-300: #b3b3b3;
--color-gray-200: #cccccc;
--color-gray-100: #e6e6e6;
--color-gray-50:  #f5f5f5;  /* Page Background */
```

### Semantic Colors
```css
/* Success */
--color-success: #2d8f5f;
--color-success-light: #e6f4ea;
--color-success-dark: #1a5c3a;

/* Error */
--color-error: #dc3545;
--color-error-light: #fde8e9;
--color-error-dark: #a71d2a;

/* Warning */
--color-warning: #ffc107;
--color-warning-light: #fff8e1;
--color-warning-dark: #c99a05;

/* Info */
--color-info: #17a2b8;
--color-info-light: #e3f6f8;
--color-info-dark: #0f6d7a;
```

### Gradients
```css
/* Primary Gradient */
--gradient-primary: linear-gradient(135deg, #1a5c3a 0%, #0d3320 100%);

/* Gold Gradient */
--gradient-gold: linear-gradient(135deg, #d4a843 0%, #8b6d2a 100%);

/* Islamic Pattern Background */
--gradient-islamic: linear-gradient(135deg, #1a5c3a 0%, #2d8f5f 50%, #1a5c3a 100%);

/* Card Gradient */
--gradient-card: linear-gradient(180deg, #ffffff 0%, #f8f5ed 100%);

/* Dark Mode Gradient */
--gradient-dark: linear-gradient(135deg, #0d3320 0%, #1a252f 100%);
```

---

## 2. 🔤 Typography

### Font Families
```css
/* English Headings */
--font-heading: 'Poppins', sans-serif;

/* English Body */
--font-body: 'Inter', sans-serif;

/* Arabic/Quran Text */
--font-arabic: 'Amiri', serif;
--font-quran: 'Scheherazade New', serif;

/* Urdu Text */
--font-urdu: 'Jameel Noori Nastaleeq', sans-serif;

/* Numbers/Stats */
--font-mono: 'Inter', sans-serif;
```

### Font Weights
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Font Sizes (Mobile First)
```css
/* Display */
--text-display-lg: 48px;    /* Hero sections */
--text-display-md: 40px;    /* Major headings */
--text-display-sm: 32px;    /* Section titles */

/* Headings */
--text-h1: 32px;            /* Page titles */
--text-h2: 28px;            /* Section headers */
--text-h3: 24px;            /* Subsections */
--text-h4: 20px;            /* Card titles */
--text-h5: 18px;            /* Small headers */
--text-h6: 16px;            /* Label headers */

/* Body */
--text-body-lg: 18px;       /* Large body text */
--text-body-md: 16px;       /* Standard body */
--text-body-sm: 14px;       /* Small text */
--text-body-xs: 12px;       /* Captions */

/* Special */
--text-quran: 24px;         /* Quran verses */
--text-arabic: 20px;        /* Arabic text */
--text-urdu: 18px;          /* Urdu text */
```

### Line Heights
```css
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
--line-height-loose: 2.0;
```

### Letter Spacing
```css
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.02em;
--letter-spacing-wider: 0.05em;
```

---

## 3. 📏 Spacing System (8px Grid)

### Base Units
```css
--space-0: 0;
--space-1: 4px;
--space-2: 8px;    /* Base unit */
--space-3: 12px;
--space-4: 16px;   /* Common padding */
--space-5: 20px;
--space-6: 24px;   /* Section spacing */
--space-7: 28px;
--space-8: 32px;
--space-9: 36px;
--space-10: 40px;
--space-12: 48px;
--space-14: 56px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Component Spacing
```css
/* Card Padding */
--card-padding-sm: 12px;
--card-padding-md: 16px;
--card-padding-lg: 20px;
--card-padding-xl: 24px;

/* Button Padding */
--button-padding-x: 16px;
--button-padding-y: 12px;
--button-padding-sm-x: 12px;
--button-padding-sm-y: 8px;
--button-padding-lg-x: 24px;
--button-padding-lg-y: 16px;

/* Input Padding */
--input-padding-x: 16px;
--input-padding-y: 12px;

/* Section Spacing */
--section-spacing-sm: 24px;
--section-spacing-md: 32px;
--section-spacing-lg: 48px;
--section-spacing-xl: 64px;
```

---

## 4. 🔲 Border Radius

```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;     /* Buttons, inputs */
--radius-lg: 12px;    /* Cards */
--radius-xl: 16px;    /* Bottom sheets, modals */
--radius-2xl: 24px;
--radius-full: 9999px; /* Pills, avatars */
```

---

## 5. 🌊 Shadows

### Elevation Levels
```css
/* Light Shadows */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);

/* Colored Shadows */
--shadow-primary: 0 4px 14px rgba(26, 92, 58, 0.4);
--shadow-gold: 0 4px 14px rgba(212, 168, 67, 0.4);
--shadow-success: 0 4px 14px rgba(45, 143, 95, 0.4);
--shadow-error: 0 4px 14px rgba(220, 53, 69, 0.4);

/* Islamic Pattern Shadow */
--shadow-islamic: 
  0 4px 6px rgba(0, 0, 0, 0.1),
  0 2px 4px rgba(26, 92, 58, 0.1),
  inset 0 1px 0 rgba(255, 255, 255, 0.1);
```

---

## 6. 🎯 Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--gradient-primary);
  color: #ffffff;
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-body-md);
  box-shadow: var(--shadow-primary);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(26, 92, 58, 0.5);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: #ffffff;
  color: var(--color-primary-800);
  border: 2px solid var(--color-primary-800);
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-body-md);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-primary-50);
}
```

#### Gold Button (Premium)
```css
.btn-gold {
  background: var(--gradient-gold);
  color: #ffffff;
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--radius-md);
  font-family: var(--font-heading);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-body-md);
  box-shadow: var(--shadow-gold);
}
```

#### Icon Button
```css
.btn-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: var(--color-gray-50);
  color: var(--color-charcoal-800);
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background: var(--color-primary-100);
  color: var(--color-primary-800);
}
```

### Cards

#### Standard Card
```css
.card {
  background: #ffffff;
  border-radius: var(--radius-lg);
  padding: var(--card-padding-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-cream-300);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

#### Teacher Card
```css
.card-teacher {
  background: #ffffff;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-cream-300);
}

.card-teacher-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: var(--gradient-islamic);
}

.card-teacher-content {
  padding: var(--card-padding-lg);
}

.card-teacher-rating {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-gold-600);
  font-weight: var(--font-weight-semibold);
}
```

#### Progress Card
```css
.card-progress {
  background: var(--gradient-card);
  border-radius: var(--radius-lg);
  padding: var(--card-padding-lg);
  border: 2px solid var(--color-primary-100);
}

.progress-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    var(--color-primary-600) 0% 78%,
    var(--color-cream-200) 78% 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  padding: var(--input-padding-y) var(--input-padding-x);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  color: var(--color-charcoal-800);
  background: #ffffff;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-600);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.input::placeholder {
  color: var(--color-gray-400);
}

.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  box-shadow: 0 0 0 3px var(--color-error-light);
}
```

#### Search Input
```css
.input-search {
  position: relative;
}

.input-search input {
  padding-left: 48px;
  border-radius: var(--radius-full);
  background: var(--color-gray-50);
  border: none;
}

.input-search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-gray-400);
}
```

### Navigation

#### Bottom Navigation
```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  border-top: 1px solid var(--color-cream-300);
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--color-gray-400);
  transition: all 0.3s ease;
}

.bottom-nav-item.active {
  color: var(--color-primary-800);
}

.bottom-nav-item-icon {
  font-size: 24px;
}

.bottom-nav-item-label {
  font-size: var(--text-body-xs);
  font-weight: var(--font-weight-medium);
}
```

#### Top App Bar
```css
.top-app-bar {
  height: 64px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-4);
  color: #ffffff;
  box-shadow: var(--shadow-md);
}

.top-app-bar-title {
  font-family: var(--font-heading);
  font-size: var(--text-h4);
  font-weight: var(--font-weight-semibold);
}
```

### Badges

#### Rating Badge
```css
.badge-rating {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  background: var(--color-gold-100);
  color: var(--color-gold-800);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-full);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-semibold);
}
```

#### Status Badge
```css
.badge-status {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-body-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
}

.badge-status-active {
  background: var(--color-success-light);
  color: var(--color-success-dark);
}

.badge-status-pending {
  background: var(--color-warning-light);
  color: var(--color-warning-dark);
}

.badge-status-inactive {
  background: var(--color-gray-100);
  color: var(--color-gray-600);
}
```

---

## 7. 🎨 Islamic Patterns & Decorations

### Geometric Patterns
```css
.islamic-pattern-border {
  border: 2px solid var(--color-gold-600);
  position: relative;
}

.islamic-pattern-border::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  border: 1px dashed var(--color-gold-400);
  pointer-events: none;
}

.arabesque-background {
  background-image: 
    radial-gradient(circle at 50% 50%, var(--color-primary-800) 1px, transparent 1px),
    radial-gradient(circle at 50% 50%, var(--color-primary-800) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  opacity: 0.1;
}
```

### Calligraphy Accents
```css
.bismillah-header {
  font-family: var(--font-arabic);
  font-size: var(--text-h2);
  color: var(--color-gold-600);
  text-align: center;
  margin-bottom: var(--space-6);
}

.quran-verse {
  font-family: var(--font-quran);
  font-size: var(--text-quran);
  line-height: var(--line-height-loose);
  color: var(--color-charcoal-800);
  text-align: right;
  direction: rtl;
  padding: var(--space-6);
  background: var(--color-cream-50);
  border-right: 4px solid var(--color-primary-600);
  border-radius: var(--radius-md);
}
```

---

## 8. 🌓 Dark Mode

### Dark Mode Colors
```css
[data-theme="dark"] {
  --color-background: #0d3320;
  --color-surface: #1a252f;
  --color-surface-elevated: #2c3e50;
  --color-text-primary: #f5f0e6;
  --color-text-secondary: #cbd3da;
  --color-border: #3d5063;
  
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.4);
}
```

### Dark Mode Adjustments
```css
[data-theme="dark"] .card {
  background: var(--color-surface);
  border-color: var(--color-border);
  box-shadow: var(--shadow-card);
}

[data-theme="dark"] .input {
  background: var(--color-surface-elevated);
  border-color: var(--color-border);
  color: var(--color-text-primary);
}

[data-theme="dark"] .bottom-nav {
  background: var(--color-surface);
  border-top-color: var(--color-border);
}
```

---

## 9. ♿ Accessibility

### Focus States
```css
.focus-visible {
  outline: 3px solid var(--color-primary-600);
  outline-offset: 2px;
}

.focus-ring {
  box-shadow: 0 0 0 3px var(--color-primary-100);
}
```

### Contrast Ratios
- Normal text: Minimum 4.5:1 contrast ratio
- Large text: Minimum 3:1 contrast ratio
- UI components: Minimum 3:1 contrast ratio
- Icons with meaning: Minimum 3:1 contrast ratio

### Touch Targets
- Minimum size: 48x48px
- Recommended spacing between targets: 8px
- Critical actions: 56x56px minimum

---

## 10. 📱 Responsive Breakpoints

```css
/* Mobile (Default) */
--breakpoint-xs: 0;

/* Tablet Portrait */
--breakpoint-sm: 640px;

/* Tablet Landscape */
--breakpoint-md: 768px;

/* Desktop */
--breakpoint-lg: 1024px;

/* Large Desktop */
--breakpoint-xl: 1280px;

/* Extra Large Desktop */
--breakpoint-2xl: 1536px;
```

---

## 11. 🎭 Animations & Transitions

### Timing Functions
```css
--transition-fast: 150ms ease;
--transition-normal: 300ms ease;
--transition-slow: 500ms ease;
--transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Animations
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.animate-fade-in {
  animation: fadeIn var(--transition-normal);
}

.animate-slide-up {
  animation: slideUp var(--transition-normal);
}

.animate-pulse {
  animation: pulse 2s infinite;
}

.skeleton-loading {
  background: linear-gradient(
    90deg,
    var(--color-gray-100) 0%,
    var(--color-gray-200) 50%,
    var(--color-gray-100) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

---

## 12. 🧩 Component Library Reference

### Icons
- **Primary Library**: Phosphor Icons
- **Secondary Library**: FontAwesome 6
- **Style**: Line icons (inactive), Fill icons (active)
- **Size**: 24px standard, 20px dense, 32px large

### Illustrations
- Style: Modern Islamic geometric patterns
- Color palette: Match brand colors
- Format: SVG for scalability
- Usage: Onboarding, empty states, success screens

### Images
- Aspect ratios: 1:1 (avatars), 16:9 (banners), 4:5 (teacher photos)
- Quality: Optimized WebP format
- Loading: Lazy loading with skeleton placeholders

---

## 13. 📋 Implementation Checklist

### For Developers
- [ ] Install required fonts (Google Fonts CDN)
- [ ] Set up CSS custom properties in root stylesheet
- [ ] Create component library based on specs
- [ ] Implement dark mode toggle
- [ ] Add RTL support for Arabic/Urdu
- [ ] Test accessibility compliance
- [ ] Optimize for performance

### For Designers
- [ ] Create Figma design file with components
- [ ] Build design system library in Figma
- [ ] Create screen mockups using components
- [ ] Export assets in multiple formats
- [ ] Document usage guidelines

---

## 14. 🎯 Usage Examples

### Button Usage
```html
<!-- Primary CTA -->
<button class="btn-primary">
  Book Class Now
</button>

<!-- Secondary Action -->
<button class="btn-secondary">
  View Profile
</button>

<!-- Premium Feature -->
<button class="btn-gold">
  Upgrade to Premium
</button>
```

### Card Usage
```html
<!-- Teacher Card -->
<div class="card-teacher">
  <img src="teacher.jpg" alt="Qari Usman" class="card-teacher-image">
  <div class="card-teacher-content">
    <h3>Qari Usman</h3>
    <div class="card-teacher-rating">
      <span>⭐</span>
      <span>4.9</span>
      <span>(120 reviews)</span>
    </div>
    <p>$15/hour • Tajweed Specialist</p>
  </div>
</div>
```

### Progress Indicator
```html
<div class="card-progress">
  <div class="progress-circle">
    <span>78%</span>
  </div>
  <h4>Juz 1 Memorization</h4>
  <p>Surah Al-Baqarah: Verses 1-50</p>
</div>
```

---

## 15. 📚 Resources

### Font Links
- Poppins: https://fonts.google.com/specimen/Poppins
- Inter: https://fonts.google.com/specimen/Inter
- Amiri: https://fonts.google.com/specimen/Amiri
- Scheherazade New: https://fonts.google.com/specimen/Scheherazade+New

### Icon Libraries
- Phosphor Icons: https://phosphoricons.com/
- FontAwesome 6: https://fontawesome.com/

### Color Tools
- Coolors: https://coolors.co/
- Adobe Color: https://color.adobe.com/

---

**Design System Version:** 1.0.0  
**Last Updated:** 2026  
**Maintained By:** Rawaq Ul Quran Design Team
