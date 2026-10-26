# Card

A versatile compound container used to group related information, controls, and actions. Includes sub-components: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.

---

## Installation

```bash
npm install @thatguycodes/design-system
```

---

## Usage

### Web (React 19)

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
} from "@thatguycodes/design-system/web";

export default function CardDemo() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Enclave-01</CardTitle>
          <Badge variant="emerald">ONLINE</Badge>
        </div>
        <CardDescription>Sovereign edge cluster</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Operating with $0.00/mo cloud expenditure.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Metrics</Button>
        <Button variant="default" size="sm">Inspect</Button>
      </CardFooter>
    </Card>
  );
}
```

### Mobile (React Native / Expo)

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@thatguycodes/design-system/native";
import { Text } from "react-native";

export default function MobileCardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mobile Enclave</CardTitle>
      </CardHeader>
      <CardContent>
        <Text>Native card container rendered with cross-platform design tokens.</Text>
      </CardContent>
    </Card>
  );
}
```
