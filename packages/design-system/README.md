# @thatguycodes/design-system

> The sovereign, high-velocity, cross-platform design system for **Web (React 19)** and **Mobile (React Native / Expo)**.

[![npm version](https://img.shields.io/npm/v/@thatguycodes/design-system.svg?style=flat-square&color=8b5cf6)](https://www.npmjs.com/package/@thatguycodes/design-system)
[![npm downloads](https://img.shields.io/npm/dm/@thatguycodes/design-system.svg?style=flat-square)](https://www.npmjs.com/package/@thatguycodes/design-system)
[![Live Documentation](https://img.shields.io/badge/Docs-GitHub%20Pages-brightgreen?style=flat-square)](https://thatguycodes.github.io/thatguycodes/)
[![GitHub repo](https://img.shields.io/badge/GitHub-thatguycodes%2Fthatguycodes-blue?style=flat-square&logo=github)](https://github.com/thatguycodes/thatguycodes)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## 🌟 Interactive Documentation & Showcase
Experience the live component showcase, theme switcher (Obsidian Dark & Daylight Light), and interactive widgets:
👉 **[View Live Showcase on GitHub Pages](https://thatguycodes.github.io/thatguycodes/)**

---

## 📦 Installation

```bash
# Using npm
npm install @thatguycodes/design-system

# Using Yarn
yarn add @thatguycodes/design-system

# Using pnpm
pnpm add @thatguycodes/design-system
```

---

## 🚀 Quick Start: Web (React 19 / Vite / Next.js)

### 1. Import Design System Styles
Include the CSS design tokens at the root of your application (e.g. `main.tsx`, `_app.tsx`, or `layout.tsx`):

```tsx
import '@thatguycodes/design-system/styles.css';
```

### 2. Import & Use Components
Web components are exported under the `@thatguycodes/design-system/web` entry point:

```tsx
import React from 'react';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@thatguycodes/design-system/web';

export default function Dashboard() {
  return (
    <Card className="max-w-md mx-auto my-8 p-6 bg-card border-border shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Sovereign Terminal</CardTitle>
          <Badge variant="emerald">PROD ACTIVE</Badge>
        </div>
        <CardDescription>
          Zero-overhead micro-infrastructure powered by ThatGuyCodes.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 pt-4">
        <Input placeholder="Enter prompt or query..." />
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="w-full">
              Deploy Pipeline
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Deploy Confirmation</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground py-2">
              Are you sure you want to deploy to production cluster?
            </p>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
```

---

## 📱 Quick Start: Mobile (React Native / Expo / NativeWind)

Native primitives are exported under `@thatguycodes/design-system/native`:

```tsx
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  AuthPhoneCard,
} from '@thatguycodes/design-system/native';

export default function MobileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Card>
          <CardHeader>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardTitle>Mobile Cockpit</CardTitle>
              <Badge variant="emerald">ONLINE</Badge>
            </View>
          </CardHeader>
          <CardContent>
            <Input placeholder="+1 (555) 019-2834" />
            <Button
              variant="default"
              onPress={() => console.log('Action triggered')}
              style={{ marginTop: 12 }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Authenticate</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </SafeAreaView>
  );
}
```

---

## 🎨 Universal Design Tokens

Direct programmatic access to design tokens across web, mobile, and build tools:

```typescript
import {
  colors,
  darkThemeColors,
  lightThemeColors,
  getTokens,
  radii,
  typography,
  shadows,
} from '@thatguycodes/design-system/tokens';

// Access theme-specific tokens
const darkTokens = getTokens('dark');
const lightTokens = getTokens('light');

console.log(darkTokens.colors.background); // "#09090b"
console.log(darkTokens.colors.primary);    // "#6366f1"
console.log(radii.md);                     // "0.5rem"
```

---

## 🧩 Complete Component Catalog

### Web Components (`@thatguycodes/design-system/web`)
| Category | Components | Documentation |
| :--- | :--- | :--- |
| **Surfaces & Containers** | `Accordion`, `Card`, `Table`, `Separator`, `Collapsible`, `ScrollArea` | [Accordion Docs](docs/components/accordion.md) • [Card Docs](docs/components/card.md) |
| **Actions** | `Button`, `Toggle`, `ToggleGroup` | [Button Docs](docs/components/button.md) |
| **Overlays & Modals** | `Dialog`, `AlertDialog`, `Sheet`, `Popover`, `Tooltip`, `HoverCard`, `DropdownMenu`, `ContextMenu` | [Dialog Docs](docs/components/dialog.md) |
| **Forms** | `Input`, `Textarea`, `Checkbox`, `Switch`, `Slider`, `RadioGroup`, `Select`, `PhoneInput` | [Live Showcase](https://thatguycodes.github.io/thatguycodes/) |
| **Navigation** | `Breadcrumb`, `NavigationMenu`, `Pagination`, `Tabs` | [Live Showcase](https://thatguycodes.github.io/thatguycodes/) |
| **Feedback & Status** | `Alert`, `Badge`, `Progress`, `Skeleton`, `Avatar` | [Live Showcase](https://thatguycodes.github.io/thatguycodes/) |

### Native Components (`@thatguycodes/design-system/native`)
- `Button`
- `Badge`
- `Card` (with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`)
- `Input` & `Textarea`
- `Checkbox` & `Switch`
- `Dialog` & `Sheet`
- `Tabs`
- `Avatar`
- `Progress` & `Skeleton`
- `AuthPhoneCard` (Pre-composed authentication block)

---

## 🌓 Theming & CSS Custom Properties

The design system stylesheet includes complete CSS variables for two themes:
1. **Obsidian Dark Mode** (`.dark` class or `data-theme="dark"`)
2. **Daylight Light Mode** (`:root` default or `data-theme="light"`)

```css
/* Example custom theme override */
:root {
  --primary: 243 75% 59%;
  --radius: 0.5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
}
```

---

## 🤝 Repository & Contributing
The design system is developed inside the [thatguycodes monorepo](https://github.com/thatguycodes/thatguycodes).

To contribute, report issues, or suggest new components, please see the [Contributing Guidelines](https://github.com/thatguycodes/thatguycodes/blob/main/CONTRIBUTING.md).

---

## 📄 License
MIT © [ThatGuyCodes](https://github.com/thatguycodes)
