# Contributing to ThatGuyCodes

Welcome to **ThatGuyCodes**! We are building a high-performance, sovereign digital platform that includes a technical publication, digital commerce engine, cross-platform design system, and multi-channel distribution pipeline—all engineered under a strict **$0.00/month fixed infrastructure** model.

This guide explains our monorepo architecture and provides clear, step-by-step instructions for contributing code to:
1. **Design System & Tokens** (`packages/tokens` & `packages/ui-native`)
2. **Web Application & Registry** (`apps/web`)
3. **Mobile Application** (`apps/mobile`)

---

## 1. Monorepo Architecture Overview

Our monorepo is powered by **[Nx](https://nx.dev)** and managed with **[Yarn Modern (v4.6.0)](https://yarnpkg.com/)** using `node-modules` linking:

```
thatguycodes/
├── apps/
│   ├── web/                    # Vite + React 19 + Tailwind CSS v4 + Radix UI showcase
│   └── mobile/                 # Expo SDK 52 + React Native 0.76 + NativeWind v4
├── packages/
│   ├── tokens/                 # Universal design tokens (colors, radii, shadows, typography)
│   └── ui-native/              # React Native cross-platform UI component library
├── nx.json                     # Nx computation caching & target pipelines
├── .yarnrc.yml                 # Yarn v4 configuration (nodeLinker: node-modules)
├── package.json                # Root scripts and workspace declarations
└── design.md                   # Canonical design system specification & token dictionary
```

### Monorepo Workspaces

| Workspace | Technology Stack | Primary Purpose |
| :--- | :--- | :--- |
| **`@thatguycodes/tokens`** | TypeScript, Zero-dep | Pure platform-agnostic design tokens for Web, iOS, and Android. |
| **`@thatguycodes/ui-native`** | React Native, NativeWind, CVA | Reusable cross-platform native component primitives and blocks. |
| **`web`** | Vite, React 19, Tailwind v4 | Web client, interactive component showcase, and shadcn-style registry. |
| **`mobile`** | Expo SDK 52, React Native | Sovereign mobile client application for iOS and Android. |

---

## 2. Quickstart & Local Setup

### Prerequisites
- **Node.js**: `v20.x` or `v24.x` (LTS recommended)
- **Corepack**: Enabled for automatic Yarn 4.6.0 management
- *(Optional for Mobile)*: Xcode (macOS/iOS) or Android Studio, Expo Go app

### Initial Setup

1. **Enable Corepack & Install Dependencies:**
   ```bash
   corepack enable
   yarn install
   ```

2. **Verify All Workspaces:**
   ```bash
   # Run typechecking across all 4 projects simultaneously (cached via Nx)
   yarn typecheck

   # Run production builds across the monorepo
   yarn build
   ```

3. **Start Development Servers:**
   ```bash
   # Web component showcase (http://localhost:5173/)
   yarn dev:web

   # Mobile Expo Metro bundler
   yarn dev:mobile

   # Mobile platform shortcuts
   yarn mobile:ios       # Launch on iOS Simulator
   yarn mobile:android   # Launch on Android Emulator
   ```

4. **Inspect Nx Dependency Graph:**
   ```bash
   yarn graph
   ```

---

## 3. Contributing to the Design System

The design system follows Brad Frost's **Atomic Design Methodology** across three themes:
- **Obsidian Nocturne (Dark Mode):** Deep zinc (`#09090b`), soft violet accent (`#a78bfa`), and telemetry emerald (`#34d399`).
- **Daylight Solstice (Light Mode):** Ivory lilac canvas (`#FAF8FF`), royal violet (`#6D28D9`, WCAG AAA 7.2:1), and slate typography.
- **Sahara Dual Matrix (Desert Palette):** Mineral basalt (`#161311`), warm golden amber (`#ffba56`), bleached sandstone (`#FFF8F5`), and sunbaked terracotta (`#C86D3B`).

### 3.1 Adding or Updating Design Tokens (`packages/tokens`)

Universal design tokens live in [`packages/tokens/src/`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/tokens/src). These are consumed across web and mobile.

#### Step 1: Update Token Definitions
- **Colors:** [`src/colors.ts`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/tokens/src/colors.ts) (Add to `darkThemeColors` and `lightThemeColors`).
- **Radii:** [`src/radii.ts`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/tokens/src/radii.ts) (e.g. `sm: 4`, `md: 8`, `lg: 12`).
- **Shadows:** [`src/shadows.ts`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/tokens/src/shadows.ts) (Web and Native shadow matrices).
- **Typography:** [`src/typography.ts`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/tokens/src/typography.ts) (Sizes, line heights, letter tracking).

#### Step 2: Update TypeScript Interfaces
Update [`src/types.ts`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/tokens/src/types.ts) if adding new token categories or color keys.

#### Step 3: Synchronize CSS Variables
When a token is added or updated in `packages/tokens`, synchronize its corresponding CSS variable in:
- **Web:** [`apps/web/src/styles/globals.css`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/apps/web/src/styles/globals.css) under `@theme` or `.dark` / `.light`.
- **Mobile:** [`apps/mobile/global.css`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/apps/mobile/global.css).
- **Design Spec:** [`design.md`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/design.md).

#### Step 4: Validate
```bash
yarn nx typecheck @thatguycodes/tokens
```

---

### 3.2 Adding a Native UI Component (`packages/ui-native`)

Cross-platform React Native primitives live in [`packages/ui-native/src/`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/ui-native/src).

#### Component Template
Create your component in [`packages/ui-native/src/components/ui/[component-name].tsx`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/ui-native/src/components/ui/):

```tsx
import * as React from 'react';
import { View, type ViewProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const bannerVariants = cva(
  'w-full flex-row items-center rounded-[8px] p-4 border',
  {
    variants: {
      variant: {
        default: 'bg-card border-border text-card-foreground',
        telemetry: 'bg-primary/10 border-primary/20 text-primary',
        destructive: 'bg-destructive/10 border-destructive/20 text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BannerProps
  extends ViewProps,
    VariantProps<typeof bannerVariants> {
  className?: string;
}

export const Banner = React.forwardRef<any, BannerProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(bannerVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Banner.displayName = 'Banner';
```

#### Export Component
Export the new component in [`packages/ui-native/src/index.ts`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/packages/ui-native/src/index.ts):
```ts
export * from './components/ui/banner';
```

#### Validate
```bash
yarn nx typecheck @thatguycodes/ui-native
```

---

## 4. Contributing to Web (`apps/web`)

The web app is a Next-ready Vite client built with **React 19**, **Tailwind CSS v4**, and **Radix UI Primitives**. It operates as our interactive component laboratory and shadcn-style component registry.

### 4.1 Adding a Web Component (`apps/web/src/components/ui`)

We adhere strictly to the **shadcn/ui architectural model**: components are raw, accessible code owned inside the repository using Radix primitives and Tailwind utilities—**no heavy third-party UI framework or Storybook overhead**.

#### Step 1: Create the Component
Create [`apps/web/src/components/ui/[component-name].tsx`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/apps/web/src/components/ui/):

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const chipVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ring',
  {
    variants: {
      variant: {
        default: 'bg-primary/15 text-primary border border-primary/20',
        emerald: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
        outline: 'border border-border text-foreground hover:bg-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  asChild?: boolean;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        className={cn(chipVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Chip.displayName = 'Chip';
```

#### Step 2: Register in `registry/registry.json`
Every component in `apps/web/src/components/ui/` must be cataloged in [`apps/web/registry/registry.json`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/apps/web/registry/registry.json) so developers can pull it via CLI:

```json
{
  "name": "chip",
  "type": "registry:ui",
  "title": "Chip",
  "description": "Interactive pill badge with polymorphic slot support and telemetry glows.",
  "dependencies": ["@radix-ui/react-slot", "class-variance-authority"],
  "files": [
    {
      "path": "src/components/ui/chip.tsx",
      "type": "registry:ui",
      "target": "components/ui/chip.tsx"
    }
  ]
}
```

#### Step 3: Add to Interactive Showcase (`src/App.tsx`)
In [`apps/web/src/App.tsx`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/apps/web/src/App.tsx):
1. Import your component: `import { Chip } from '@/components/ui/chip';`
2. Add its ID to `ComponentId` and `ALL_COMPONENTS`:
   ```ts
   {
     id: 'chip',
     name: 'Chip',
     group: 'Atoms (Primitives)',
     atomicLevel: 'Atom',
     description: 'Interactive pill badge with polymorphic slot support.'
   }
   ```
3. Add its preview section in `renderPreview`:
   ```tsx
   {selectedComponent === 'chip' && (
     <div className="flex gap-3">
       <Chip variant="default">Velocity</Chip>
       <Chip variant="emerald">Telemetry Active</Chip>
       <Chip variant="outline">Secondary</Chip>
     </div>
   )}
   ```

#### Step 4: Validate
```bash
yarn nx typecheck web
yarn build:web
```

---

## 5. Contributing to Mobile (`apps/mobile`)

The mobile client is built on **Expo SDK 52** and **NativeWind v4** (Tailwind CSS for React Native).

### 5.1 Consuming Components and Tokens

Import directly from our internal workspace packages:

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardHeader, CardTitle, Badge } from '@thatguycodes/ui-native';
import { darkThemeColors } from '@thatguycodes/tokens';

export function MetricsWidget() {
  return (
    <Card className="m-4 border border-border bg-card">
      <CardHeader>
        <View className="flex-row items-center justify-between">
          <CardTitle>Cloudflare Tunnel</CardTitle>
          <Badge variant="emerald">ACTIVE • 0ms</Badge>
        </View>
        <Text className="text-xs text-muted-foreground mt-1">
          Zero-trust routing to localhost:8080
        </Text>
      </CardHeader>
    </Card>
  );
}
```

### 5.2 Responsive & Theme Design Rules for Mobile
1. **Always use NativeWind classes** for spacing and surfaces: `bg-background`, `text-foreground`, `border-border`.
2. **Safe Areas:** Always wrap root screen content in `SafeAreaView` from `react-native-safe-area-context`.
3. **Icons:** Use `lucide-react-native` and supply `size` and `color` props (e.g. `<Zap size={16} color="#ffba56" />`).
4. **Validation:**
   ```bash
   yarn nx typecheck mobile
   ```

---

## 6. Coding & Quality Standards

### Atomic Design Classification
Always identify where your addition belongs before writing code:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ATOMIC DESIGN TAXONOMY                          │
├─────────────┬──────────────────────────────────────────────────────────┤
│ 1. Atoms    │ Indivisible primitives: Button, Badge, Input, Kbd, Beacon│
│ 2. Molecules│ Functional composites: SearchInput, AccordionTrigger     │
│ 3. Organisms│ Complex modules: PhoneLoginCard, CodeSandbox, PolarCard  │
│ 4. Templates│ Page layouts: ComponentWorkbench, MDXArticle, Storefront │
└─────────────┴──────────────────────────────────────────────────────────┘
```

### Accessibility & Contrast Rules
- **Obsidian Dark Mode:** Soft Violet (`#a78bfa`) and Emerald (`#34d399`) on Zinc (`#09090b`) must meet **WCAG AA (4.5:1+)**.
- **Daylight Light Mode:** Royal Violet (`#6D28D9`) and Slate (`#0F172A`) on Ivory (`#FAF8FF`) must meet **WCAG AAA (7.0:1+)**.
- **Sahara Light Mode:** Terracotta (`#C86D3B`) on Sandstone (`#FFF8F5`) must meet **WCAG AAA Normal (4.8:1+)**.

### Sovereign $0/mo Constraint
- Never introduce third-party cloud services with mandatory recurring billing or paid API subscriptions (e.g., X/Twitter API, paid database tiers).
- Prefer self-hosted Docker, Cloudflare Zero Trust free tiers, Polar.sh Merchant of Record, and standard static edge deploys.

---

## 7. Git & Pull Request Guidelines

### Branch Naming
- `feat/web-<feature-name>` — New feature in web
- `feat/mobile-<feature-name>` — New feature in mobile
- `feat/tokens-<token-name>` — New design token or theme
- `fix/<issue-description>` — Bug fix
- `docs/<doc-update>` — Documentation updates

### Conventional Commits
Use standard Conventional Commit messages:
- `feat(tokens): add sahara sandstone elevation tokens`
- `feat(ui-native): add segmented filter dock component`
- `feat(web): add polar checkout card to registry`
- `fix(mobile): resolve nativewind safe-area typing`
- `chore(nx): update build cache targets`

### Pre-PR Checklist
Before opening a pull request, run the verification suite:

```bash
# 1. Typecheck all workspaces
yarn typecheck

# 2. Build production web bundle
yarn build:web

# 3. Ensure no uncommitted lockfile drift
git status
```

Thank you for helping build **ThatGuyCodes**! For questions or suggestions on the design system, consult [`design.md`](file:///Users/letlhogonolotheodoreobonye/Code/thatguycodes/design.md).
