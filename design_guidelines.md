# TeckPrints Wind Banner Landing Page - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium e-commerce sites (Shopify) for product showcasing, creative agency sites (Webflow) for bold visual impact, and service platforms (Airbnb) for clear service presentation. The design emphasizes visual impact and conversion optimization.

**Core Principle**: Create an immersive, product-focused experience that demonstrates wind banner quality through interactive elements while maintaining clear conversion paths for the three service offerings (Buy, Rent, Storage).

---

## Typography System

**Primary Font**: Inter or Poppins (Google Fonts)
- Hero Headline: 4xl/5xl/6xl (responsive), font-weight-700
- Section Headings: 3xl/4xl, font-weight-700
- Service Titles: 2xl, font-weight-600
- Body Text: base/lg, font-weight-400
- CTAs: base/lg, font-weight-600, uppercase tracking-wide

**Hierarchy**: Bold, confident headlines with generous letter-spacing for impact. Body text maintains readability with comfortable line-height (1.6-1.8).

---

## Layout System

**Spacing Scale**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent vertical rhythm
- Section padding: py-16 (mobile), py-24 (desktop)
- Component spacing: space-y-8 to space-y-12
- Container: max-w-7xl with px-4/px-6/px-8

**Grid Strategy**:
- Services Section: 3-column grid (lg:grid-cols-3)
- Benefits/Features: 2-column alternating layout (lg:grid-cols-2)
- Gallery: 3-4 column masonry-style grid
- Mobile: All stack to single column

---

## Page Structure & Sections

### 1. Hero Section (80-90vh)
**Layout**: Full-width with centered content overlay
- Animated wind banner element as background (CSS animation simulating fabric waving)
- Headline emphasizing service variety ("Compre, Alugue ou Armazene")
- Subheadline with value proposition
- Dual CTA buttons (primary: "Solicitar Orçamento", secondary: "Ver Produtos")
- Trust indicator below CTAs ("+ de 500 clientes atendidos" or similar)

**Hero Image**: YES - Large hero with animated wind banner visual (can be CSS-created fabric wave effect or actual product image with animation overlay)

### 2. Services Section
**3-Column Grid**:
- Compra (Buy): Icon + title + 3-4 bullet benefits + CTA
- Aluguel (Rent): Icon + title + 3-4 bullet benefits + CTA
- Armazenamento (Storage): Icon + title + 3-4 bullet benefits + CTA

Each card elevated with subtle shadow, hover lift effect

### 3. Interactive Product Showcase
**Full-width**: Demonstration of wind banner sizes/types with interactive elements
- Filterable gallery or size comparison slider
- Product cards with image, dimensions, price starting point
- "Personalizar" CTA on each

### 4. Benefits/Differentials Section
**2-Column Alternating Layout**:
- 4-6 key benefits (Quality, Fast delivery, Custom printing, Weather-resistant materials)
- Alternate image-left/content-right, then content-left/image-right
- Icons for quick scanning

### 5. Social Proof
**3-Column Testimonial Grid** or **Logo Cloud** of clients served
- Customer photos/company logos
- Brief testimonial quotes
- Project type badges

### 6. CTA Section
**Centered, Full-width**:
- Bold headline "Pronto para destacar sua marca?"
- Supporting text
- Large primary CTA button + phone number clickable
- Background: Subtle pattern or gradient overlay

### 7. Footer
**Multi-column** (4 columns desktop, stack mobile):
- TeckPrints logo + brief description
- Services quick links
- Contact information (phone, email, WhatsApp)
- Social media icons
- Newsletter signup form

---

## Component Library

### Buttons
- Primary: Large padding (px-8 py-4), rounded-lg, font-weight-600
- Secondary: Outlined variant, same sizing
- On hero images: Backdrop-blur-md background for readability

### Cards
- Service cards: Rounded-xl, padding-8, shadow-lg, hover:shadow-xl transition
- Product cards: Rounded-lg, image top, content below, subtle border

### Forms
- Contact/Quote form: Single column, generous spacing (space-y-6)
- Input fields: Rounded-lg, border-2, focus states with scale
- Submit button: Full-width primary CTA style

### Icons
**Heroicons** (via CDN) for:
- Service icons (shopping cart, calendar, archive)
- Feature check marks
- Social media
- Navigation arrows

---

## Images

**Hero Section**: Large wind banner in outdoor setting or stylized animated wind banner (fabric wave effect)

**Services Section**: Icon illustrations (not photos)

**Benefits Section**: 
- Photo of wind banners at events/storefronts
- Installation/setup images
- Storage facility (professional, clean)
- Custom printing process

**Gallery Section**: Multiple wind banner products in various sizes and settings

**Placement**: Always use object-cover with proper aspect ratios (16:9 for landscape, 4:3 for product shots)

---

## Animations & Interactions

**Wind Banner Animation** (Hero):
- CSS keyframe animation creating gentle wave/flutter effect
- Continuous loop, subtle and elegant
- Can use transform: skew + translate for fabric movement

**Scroll Animations**: Minimal, tasteful
- Fade-in on scroll for sections (once, not repeated)
- Cards slight lift on hover

**CTA Interactions**:
- Buttons: Scale on hover (scale-105), no active state needed
- Smooth color transitions (transition-all duration-300)

---

## Accessibility

- Semantic HTML throughout (<header>, <nav>, <main>, <section>, <footer>)
- ARIA labels for interactive wind banner animation
- Form labels properly associated
- Keyboard navigation for all interactive elements
- Color contrast ratios meeting WCAG AA standards
- Alt text for all product/service images

---

## Conversion Optimization

**Primary Goal**: Lead capture via quote/contact form
- CTAs present in hero, after each major section, and dedicated CTA section
- WhatsApp integration for instant contact
- Phone number clickable (tel: link)
- Multiple entry points for same conversion goal
- Form fields minimal (name, email, phone, service interest, message)