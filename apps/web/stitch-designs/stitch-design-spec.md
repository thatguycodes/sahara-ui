---
name: ThatGuyCodes Design System
colors:
  surface: '#0B0F19'
  surface-dim: '#070A11'
  surface-bright: '#242F45'
  surface-container-lowest: '#05070C'
  surface-container-low: '#0E1422'
  surface-container: '#131B2D'
  surface-container-high: '#1A243A'
  surface-container-highest: '#222F4B'
  on-surface: '#F1F5F9'
  on-surface-variant: '#94A3B8'
  inverse-surface: '#F1F5F9'
  inverse-on-surface: '#0F172A'
  outline: '#334155'
  outline-variant: '#1E293B'
  surface-tint: '#00E5FF'
  primary: '#00E5FF'
  on-primary: '#001E2B'
  primary-container: '#0284C7'
  on-primary-container: '#E0F2FE'
  inverse-primary: '#0284C7'
  secondary: '#34D399'
  on-secondary: '#002114'
  secondary-container: '#059669'
  on-secondary-container: '#D1FAE5'
  tertiary: '#FBBF24'
  on-tertiary: '#261A00'
  tertiary-container: '#D97706'
  on-tertiary-container: '#FEF3C7'
  error: '#F87171'
  on-error: '#450003'
  error-container: '#DC2626'
  on-error-container: '#FEE2E2'
  primary-fixed: '#BAEDFF'
  primary-fixed-dim: '#7BD0FF'
  on-primary-fixed: '#001F29'
  on-primary-fixed-variant: '#004D61'
  secondary-fixed: '#A7F3D0'
  secondary-fixed-dim: '#6EE7B7'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005234'
  tertiary-fixed: '#FEF08A'
  tertiary-fixed-dim: '#FDE68A'
  on-tertiary-fixed: '#261A00'
  on-tertiary-fixed-variant: '#573E00'
  background: '#070A11'
  on-background: '#F1F5F9'
  surface-variant: '#1E293B'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 15px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

# ThatGuyCodes Design System Specification

## 1. Brand & Style

### 1.1 Visual Persona: "The Sovereign Engineering Cockpit"
`thatguycodes` bridges the architectural precision of an industrial developer cockpit with the high-converting velocity of a modern digital commerce platform. It embodies the ethos of **The Sovereign AI & $0/mo Full-Stack Engineer**: production-grade capabilities, absolute cost sovereignty, zero corporate bloat, and total transparency.

- **Obsidian & Slate Foundation:** Deep obsidian-black backgrounds (`#070A11`, `#0B0F19`) engineered to minimize eye strain during code dissection, homelab orchestration, and extended technical reading.
- **Electric Cyan & Sovereign Mint Signals:** Focused, purposeful telemetry accents. **Electric Cyan (`#00E5FF`)** signifies edge velocity, AI streaming, and active execution pathways. **Sovereign Mint (`#34D399`)** represents zero-tax economics, active background daemons, healthy builds, and $0.00/mo operating milestones.
- **Sharp Technical Precision:** Border-driven spatial hierarchy utilizing 1px hairline strokes (`#1E293B`, `#334155`) and inner physical top-edge bevel highlights rather than blurred drop shadows, maximizing information density across Retina and 4K developer displays.

### 1.2 Emotional Target
- **High Agency & Autonomy:** Developers, founders, and indie hackers immediately sense that every piece of software on the site is an uncompromised proof-of-work that can be self-hosted, audited, and deployed without paying SaaS taxes.
- **Cognitive Clarity:** Dense technical diagrams, multi-file code diffs, and live Sandpack sandboxes render with instant legibility and predictable typographic rhythm.

---

## 2. Colors

### 2.1 Foundation & Neutrals (Carbon Obsidian Palette)
| Token Name | Hex Code | Semantic Role |
| :--- | :--- | :--- |
| `background` / `surface-dim` | `#070A11` | Primary screen canvas, modal backdrops, full-bleed code viewports |
| `surface` | `#0B0F19` | Default layout surface, sticky top navigation, main reading background |
| `surface-container-lowest` | `#05070C` | Recessed viewports, terminal runtimes, Sandpack console areas |
| `surface-container-low` | `#0E1422` | Card base backgrounds, sidebar navigators, unselected code tabs |
| `surface-container` | `#131B2D` | Interactive cards, dialog bodies, secondary tool drawers |
| `surface-container-high` | `#1A243A` | Hover states, elevated popovers, dropdown lists |
| `surface-container-highest` | `#222F4B` | Active tab indicators, border highlight bands, selected row washes |
| `outline` | `#334155` | High-contrast component boundaries, interactive form focus rings |
| `outline-variant` | `#1E293B` | Hairline panel separators, table grid borders, subtle dividers |
| `on-surface` | `#F1F5F9` | Primary headings, code text, high-emphasis telemetry figures |
| `on-surface-variant` | `#94A3B8` | Body copy, secondary metadata, inactive tab labels, timestamps |

### 2.2 Functional Accents
- **Primary / Edge Velocity Cyan (`#00E5FF` / `#38BDF8`):** Active streaming states, primary CTA buttons, GenUI tool execution indicators, active nav items.
- **Secondary / Sovereign Mint (`#34D399`):** $0.00/mo badges, successful GitHub webhook syncs, Polar.sh order fulfillment badges, git addition highlights.
- **Tertiary / Telemetry Amber (`#FBBF24`):** Human-in-the-Loop (HITL) approval gates, warning callouts, rate-limit cautions, pending webhook events.
- **Critical / Danger Crimson (`#F87171`):** SLA breaches, build failures, git deletion highlights, fatal error banners.
- **Agent Violet (`#8B5CF6`):** Multi-agent reasoning mode, tool calling execution logs, RAG retrieval status.

### 2.3 Code Syntax Highlighting Palette (Tokyo Night / Cyber Dark Standard)
Optimized for Shiki, Prism, and Sandpack code execution blocks:
- **Keyword / Control Flow:** `#F472B6` (Pink / Magenta)
- **Functions & Methods:** `#60A5FA` (Electric Blue)
- **Strings & Values:** `#34D399` (Mint Emerald)
- **Types & Interfaces:** `#00E5FF` (Cyan)
- **Constants & Enums:** `#FBBF24` (Amber Gold)
- **Comments & Annotations:** `#64748B` (Muted Slate Italic)
- **Diff Add Wash:** `rgba(52, 211, 153, 0.12)` with a 2px left border `#34D399`
- **Diff Remove Wash:** `rgba(248, 113, 113, 0.12)` with a 2px left border `#F87171`

---

## 3. Typography

### 3.1 Font Family Hierarchy
- **Headlines:** `Space Grotesk`, sans-serif (Architectural, technical, bold posture).
- **Body & Prose:** `Inter`, -apple-system, BlinkMacSystemFont, sans-serif (High x-height, neutral, distortion-free across long-form MDX technical deep-dives).
- **Monospace, Telemetry & Code:** `JetBrains Mono , `ui-monospace`, monospace (Ligatures enabled, crisp punctuation, tabular numeral alignment).

### 3.2 Type Scale
| Level | Font Family | Size | Weight | Line Height | Letter Spacing | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `headline-xl` | Space Grotesk | 32px (`2.0rem`) | 700 | 40px | -0.025em | Page H1, Hero value propositions, Storefront titles |
| `headline-lg` | Space Grotesk | 24px (`1.5rem`) | 600 | 32px | -0.02em | Section H2, MDX section titles, Product names |
| `headline-md` | Space Grotesk | 18px (`1.125rem`)| 600 | 26px | -0.01em | Card headers, Drawer headings, Dialog titles |
| `body-lg` | Inter | 16px (`1.0rem`) | 400 | 26px | 0em | Primary article reading body, intro ledes |
| `body-md` | Inter | 14px (`0.875rem`)| 400 | 22px | 0em | UI labels, card descriptions, form input text |
| `body-sm` | Inter | 12px (`0.75rem`) | 400 | 18px | +0.01em | Footnotes, helper text, breadcrumbs |
| `label-lg` | JetBrains Mono| 13px (`0.8125rem`)| 600 | 18px | +0.02em | Button labels, command triggers, table headers |
| `label-md` | JetBrains Mono| 11px (`0.6875rem`)| 500 | 15px | +0.04em | Status pills, code tab names, badge meters |
| `label-sm` | JetBrains Mono| 10px (`0.625rem`)| 500 | 14px | +0.06em | Micro-telemetry, memory metrics, UTC stamps |

### 3.3 Tabular Figures & Numerics
All metrics, token counts, pricing tags, git commit hashes, and durations MUST enable OpenType tabular figures:
```css
font-variant-numeric: tabular-nums;
font-feature-settings: "tnum" 1, "zero" 1;
```

---

## 4. Layout & Spacing

### 4.1 High-Density Engineering Grid
- **Maximum Content Width:** `1280px` (`max-w-7xl`) for dashboards & store views; `768px` (`max-w-3xl`) for MDX prose to preserve optimal 65–75 character line lengths.
- **Base Grid:** `4px` / `8px` strict spatial rhythm (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 12px, `space-lg` = 16px, `space-xl` = 24px).
- **Desktop Workbench (1280px+):** Sticky 240px technical navigation rail, fluid canvas/prose workspace, and optional 320px contextual telemetry/TOC sidebar.
- **Tablet (768px - 1024px):** Collapsed navigation rail to icon rail (64px) with off-canvas slideover drawers for TOC and AI chat.
- **Mobile (<768px):** Single-column stacked flow with fixed bottom action trigger bar (`h-14`) for quick access to `Cmd+K`, TOC, and Store checkout.

---

## 5. Elevation & Depth

### 5.1 Border-Driven Layering
Shadows are minimized in favor of stark, legible boundary borders and physical rim highlights:
- **Layer 0 (Canvas):** `#070A11` background.
- **Layer 1 (Card / Container):** `#0E1422` with `1px solid #1E293B` and `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`.
- **Layer 2 (Elevated Component / Popover):** `#131B2D` with `1px solid #334155` and a tight ambient drop shadow `0 8px 24px -4px rgba(0, 0, 0, 0.7)`.
- **Layer 3 (Modal / Command Palette):** `#0B0F19` with `1px solid #00E5FF` (primary glow accent) and backdrop filter `backdrop-blur-md bg-black/75`.

### 5.2 Focused Status Glows
- **Primary Cyan Pulse:** `box-shadow: 0 0 16px rgba(0, 229, 255, 0.35)`
- **Sovereign Mint Glow:** `box-shadow: 0 0 14px rgba(52, 211, 153, 0.30)`
- **HITL Amber Attention:** `box-shadow: 0 0 16px rgba(251, 191, 36, 0.35)`

---

## 6. Shapes & Radii

A disciplined **Mechanical Precision (4px / 6px)** radius standard is enforced:
- `rounded-sm` (`2px`): Sub-element badges, inline code spans, micro-tags.
- `rounded-DEFAULT` (`4px`): Interactive buttons, input fields, code blocks, cards, tab triggers.
- `rounded-md` (`6px`): Modals, Sandpack sandboxes, architecture canvases.
- `rounded-full` (`9999px`): Live indicator pings, avatar chips, telemetry pill tags.

---

## 7. Core Components & GenUI Interactive Patterns

### 7.1 Buttons & Dispatch Triggers
- **Primary Velocity CTA:** Solid Cyan (`#00E5FF`), bold dark text (`#001E2B`), `rounded-[4px]`, with subtle cyan glow on hover.
- **Sovereign Secondary:** `#0E1422` surface, 1px border `#334155`, text `#F1F5F9`. Hover state shifts border to `#00E5FF` and surface to `#1A243A`.
- **Destructive / Reset:** `#450003` background, `#F87171` text, 1px border `#7F1D1D`.
- **Interactive Keyboard Hint:** Monospace `<kbd>` badge nested inside button (`px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400`).

### 7.2 Code Blocks & Sandpack Sandboxes
- **Header Dock:** Displays active file name, language icon, copy button with animated checkmark confirmation, and "Run in Sandbox" action.
- **Diff Rendering:** Clear green addition lines (`+`) and red deletion lines (`-`) with full-width subtle tinting.
- **Interactive Sandpack Sandbox:** Sandboxed Node/React runner with a collapsible execution console drawer and instant reload button.

### 7.3 Architecture Canvases & Mermaid Explorers
- **Interactive Viewer:** Zoom, pan, and reset viewport buttons pinned to the top-right corner.
- **Node Classification:** Distinct borders for Docker containers (Cyan), Cloudflare Edge Workers (Amber), and Third-party Free APIs (Mint).
- **Fullscreen Mode:** Expands the SVG canvas to a distraction-free dialog viewport with an instant SVG/PNG download trigger.

### 7.4 Command Palette (`Cmd+K`) & Agentic Concierge
- **Global Shortcut:** Invoked via `Cmd+K` / `Ctrl+K`.
- **Dual-Mode Bar:** Live full-text search across all MDX articles & products, or natural language query triggering the Gemini Free Tier / Groq streaming concierge.
- **Streaming Tool Execution:** Visual progress state pills showing `tool-invocation`:
  - `[Calling: renderArchitectureDiagram]` (Cyan spinning indicator)
  - `[Generated: Docker Compose Cluster]` (Mint verified badge)

### 7.5 Status Badges & Telemetry Pills
- **Compact Height:** Fixed `22px` height, uppercase `JetBrains Mono` text (`11px`).
- **Telemetry Variants:**
  - **Sovereign Active:** `#064E3B` background, `#34D399` text, `#059669` border, with a pulsing green indicator beacon.
  - **HITL Approval Pending:** `#451A03` background, `#FBBF24` text, `#D97706` border.
  - **Free Tier Edge Active:** `#082F49` background, `#00E5FF` text, `#0284C7` border.

### 7.6 Polar.sh Checkout & Pricing Cards
- **Value Ladder Cards:**
  - Clear tier indicators: **Tier 0 Lead Magnet ($0)**, **Tier 1 Workflow Pack ($49–$89)**, **Tier 2 Sovereign Creator Stack ($149–$299)**, **Tier 3 Async Architecture Audit ($750)**.
  - **Living Repo Callout:** Highlight badge stating *"Includes Lifetime GitHub Private Repo Pull Access"*.
  - **Polar.sh MoR Guarantee:** *"Zero recurring subscriptions. One-time payment. Global VAT handled automatically."*
  - **Direct Checkout Trigger:** One-click launch of Polar modal checkout or direct redirect.

### 7.7 Blog MDX Scrollytelling & Callouts
- **GitHub-Flavored Callouts:**
  - `> [!NOTE]` Cyan border (`#00E5FF`), `#0C243B` surface.
  - `> [!TIP]` Mint border (`#34D399`), `#082E23` surface.
  - `> [!WARNING]` Amber border (`#FBBF24`), `#362402` surface.
  - `> [!CAUTION]` Crimson border (`#F87171`), `#350B0D` surface.
- **Scrollytelling Code Sync:** As the reader scrolls through Markdown paragraphs, adjacent code snippets highlight the matching lines using CSS transitions.
- **Sticky Table of Contents:** Right-hand side navigation tracking active headers with a 2px Cyan indicator bar.
