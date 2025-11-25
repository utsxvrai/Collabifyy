# Collabifyy Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS platforms like Linear, Stripe, and Vercel. The design should communicate trust, innovation, and seamless AI-powered connectivity between brands and creators.

## Core Design Principles
- **Tech-Forward Elegance**: Clean, modern aesthetic that reflects AI sophistication
- **Dual-Audience Focus**: Clear pathways for both creators and brands
- **Trust & Credibility**: Professional polish that reassures enterprise brands and empowers creators

## Typography System

**Font Stack**:
- Primary: Inter (Google Fonts) - for UI elements, body text
- Display: Cal Sans or Space Grotesk (Google Fonts) - for hero headlines

**Hierarchy**:
- Hero Headline: 4xl/5xl (mobile/desktop), bold weight
- Section Headlines: 3xl/4xl, semibold
- Feature Titles: xl/2xl, semibold
- Body Text: base/lg, regular (400)
- Small Labels: sm, medium (500)
- CTA Buttons: base, semibold

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 to py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for text-heavy sections)

**Grid System**: 12-column grid with responsive breakpoints

## Page Structure & Sections

### 1. Navigation
- Fixed header with logo (left), navigation links (center), "Sign in with Google" button (right)
- Glassmorphic background (backdrop-blur-md) when scrolled
- Navigation links: Features, How It Works, Pricing (optional showcase)

### 2. Hero Section (100vh)
**Layout**: Two-column asymmetric split
- Left (60%): Headline, subheadline, dual CTAs ("Join as Creator" + "Join as Brand")
- Right (40%): Large hero image or abstract illustration

**Content**:
- Headline: "Where Brands & Creators Connect Through AI"
- Subheadline: Brief description of AI-powered matchmaking, campaigns, and payments
- Social proof badges below CTAs: "Trusted by 500+ creators" | "100+ brand partnerships"

### 3. Features Section
**Layout**: Three-column grid (stacks on mobile)

Feature Cards (3 total):
1. **AI Matchmaking**: Icon + title + description (Smart algorithms connecting perfect brand-creator pairs)
2. **Campaign Management**: Icon + title + description (Launch and track campaigns from one dashboard)
3. **Seamless Payments**: Icon + title + description (Automated payment processing and invoicing)

Each card: p-8, subtle border, hover lift effect (translate-y-1)

### 4. How It Works Section
**Layout**: Alternating two-column rows (3 steps total)

Step 1 (Image right): "Sign Up & Create Profile" - Screenshot of onboarding
Step 2 (Image left): "Get Matched by AI" - Visualization of matching algorithm
Step 3 (Image right): "Launch & Manage Campaigns" - Dashboard preview

Each step: Large number badge, headline, description paragraph

### 5. Dual Audience Showcase
**Layout**: Two-column split with distinct styling

Left Column - For Creators:
- Headline: "For Creators"
- Benefits list (4-5 items with checkmarks)
- CTA: "Join as Creator"

Right Column - For Brands:
- Headline: "For Brands"
- Benefits list (4-5 items with checkmarks)
- CTA: "Join as Brand"

### 6. Social Proof / Testimonials
**Layout**: Three-column testimonial cards
- Creator photo (circular, 64px)
- Quote text
- Name + role + platform

### 7. Final CTA Section
**Layout**: Centered, full-width with gradient background treatment
- Headline: "Ready to Transform Your Collaborations?"
- Subheadline: "Join the waitlist today"
- Dual CTAs: "Join as Creator" | "Join as Brand"

### 8. Footer
**Layout**: Four-column grid
- Column 1: Logo + tagline
- Column 2: Product links (Features, How It Works, Pricing)
- Column 3: Company (About, Blog, Careers)
- Column 4: Social links + "Sign in with Google"
- Bottom bar: Copyright + Privacy/Terms links

## Authentication & Waitlist Flow

### Login/Signup Page
- Centered card (max-w-md)
- Collabifyy logo at top
- Headline: "Welcome to Collabifyy"
- "Sign in with Google" button (prominent, w-full)
- Divider with "or"
- Email/password fields (if supporting fallback)

### Post-Login Dashboard (Choice Screen)
**Layout**: Full-screen centered split
- Left card: "Join as Creator" - Icon, description, CTA button
- Right card: "Join as Brand" - Icon, description, CTA button
- Each card: Hover scale effect, distinct gradient accent

### Waitlist Form
**Layout**: Modal or dedicated page (max-w-2xl centered)

Fields:
- User Type (auto-filled: Creator or Brand)
- Full Name
- Email (pre-filled from auth)
- Company/Brand Name (if brand) or Social Handle (if creator)
- Brief message/interest area (textarea)
- Submit to Waitlist button

## Component Library

**Buttons**:
- Primary: Solid with subtle gradient, rounded-lg, px-8 py-3
- Secondary: Outline style with border-2
- Ghost: Text-only with underline on hover
- Icon placement: Icons 16px, ml-2 for trailing

**Cards**:
- Border: border border-neutral-200
- Padding: p-6 to p-8
- Radius: rounded-xl
- Shadow: shadow-sm with hover:shadow-md transition

**Form Inputs**:
- Height: h-12
- Border: border-2 focus state
- Radius: rounded-lg
- Label positioning: mb-2 above input

**Icons**: Use Heroicons (outline style for UI, solid for emphasis)

## Images

### Hero Section
**Primary Hero Image**: Modern workspace or abstract visualization of brand-creator connection
- Placement: Right 40% of hero section
- Style: Subtle gradient overlay, rounded corners
- Size: Approximately 600x700px
- Aesthetic: Professional, diverse creators/brands collaborating

### How It Works Section
**3 Screenshot/Mockup Images**:
1. Onboarding interface mockup
2. AI matching visualization (abstract/interface hybrid)
3. Campaign dashboard screenshot
- Each approximately 500x400px
- Consistent styling with subtle shadows

### For Creators/Brands Section (Optional)
- Background pattern or subtle illustrations behind each column
- Not full images, more decorative elements

**Image Treatment**: All images should have subtle rounded corners (rounded-xl), optional subtle shadow, and maintain consistent visual weight across the page.

## Animation Guidelines
**Minimal & Purposeful**:
- Fade-in on scroll for sections (stagger children by 100ms)
- Button hover: Subtle scale (scale-105) + shadow increase
- Card hover: Lift effect (translate-y-1)
- No parallax, no complex scroll-triggered animations
- Page transitions: Simple fade (200ms)

---

**Design Personality**: Professional yet approachable, innovative but trustworthy, designed to appeal equally to creative individuals and enterprise decision-makers.