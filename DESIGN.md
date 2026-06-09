# KRIVOXX DESIGN.MD

Version: 2.0

Project Type: Digital Marketing Agency Website

Framework: Next.js 15 (App Router)

Language: JavaScript (JSX ONLY)

Styling: Module css

Animation: Framer Motion

Icons: Lucide React

Forms: React Hook Form

Validation: Zod

Notifications: Sonner

Deployment: Vercel

---

# PROJECT GOAL

Build a premium, modern, minimalist digital agency website that feels:

* Professional
* Trustworthy
* High-end
* Fast
* Clean
* Conversion-focused

The website should resemble a premium agency rather than a startup landing page.

Visitors should immediately feel:

"We are working with professionals."

---

# CORE DESIGN PHILOSOPHY

Everything should prioritize:

1. Clarity
2. Simplicity
3. Whitespace
4. Strong typography
5. Smooth micro interactions

Avoid:

* Visual clutter
* Excessive gradients
* Heavy shadows
* Flashy effects
* Over-animated sections
* Scroll reveal libraries

The design should feel expensive because of spacing and structure, not because of effects.

---

# DESIGN INSPIRATION

Primary Inspiration:

* Linear
* Stripe
* Framer
* Vercel
* Relume

Visual Style:

Minimal Agency + Premium SaaS

---

# DEVELOPMENT RULES

The entire project must be built using:

JSX

Never use:

* TypeScript
* TSX
* Interfaces
* Types

Use:

.jsx

for all React components.

---

# TECH STACK

Required:

* Next.js 15
* React 19
* JSX
* Module css
* Framer Motion
* Lucide React
* React Hook Form
* Zod
* Sonner

Optional:

* Zustand
* Lenis (disabled by default)

---

# CODE QUALITY RULES

Always:

* Create reusable components
* Keep components small
* Keep logic separated
* Extract repeated UI

Never:

* Create giant page files
* Repeat layouts
* Repeat card designs
* Repeat button designs

---

# COMMENTING STANDARD

Every file should contain short meaningful comments.

Examples:

// Prevent duplicate form submissions

// Keep selected service synced with state

// Animate button interaction

// Close menu on route change

Do not write useless comments.

Bad:

// Create state

// Return component

// Import React

Only comment logic.

---

# COMPONENT CREATION RULE

Every new component must be committed immediately after completion.

Workflow:

Create Component

↓

Test Component

↓

Commit Component

↓

Move To Next Component

Never batch multiple unrelated components into a single commit.

---

# COMMIT FORMAT

Use:

feat(component-name): short description

Examples:

feat(navbar): create responsive navigation

feat(hero): build hero section

feat(service-card): add reusable service card

feat(contact-form): create inquiry form

fix(navbar): mobile menu alignment

refactor(button): simplify variants

---

# BRANCH STRUCTURE

main

develop

feature/navbar

feature/hero

feature/services

feature/contact

feature/footer

feature/mobile-menu

---

# DESIGN FEEL

The website should feel:

Clean

Light

Minimal

Confident

Strategic

Premium

The website should NOT feel:

Corporate

Cold

Playful

Experimental

Overdesigned

---

# COLOR SYSTEM

Primary Purple

#4F2DFF

Hover Purple

#4325E8

Dark Purple

#3217C8

---

Primary Text

#0F0F13

---

Secondary Text

#676B7C

---

Muted Text

#A2A5B8

---

Background

#FFFFFF

---

Section Background

#FAFAFC

---

Border

#ECECF3

---

Card Background

#FFFFFF

---

Light Purple

#F4F1FF

---

Ultra Light Purple

#F8F7FF

---

# TYPOGRAPHY

Primary Font:

Geist

Fallback:

Inter

Google Font Weight Usage:

400
500
600
700
800

---

# FONT SCALE

Hero Display

72px

Weight 800

Line Height 0.95

---

Large Heading

56px

Weight 800

---

Section Heading

40px

Weight 700

---

Card Heading

22px

Weight 700

---

Body

16px

Weight 400

---

Small

14px

Weight 400

---

Tiny

12px

Weight 500

---

# SPACING SYSTEM

Use strict 8px spacing system.

Available values:

4

8

12

16

24

32

48

64

80

96

120

160

Never use random spacing.

---

# CONTAINER SYSTEM

Desktop Container:

1280px

Padding:

24px

Margin:

auto

---

# BORDER RADIUS

Button

999px

Input

16px

Card

24px

Section CTA

32px

---

# SHADOWS

Small

0 8px 24px rgba(0,0,0,.04)

Medium

0 12px 32px rgba(0,0,0,.06)

Purple Glow

0 10px 40px rgba(79,45,255,.25)

Only use glow on primary buttons.

---

# RESPONSIVE BREAKPOINTS

Mobile

480px

Tablet

768px

Laptop

1024px

Desktop

1280px

Large Desktop

1440px

---

# ANIMATION PHILOSOPHY

Micro interactions only.

No scroll reveal.

No fade-up animations on every section.

No exaggerated movement.

Everything should feel subtle.

Duration Range:

150ms - 250ms

---

# BUTTON ANIMATION

Hover:

translateY(-2px)

Increase glow slightly

Tap:

scale(0.98)

---

# CARD ANIMATION

Hover:

translateY(-6px)

Increase shadow

Duration:

200ms

---

# ICON ANIMATION

Hover:

scale(1.08)

---

# ARROW ANIMATION

Hover:

translateX(4px)

---

# PAGE TRANSITION

Opacity

0 → 1

Duration:

250ms

No fancy transitions.

---

# REUSABLE COMPONENT STRATEGY

Before creating a component ask:

Can an existing component be reused?

If yes:

Reuse it.

If no:

Create a new component.

Never duplicate UI.

---

# PROJECT STRUCTURE

src

app

components

hooks

lib

data

styles

public

constants

---

# COMPONENT STRUCTURE

components

layout

ui

hero

services

process

cta

contact

decorative

footer

---

# FILE SIZE RULE

Ideal:

100-150 lines

Maximum:

250 lines

If larger:

Split component.

---

# JSX COMPONENT TEMPLATE

Every component should follow:

Imports

Constants

Component

Handlers

Effects

Return

Export

Keep consistency across entire codebase.

---

# PERFORMANCE RULES

Use Server Components by default.

Use "use client" only when required.

Lazy load heavy sections.

Optimize images.

Avoid unnecessary state.

Avoid unnecessary re-renders.

Keep Lighthouse score above 90.

---

# ACCESSIBILITY RULES

Every button needs:

aria-label

Every input needs:

label

Every image needs:

alt

Keyboard navigation must work everywhere.

Focus states must remain visible.
