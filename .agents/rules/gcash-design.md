# GCash UI & Design System Rule

All agents working on this workspace MUST adhere to the following design system, color palette, and typography standards:

## 1. Typography & Fonts
- **Headings & Balances**: Use Google Font `'Outfit'`, weight 700-800.
- **Body & Controls**: Use Google Font `'Plus Jakarta Sans'`, weight 500-700.
- **Reference Numbers & Masked Accounts**: Monospace formatting (`letter-spacing: 0.08em`).

## 2. Color Palette & Tokens
- **GCash Electric Blue**: `#005CEE` (Primary brand color, buttons, active states)
- **GCash Cyan**: `#00D2FF` (Glows, accents, gradients)
- **GCash Navy**: `#0A2540` / `#090D16` (Dark background and cards)
- **Functional Accents**:
  - Success / Income: `#10B981`
  - Warning / Bills: `#F59E0B`
  - Error / Danger: `#EF4444`
  - GSave / Purple: `#8B5CF6`
  - GLife / Pink: `#EC4899`
- **Gradients**: `linear-gradient(135deg, #005CEE 0%, #0091FF 50%, #00D2FF 100%)`
- **Glow Shadows**: `0 0 25px rgba(0, 92, 238, 0.35)`

## 3. Formatting & Aesthetics
- **Currency**: Always use Philippine Peso symbol `₱` formatted with `en-PH` locale and 2 decimal points (e.g. `₱48,750.50`).
- **Glassmorphism**: Backdrop blur `blur(16px)` with subtle border `1px solid rgba(255, 255, 255, 0.08)`.
- **Interactions**: Interactive hover lifts, real-time balance calculations, transaction receipts, and confetti triggers on successful payments.
- **Dark/Light Mode**: Full support for both themes via `--bg-app`, `--bg-card`, `--text-main`, and `--border-subtle` tokens.

Refer to [GCASH_DESIGN_GUIDE.md](file:///c:/Users/Christian/OneDrive/Documents/GCash/GCASH_DESIGN_GUIDE.md) for full specifications.
