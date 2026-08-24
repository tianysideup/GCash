# GCash UI Design System & Style Guidelines

> **Directive for AI Agents & Developers**:  
> When creating, modifying, or extending any UI components in this repository, strictly adhere to the typography, color palette, design tokens, and aesthetic principles outlined in this document. Do not use generic browser styles or unapproved color schemes.

---

## 1. 🎨 Color Palette & Design Tokens

### Primary Brand Colors
| Token Name | Hex Code | RGB / HSL | Usage |
| :--- | :--- | :--- | :--- |
| `--gcash-blue` | `#005CEE` | `rgb(0, 92, 238)` | Primary brand color, primary buttons, active tabs |
| `--gcash-blue-light` | `#257CFF` | `rgb(37, 124, 255)` | Button hover states, focus rings |
| `--gcash-cyan` | `#00D2FF` | `rgb(0, 210, 255)` | Gradient accents, glowing borders, active indicators |
| `--gcash-navy-dark` | `#0A2540` | `rgb(10, 37, 64)` | Wallet card background base, deep gradients |

### Functional / Semantic Accents
| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| `--success` / `--emerald` | `#10B981` | Positive balances, incoming transfers, verified badges |
| `--warning` / `--amber` | `#F59E0B` | Pay Bills icons, pending status, alerts |
| `--danger` / `--rose` | `#EF4444` | Negative alerts, validation errors, notification dots |
| `--purple` | `#8B5CF6` | GSave, high-yield investment features |
| `--pink` / `--magenta` | `#EC4899` | GLife deals, promo badges, rewards |
| `--orange` | `#F97316` | GLoan / borrowing services |

### Signature Gradients
```css
/* Primary GCash Electric Gradient */
--gcash-gradient: linear-gradient(135deg, #005CEE 0%, #0091FF 50%, #00D2FF 100%);

/* Hero Wallet Card Gradient */
--gcash-card-grad: linear-gradient(135deg, #0a2540 0%, #005cee 60%, #00b4d8 100%);

/* Success / GSave Gradient */
--gcash-save-grad: linear-gradient(135deg, #059669 0%, #34D399 100%);

/* GLife / Deals Gradient */
--gcash-deals-grad: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
```

### Theme Backgrounds & Surfaces
```css
/* Dark Theme (Default Fintech Luxe) */
--bg-app: #090D16;
--bg-card: rgba(18, 25, 41, 0.75);
--bg-card-solid: #121929;
--bg-card-hover: rgba(26, 36, 58, 0.85);
--bg-input: rgba(13, 19, 33, 0.8);
--text-main: #FFFFFF;
--text-secondary: #94A3B8;
--text-muted: #64748B;
--border-subtle: rgba(255, 255, 255, 0.08);
--border-focus: rgba(0, 92, 238, 0.6);

/* Light Theme */
--bg-app: #F4F7FC;
--bg-card: rgba(255, 255, 255, 0.85);
--bg-card-solid: #FFFFFF;
--bg-card-hover: rgba(240, 245, 255, 0.95);
--bg-input: #EDF2F7;
--text-main: #0F172A;
--text-secondary: #475569;
--text-muted: #94A3B8;
--border-subtle: rgba(15, 23, 42, 0.08);
--border-focus: rgba(0, 92, 238, 0.4);
```

---

## 2. 🔤 Typography & Fonts

### Font Families
- **Headings & Numbers**: `'Outfit', -apple-system, BlinkMacSystemFont, sans-serif`
  - Used for: Brand title, balance amounts, section titles, modal headers.
- **Body & Controls**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`
  - Used for: Form inputs, buttons, list descriptions, navigation items.
- **Reference Numbers & Masked Accounts**: `monospace` (or `Plus Jakarta Sans` with `letter-spacing: 0.08em`)
  - Used for: Transaction Ref Nos (`902184019283`), phone masks (`0917 ••• 9140`).

### Font Scale & Weights
| Element | Font Family | Size | Weight | Tracking / Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Balance** | `Outfit` | `40px` | `800` (Boldest) | `-0.03em` tracking |
| **Section Title (h2)** | `Outfit` | `18px - 20px` | `700` (Bold) | `-0.02em` |
| **Modal Header (h3)** | `Outfit` | `20px` | `800` | Clean line-height |
| **Body Primary** | `Plus Jakarta Sans` | `14px` | `600` / `700` | High contrast |
| **Body Secondary / Meta** | `Plus Jakarta Sans` | `12px` | `500` | Muted text |
| **Badges & Tags** | `Outfit` | `9px - 10px` | `800` | Uppercase, `0.05em` spacing |

---

## 3. ✨ Design Principles & Aesthetics

### 1. Glassmorphism & Depth
- Cards should have subtle semi-transparent backgrounds with backdrop blur (`backdrop-filter: blur(16px)`).
- Borders should be crisp and subtle (`1px solid rgba(255, 255, 255, 0.08)` in dark mode).
- Never use flat harsh gray boxes. Use layered elevation with colored glow shadows (`0 8px 24px rgba(0, 0, 0, 0.35)` and `0 0 25px rgba(0, 92, 238, 0.35)`).

### 2. Philippine Peso (`₱`) Formatting
- Always format currency using the Philippine Peso sign `₱` and standard `en-PH` thousands comma formatting:
  ```javascript
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2
  }).format(amount)
  // Output: ₱48,750.50
  ```
- Use `+₱` with green color for incoming funds/cash-in, and `-₱` or standard text for outgoing transfers.

### 3. Motion & Micro-interactions
- **Hover Lift**: Service tiles and action buttons should elevate smoothly (`transform: translateY(-2px)` to `-4px`).
- **Laser Scanner**: QR scan modal features an animated horizontal beam.
- **Confetti Explosion**: All successful financial transactions (Send Money, Cash In, Bill Payments) must trigger `canvas-confetti` celebrations for user delight.
- **Smooth Modals**: Open modals with `animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.

---

## 4. 🧩 Core Component Specifications

### 1. Wallet Hero Card
- Distinctive GCash blue gradient background with glowing circular ambient blobs.
- Privacy toggle button (Eye icon) to hide or reveal balance with dot masks (`₱ ••••••••`).
- Card quick actions: 4 responsive pill buttons (*Cash In*, *Send Money*, *Pay QR*, *Transfer*).

### 2. Quick Services Grid
- 8-grid layout on desktop, 4-grid / 2-grid responsive on mobile.
- Each service tile includes a vibrant 52×52px icon badge with unique thematic background color (e.g. Blue for Send, Amber for Bills, Green for Load, Purple for GSave).

### 3. Send Money Modal
- Multi-step flow:
  1. **Input**: Recipient phone (with quick contacts row) + Amount (with +₱100, +₱500, +₱1,000, +₱2,500 preset chips) + Optional note.
  2. **Review**: Recipient confirmation, zero transfer fees badge, remaining balance preview.
  3. **Receipt**: Animated checkmark, large amount, copyable 12-digit reference number, date/time, and confetti.

### 4. Transactions Feed
- Segmented filter tabs: *All Transactions*, *Transfers*, *Bills*, *Cash In*, *QR Payments*.
- Real-time search bar filtering across titles, recipient names, and reference numbers.
- Clickable transaction row opening a detailed digital receipt modal.

---

## 5. 📋 Agent Implementation Checklist

When tasked with building or updating components:
- [ ] Are fonts configured with `Outfit` for headings/amounts and `Plus Jakarta Sans` for body?
- [ ] Are colors using `--gcash-blue` (`#005CEE`), `--gcash-cyan` (`#00D2FF`), and the approved palette tokens?
- [ ] Is currency formatted with `₱` and 2 decimal points?
- [ ] Does the UI support seamless Dark and Light theme switching?
- [ ] Are interactive elements responsive, with hover states and active animations?
- [ ] Are all transaction flows accompanied by immediate balance updates, toast messages, and receipt dialogs?
