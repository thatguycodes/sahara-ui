# Dialog

A modal window displayed on top of the primary window. Built on Radix Dialog primitive with portal rendering, background overlay backdrop, focus trap, and escape key dismiss.

---

## Installation

```bash
npm install @thatguycodes/design-system
```

---

## Usage

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@thatguycodes/design-system/web";
import { Button } from "@thatguycodes/design-system/web";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Deploy Enclave</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Deploy Mirage Protocol</DialogTitle>
          <DialogDescription>
            This will spin up a zero-overhead micro-infrastructure cluster.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">Confirm cluster configuration parameters.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="terracotta">Confirm Deploy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

---

## API Reference

### Dialog

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | `undefined` | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | Initial open state when uncontrolled. |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback invoked when open state changes. |
| `modal` | `boolean` | `true` | When true, interactions outside modal are disabled. |
