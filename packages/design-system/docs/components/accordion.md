# Accordion

A vertically stacked set of interactive headings that each reveal a section of content. Built with Radix Accordion primitive and styled with ThatGuyCodes design tokens.

---

## Installation

```bash
# Using npm
npm install @thatguycodes/design-system

# Using Yarn
yarn add @thatguycodes/design-system

# Using pnpm
pnpm add @thatguycodes/design-system
```

---

## Usage

### Web (React 19 / Next.js / Vite)

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@thatguycodes/design-system/web";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern with full keyboard navigation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does it support dual-mode themes?</AccordionTrigger>
        <AccordionContent>
          Yes. Seamlessly switches between Obsidian Dark mode and Daylight Light mode.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes. Uses CSS keyframes to smoothly expand and collapse content height.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
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

export default function MobileAccordion() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Section Header</CardTitle>
      </CardHeader>
      <CardContent>
        <Text>Disclosure content in React Native.</Text>
      </CardContent>
    </Card>
  );
}
```

---

## Anatomy

```tsx
<Accordion>
  <AccordionItem>
    <AccordionTrigger />
    <AccordionContent />
  </AccordionItem>
</Accordion>
```

---

## API Reference

### Accordion

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | `"single" \| "multiple"` | `"single"` | Determines whether a single or multiple items can be opened simultaneously. |
| `collapsible` | `boolean` | `false` | When type is `"single"`, allows closing content when clicking the open trigger. |
| `defaultValue` | `string \| string[]` | `undefined` | The value of the item(s) to expand by default when initially rendered. |
| `value` | `string \| string[]` | `undefined` | The controlled value of the expanded item(s). |
| `onValueChange` | `(value: string \| string[]) => void` | `undefined` | Callback invoked when the expanded state changes. |
| `disabled` | `boolean` | `false` | When `true`, prevents user interaction across all items. |

### AccordionItem

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string` | *(required)* | A unique value identifying the accordion item. |
| `disabled` | `boolean` | `false` | When `true`, prevents user from interacting with this specific item. |

### AccordionTrigger

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | *(required)* | Heading label and trigger content. |

### AccordionContent

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | *(required)* | The collapsible body content revealed when expanded. |

---

## Accessibility

Adheres to the [WAI-ARIA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

### Keyboard Navigation

- **Space or Enter**: Activates the focused accordion trigger and toggles expansion.
- **Tab**: Moves focus to the next interactive element.
- **Down Arrow**: Moves focus to the next accordion trigger.
- **Up Arrow**: Moves focus to the previous accordion trigger.
- **Home**: Moves focus to the first accordion trigger.
- **End**: Moves focus to the last accordion trigger.

### ARIA Attributes

- `aria-expanded`: Indicates whether the collapsible panel is open or closed.
- `aria-controls`: Associates the trigger button with the collapsible content region.
- `aria-labelledby`: Associates the content region with the triggering header button.
