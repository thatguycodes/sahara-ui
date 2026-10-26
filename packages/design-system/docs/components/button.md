# Button

Interactive button component supporting polymorphic slot rendering (`asChild`), multiple visual variants (`default`, `terracotta`, `amber`, `sandstone`, `glow`, `secondary`, `destructive`, `outline`, `ghost`, `link`), and loading indicators.

---

## Installation

```bash
npm install @thatguycodes/design-system
```

---

## Usage

### Web (React 19)

```tsx
import { Button } from "@thatguycodes/design-system/web";
import { Sparkles, Terminal } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="terracotta" rightIcon={<Sparkles className="w-4 h-4" />}>
        Terracotta CTA
      </Button>
      <Button variant="amber">Amber Radiant</Button>
      <Button variant="outline" leftIcon={<Terminal className="w-4 h-4" />}>
        Terminal CLI
      </Button>
      <Button variant="glow">Sovereign Glow</Button>
    </div>
  );
}
```

### Mobile (React Native / Expo)

```tsx
import { Button } from "@thatguycodes/design-system/native";
import { Text } from "react-native";

export default function MobileButton() {
  return (
    <Button variant="default" onPress={() => console.log('Tapped')}>
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>Deploy Enclave</Text>
    </Button>
  );
}
```

---

## API Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline" \| "ghost" \| "link" \| "terracotta" \| "amber" \| "sandstone" \| "glow"` | `"default"` | Aesthetic visual styling variant. |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Dimensional sizing and internal padding. |
| `asChild` | `boolean` | `false` | Merges button attributes onto child element via Radix Slot. |
| `disabled` | `boolean` | `false` | Prevents pointer events and dims opacity. |
| `leftIcon` | `React.ReactNode` | `undefined` | Icon positioned before children. |
| `rightIcon` | `React.ReactNode` | `undefined` | Icon positioned after children. |
