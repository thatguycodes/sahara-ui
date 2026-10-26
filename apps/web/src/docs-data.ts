export interface ComponentPropDoc {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ComponentExampleDoc {
  title: string;
  description?: string;
  code: string;
}

export interface ComponentDoc {
  id: string;
  name: string;
  description: string;
  category: 'Primitives' | 'Forms' | 'Surfaces' | 'Overlays' | 'Navigation' | 'Feedback' | 'Patterns';
  webImport: string;
  mobileImport?: string;
  anatomy: string;
  usageCode: string;
  mobileUsageCode?: string;
  props: ComponentPropDoc[];
  accessibility: {
    role?: string;
    keyboard?: string[];
    aria?: string[];
  };
  examples: ComponentExampleDoc[];
}

export const COMPONENT_DOCS: Record<string, ComponentDoc> = {
  accordion: {
    id: 'accordion',
    name: 'Accordion',
    description: 'A vertically stacked set of interactive headings that each reveal a section of content. Built with Radix Accordion primitive and styled with atomic design tokens.',
    category: 'Surfaces',
    webImport: `import {\n  Accordion,\n  AccordionItem,\n  AccordionTrigger,\n  AccordionContent,\n} from "@thatguycodes/design-system/web";`,
    mobileImport: `import {\n  Card,\n  CardHeader,\n  CardTitle,\n  CardContent,\n} from "@thatguycodes/design-system/native";`,
    anatomy: `<Accordion type="single" collapsible>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Section Title</AccordionTrigger>\n    <AccordionContent>\n      Expanded section content.\n    </AccordionContent>\n  </AccordionItem>\n</Accordion>`,
    usageCode: `<Accordion type="single" collapsible className="w-full">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is the ThatGuyCodes Design System accessible?</AccordionTrigger>\n    <AccordionContent>\n      Yes. It adheres to the WAI-ARIA design pattern with full keyboard navigation and high-contrast color tokens.\n    </AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionTrigger>Does it support dark and light mode?</AccordionTrigger>\n    <AccordionContent>\n      Yes, it features dual-mode tokens: Obsidian Dark mode and Daylight Light mode with instant CSS custom property switching.\n    </AccordionContent>\n  </AccordionItem>\n</Accordion>`,
    mobileUsageCode: `// Mobile disclosure pattern\n<Card>\n  <CardHeader>\n    <CardTitle>Accordion Item 1</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <Text>Mobile disclosure content</Text>\n  </CardContent>\n</Card>`,
    props: [
      { name: 'type', type: '"single" | "multiple"', default: '"single"', description: 'Determines whether a single or multiple items can be opened simultaneously.' },
      { name: 'collapsible', type: 'boolean', default: 'false', description: 'When type is "single", allows closing content when clicking the open trigger.' },
      { name: 'defaultValue', type: 'string | string[]', default: 'undefined', description: 'The value of the item(s) to expand by default.' },
      { name: 'value', type: 'string | string[]', default: 'undefined', description: 'The controlled value of the expanded item(s).' },
      { name: 'onValueChange', type: '(value: string | string[]) => void', default: 'undefined', description: 'Callback invoked when the expanded state changes.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'When true, prevents user interaction across all items.' },
    ],
    accessibility: {
      role: 'region',
      keyboard: [
        'Space or Enter: Activates the accordion trigger and expands/collapses the item.',
        'Tab: Moves focus to the next interactive element.',
        'Down Arrow: Moves focus to the next accordion trigger.',
        'Up Arrow: Moves focus to the previous accordion trigger.',
        'Home: Moves focus to the first accordion trigger.',
        'End: Moves focus to the last accordion trigger.',
      ],
      aria: [
        'aria-expanded: Indicates whether the content panel is open or closed.',
        'aria-controls: Identifies the panel element controlled by the trigger.',
        'aria-labelledby: Associates the panel with its triggering header.',
      ],
    },
    examples: [
      {
        title: 'Multiple Expansion Mode',
        description: 'Allow users to expand multiple accordion sections at once.',
        code: `<Accordion type="multiple">\n  <AccordionItem value="features">\n    <AccordionTrigger>Core Features</AccordionTrigger>\n    <AccordionContent>Full-stack sovereign micro-services.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="pricing">\n    <AccordionTrigger>Zero-Overhead Pricing</AccordionTrigger>\n    <AccordionContent>$0.00/month infrastructure setup.</AccordionContent>\n  </AccordionItem>\n</Accordion>`,
      },
    ],
  },

  button: {
    id: 'button',
    name: 'Button',
    description: 'Interactive button component supporting polymorphic slot rendering (asChild), multiple aesthetic variants (default, terracotta, amber, sandstone, glow, ghost, outline), and loading states.',
    category: 'Primitives',
    webImport: `import { Button } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Button } from "@thatguycodes/design-system/native";`,
    anatomy: `<Button variant="default" size="default">\n  Click me\n</Button>`,
    usageCode: `<div className="flex gap-3 flex-wrap">\n  <Button variant="default">Default Button</Button>\n  <Button variant="terracotta">Terracotta Accent</Button>\n  <Button variant="amber">Amber Radiant</Button>\n  <Button variant="outline">Outlined</Button>\n  <Button variant="ghost">Ghost Button</Button>\n</div>`,
    mobileUsageCode: `<Button variant="default" onPress={() => console.log('Tapped')}>\n  <Text style={{ color: '#fff' }}>Deploy Mirage</Text>\n</Button>`,
    props: [
      { name: 'variant', type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link" | "terracotta" | "amber" | "sandstone" | "glow"', default: '"default"', description: 'The visual style variant of the button.' },
      { name: 'size', type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: 'The dimension and padding size of the button.' },
      { name: 'asChild', type: 'boolean', default: 'false', description: 'Merges button props onto its immediate child using Radix Slot (e.g. Next.js Link or a tag).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables button interactions and reduces opacity.' },
      { name: 'leftIcon', type: 'React.ReactNode', default: 'undefined', description: 'Icon element positioned before button text.' },
      { name: 'rightIcon', type: 'React.ReactNode', default: 'undefined', description: 'Icon element positioned after button text.' },
    ],
    accessibility: {
      role: 'button',
      keyboard: ['Enter: Activates the button.', 'Space: Activates the button.'],
      aria: ['aria-disabled: Set to true when the button is inactive.', 'aria-busy: Set to true during loading state.'],
    },
    examples: [
      {
        title: 'Polymorphic Link Button',
        description: 'Render as a link using asChild to maintain semantics.',
        code: `<Button asChild variant="outline">\n  <a href="https://github.com/thatguycodes">GitHub Profile</a>\n</Button>`,
      },
    ],
  },

  input: {
    id: 'input',
    name: 'Input',
    description: 'Accessible single-line text input field styled with atomic focus rings, clear borders, and support for leading/trailing icon adornments.',
    category: 'Forms',
    webImport: `import { Input } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Input } from "@thatguycodes/design-system/native";`,
    anatomy: `<Input placeholder="Enter username..." />`,
    usageCode: `<div className="space-y-4 max-w-sm">\n  <Input placeholder="Enter sovereign email..." type="email" />\n  <Input placeholder="Search telemetry..." leftIcon={<Search className="w-4 h-4 text-muted-foreground" />} />\n  <Input disabled value="Readonly API Key" />\n</div>`,
    mobileUsageCode: `<Input placeholder="Enter phone number..." keyboardType="phone-pad" />`,
    props: [
      { name: 'type', type: 'string', default: '"text"', description: 'HTML input type (text, password, email, number, etc.).' },
      { name: 'placeholder', type: 'string', default: 'undefined', description: 'Placeholder label text when input is empty.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables input interaction.' },
      { name: 'leftIcon', type: 'React.ReactNode', default: 'undefined', description: 'Leading icon displayed inside the input container.' },
      { name: 'rightIcon', type: 'React.ReactNode', default: 'undefined', description: 'Trailing icon or action button inside the input container.' },
      { name: 'error', type: 'boolean | string', default: 'false', description: 'Applies destructive error border and focus ring tokens.' },
    ],
    accessibility: {
      role: 'textbox',
      keyboard: ['Standard input keybindings.'],
      aria: ['aria-invalid: Set to true when error validation fails.', 'aria-required: Set to true when field is required.'],
    },
    examples: [
      {
        title: 'Input with Leading Icon',
        description: 'Input adorned with search icon.',
        code: `<Input leftIcon={<Search className="w-4 h-4 text-muted-foreground" />} placeholder="Search components..." />`,
      },
    ],
  },

  dialog: {
    id: 'dialog',
    name: 'Dialog',
    description: 'A modal window displayed on top of the primary window. Built with Radix Dialog with portal rendering, background overlay backdrop, focus trap, and escape key dismiss.',
    category: 'Overlays',
    webImport: `import {\n  Dialog,\n  DialogTrigger,\n  DialogContent,\n  DialogHeader,\n  DialogTitle,\n  DialogDescription,\n  DialogFooter,\n  DialogClose,\n} from "@thatguycodes/design-system/web";`,
    mobileImport: `import {\n  Dialog,\n  DialogHeader,\n  DialogTitle,\n  DialogContent,\n} from "@thatguycodes/design-system/native";`,
    anatomy: `<Dialog>\n  <DialogTrigger asChild>\n    <Button>Open</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Title</DialogTitle>\n      <DialogDescription>Description</DialogDescription>\n    </DialogHeader>\n    <div>Content</div>\n    <DialogFooter>\n      <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>\n      <Button>Confirm</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`,
    usageCode: `<Dialog>\n  <DialogTrigger asChild>\n    <Button variant="default">Deploy Protocol</Button>\n  </DialogTrigger>\n  <DialogContent className="sm:max-w-md">\n    <DialogHeader>\n      <DialogTitle>Deploy Mirage Protocol</DialogTitle>\n      <DialogDescription>\n        This will spin up a zero-overhead enclave on the sovereign mesh.\n      </DialogDescription>\n    </DialogHeader>\n    <div className="py-3">\n      <Input placeholder="Enclave cluster tag..." />\n    </div>\n    <DialogFooter>\n      <DialogClose asChild>\n        <Button variant="outline">Cancel</Button>\n      </DialogClose>\n      <Button variant="terracotta">Deploy Now</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`,
    mobileUsageCode: `<Dialog visible={open} onClose={() => setOpen(false)}>\n  <DialogHeader>\n    <DialogTitle>Mobile Modal</DialogTitle>\n  </DialogHeader>\n  <DialogContent>\n    <Text>Mobile modal viewport</Text>\n  </DialogContent>\n</Dialog>`,
    props: [
      { name: 'open', type: 'boolean', default: 'undefined', description: 'The controlled open state of the dialog.' },
      { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'The open state of the dialog when initially rendered.' },
      { name: 'onOpenChange', type: '(open: boolean) => void', default: 'undefined', description: 'Event handler called when open state changes.' },
      { name: 'modal', type: 'boolean', default: 'true', description: 'Whether the dialog is rendered as a modal preventing outside interactions.' },
    ],
    accessibility: {
      role: 'dialog',
      keyboard: ['Escape: Closes the dialog and returns focus to trigger.', 'Tab: Cycles focus trapped within the dialog.'],
      aria: ['aria-labelledby: Points to DialogTitle.', 'aria-describedby: Points to DialogDescription.'],
    },
    examples: [],
  },

  card: {
    id: 'card',
    name: 'Card',
    description: 'A versatile container used to group related information, controls, and actions. Includes semantic compound sub-components: CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.',
    category: 'Surfaces',
    webImport: `import {\n  Card,\n  CardHeader,\n  CardTitle,\n  CardDescription,\n  CardContent,\n  CardFooter,\n} from "@thatguycodes/design-system/web";`,
    mobileImport: `import {\n  Card,\n  CardHeader,\n  CardTitle,\n  CardDescription,\n  CardContent,\n  CardFooter,\n} from "@thatguycodes/design-system/native";`,
    anatomy: `<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n    <CardDescription>Description</CardDescription>\n  </CardHeader>\n  <CardContent>Body</CardContent>\n  <CardFooter>Footer</CardFooter>\n</Card>`,
    usageCode: `<Card className="w-full max-w-sm">\n  <CardHeader>\n    <div className="flex items-center justify-between">\n      <CardTitle>Enclave Alpha</CardTitle>\n      <Badge variant="emerald">ONLINE</Badge>\n    </div>\n    <CardDescription>Zero-overhead micro-service host</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p className="text-sm text-muted-foreground">Running 12 pods across distributed edge nodes.</p>\n  </CardContent>\n  <CardFooter className="flex justify-between">\n    <Button variant="outline" size="sm">Inspect</Button>\n    <Button variant="default" size="sm">Scale</Button>\n  </CardFooter>\n</Card>`,
    mobileUsageCode: `<Card>\n  <CardHeader>\n    <CardTitle>Mobile Enclave</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <Text>Cross-platform unified container.</Text>\n  </CardContent>\n</Card>`,
    props: [
      { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes for custom padding or theme borders.' },
      { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'Card inner content or subcomponents.' },
    ],
    accessibility: {
      role: 'group or article',
      keyboard: ['Follows standard content reading order.'],
      aria: ['aria-labelledby can be linked to CardTitle.'],
    },
    examples: [],
  },

  badge: {
    id: 'badge',
    name: 'Badge',
    description: 'Displays a small status label, tag, or indicator count with multiple semantic and desert mineral color variants.',
    category: 'Feedback',
    webImport: `import { Badge } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Badge } from "@thatguycodes/design-system/native";`,
    anatomy: `<Badge variant="default">Status</Badge>`,
    usageCode: `<div className="flex gap-2 flex-wrap">\n  <Badge variant="default">Default</Badge>\n  <Badge variant="secondary">Secondary</Badge>\n  <Badge variant="outline">Outlined</Badge>\n  <Badge variant="emerald">PROD $0.00/MO</Badge>\n  <Badge variant="amber">Sahara Amber</Badge>\n  <Badge variant="destructive">Critical Error</Badge>\n</div>`,
    mobileUsageCode: `<Badge variant="emerald"><Text>ONLINE</Text></Badge>`,
    props: [
      { name: 'variant', type: '"default" | "secondary" | "destructive" | "outline" | "emerald" | "amber" | "terracotta"', default: '"default"', description: 'The visual style of the badge.' },
      { name: 'pulse', type: 'boolean', default: 'false', description: 'Displays a pulsing radar dot indicator inside the badge.' },
    ],
    accessibility: {
      role: 'status',
      aria: ['aria-label: Recommended when badge contains icon-only or shortened status codes.'],
    },
    examples: [],
  },

  tabs: {
    id: 'tabs',
    name: 'Tabs',
    description: 'A set of layered sections of content (tab panels) that are displayed one at a time via clickable tab triggers.',
    category: 'Navigation',
    webImport: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@thatguycodes/design-system/native";`,
    anatomy: `<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Content 1</TabsContent>\n  <TabsContent value="tab2">Content 2</TabsContent>\n</Tabs>`,
    usageCode: `<Tabs defaultValue="overview" className="w-full">\n  <TabsList>\n    <TabsTrigger value="overview">Overview</TabsTrigger>\n    <TabsTrigger value="telemetry">Telemetry</TabsTrigger>\n    <TabsTrigger value="settings">Settings</TabsTrigger>\n  </TabsList>\n  <TabsContent value="overview" className="p-4 rounded-lg border border-border mt-2">\n    <p className="text-sm">Overview dashboard viewport.</p>\n  </TabsContent>\n  <TabsContent value="telemetry" className="p-4 rounded-lg border border-border mt-2">\n    <p className="text-sm">Real-time edge telemetry metrics.</p>\n  </TabsContent>\n</Tabs>`,
    mobileUsageCode: `<Tabs defaultValue="mobile1">\n  <TabsList><TabsTrigger value="mobile1"><Text>Screen 1</Text></TabsTrigger></TabsList>\n</Tabs>`,
    props: [
      { name: 'defaultValue', type: 'string', default: 'undefined', description: 'The initial active tab value.' },
      { name: 'value', type: 'string', default: 'undefined', description: 'The controlled active tab value.' },
      { name: 'onValueChange', type: '(value: string) => void', default: 'undefined', description: 'Callback invoked when active tab changes.' },
      { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The orientation of the tabs.' },
    ],
    accessibility: {
      role: 'tablist / tab / tabpanel',
      keyboard: ['Arrow Left / Right: Navigates through tabs.', 'Enter / Space: Activates focused tab.'],
      aria: ['aria-selected: True on the active tab trigger.', 'aria-controls: Links tab trigger to corresponding tabpanel.'],
    },
    examples: [],
  },

  sheet: {
    id: 'sheet',
    name: 'Sheet',
    description: 'Extends the Dialog component to display content that slides out from the edge of the screen (right, left, top, bottom). Ideal for side navigation, inspectors, and mobile menus.',
    category: 'Overlays',
    webImport: `import {\n  Sheet,\n  SheetTrigger,\n  SheetContent,\n  SheetHeader,\n  SheetTitle,\n  SheetDescription,\n} from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@thatguycodes/design-system/native";`,
    anatomy: `<Sheet>\n  <SheetTrigger asChild><Button>Open Drawer</Button></SheetTrigger>\n  <SheetContent side="right">\n    <SheetHeader>\n      <SheetTitle>Drawer Title</SheetTitle>\n      <SheetDescription>Drawer Description</SheetDescription>\n    </SheetHeader>\n    <div>Content</div>\n  </SheetContent>\n</Sheet>`,
    usageCode: `<Sheet>\n  <SheetTrigger asChild>\n    <Button variant="outline">Open Navigation Drawer</Button>\n  </SheetTrigger>\n  <SheetContent side="right">\n    <SheetHeader>\n      <SheetTitle>Sovereign Controls</SheetTitle>\n      <SheetDescription>Configure edge node topology</SheetDescription>\n    </SheetHeader>\n    <div className="py-4 space-y-3">\n      <Input placeholder="Node IP Address" />\n      <Button className="w-full">Save Changes</Button>\n    </div>\n  </SheetContent>\n</Sheet>`,
    mobileUsageCode: `<Sheet visible={isOpen} onClose={() => setOpen(false)} side="bottom">\n  <SheetContent><Text>Bottom Sheet Drawer</Text></SheetContent>\n</Sheet>`,
    props: [
      { name: 'side', type: '"top" | "bottom" | "left" | "right"', default: '"right"', description: 'The viewport edge from which the drawer sheet animates.' },
      { name: 'open', type: 'boolean', default: 'undefined', description: 'The controlled open state of the sheet.' },
      { name: 'onOpenChange', type: '(open: boolean) => void', default: 'undefined', description: 'Callback invoked when open state changes.' },
    ],
    accessibility: {
      role: 'dialog',
      keyboard: ['Escape: Closes drawer and restores focus.', 'Tab: Traps keyboard focus inside drawer.'],
      aria: ['aria-modal="true"'],
    },
    examples: [],
  },

  select: {
    id: 'select',
    name: 'Select',
    description: 'Displays a customizable dropdown list of options with popper auto-positioning, keyboard filtering, and native-feeling interactions.',
    category: 'Forms',
    webImport: `import {\n  Select,\n  SelectTrigger,\n  SelectValue,\n  SelectContent,\n  SelectItem,\n} from "@thatguycodes/design-system/web";`,
    anatomy: `<Select>\n  <SelectTrigger><SelectValue placeholder="Choose theme" /></SelectTrigger>\n  <SelectContent>\n    <SelectItem value="obsidian">Obsidian Dark</SelectItem>\n    <SelectItem value="daylight">Daylight Light</SelectItem>\n  </SelectContent>\n</Select>`,
    usageCode: `<Select defaultValue="obsidian">\n  <SelectTrigger className="w-[180px]">\n    <SelectValue placeholder="Select theme" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="obsidian">Obsidian Dark</SelectItem>\n    <SelectItem value="daylight">Daylight Light</SelectItem>\n    <SelectItem value="sahara">Sahara Mineral</SelectItem>\n  </SelectContent>\n</Select>`,
    props: [
      { name: 'defaultValue', type: 'string', default: 'undefined', description: 'Initial selected value.' },
      { name: 'value', type: 'string', default: 'undefined', description: 'Controlled selected value.' },
      { name: 'onValueChange', type: '(value: string) => void', default: 'undefined', description: 'Callback invoked when selection changes.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables select menu interaction.' },
    ],
    accessibility: {
      role: 'combobox',
      keyboard: ['Arrow Down / Up: Moves highlight between options.', 'Enter: Selects focused option.', 'Escape: Closes dropdown.'],
      aria: ['aria-expanded: Indicates open/closed state.'],
    },
    examples: [],
  },

  switch: {
    id: 'switch',
    name: 'Switch',
    description: 'A control that allows the user to toggle between two states: checked or unchecked. Adheres to switch ARIA specifications.',
    category: 'Forms',
    webImport: `import { Switch } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Switch } from "@thatguycodes/design-system/native";`,
    anatomy: `<Switch checked={true} onCheckedChange={(val) => {}} />`,
    usageCode: `<div className="flex items-center space-x-2">\n  <Switch id="airplane-mode" defaultChecked />\n  <label htmlFor="airplane-mode" className="text-sm font-medium">Sovereign Mesh Encryption</label>\n</div>`,
    mobileUsageCode: `<Switch value={isEnabled} onValueChange={setIsEnabled} />`,
    props: [
      { name: 'checked', type: 'boolean', default: 'undefined', description: 'The controlled state of the switch.' },
      { name: 'defaultChecked', type: 'boolean', default: 'false', description: 'Initial state when uncontrolled.' },
      { name: 'onCheckedChange', type: '(checked: boolean) => void', default: 'undefined', description: 'Callback when toggle state changes.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction.' },
    ],
    accessibility: {
      role: 'switch',
      keyboard: ['Space / Enter: Toggles state between on and off.'],
      aria: ['aria-checked: Reflects true/false toggle state.'],
    },
    examples: [],
  },

  checkbox: {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'A control that allows the user to select one or more options from a set. Includes animated checkmark indicator.',
    category: 'Forms',
    webImport: `import { Checkbox } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Checkbox } from "@thatguycodes/design-system/native";`,
    anatomy: `<Checkbox checked={true} />`,
    usageCode: `<div className="flex items-center space-x-2">\n  <Checkbox id="terms" defaultChecked />\n  <label htmlFor="terms" className="text-sm text-foreground">Accept sovereign terms & conditions</label>\n</div>`,
    mobileUsageCode: `<Checkbox checked={isChecked} onChange={setChecked} />`,
    props: [
      { name: 'checked', type: 'boolean | "indeterminate"', default: 'undefined', description: 'The controlled checked state.' },
      { name: 'onCheckedChange', type: '(checked: boolean) => void', default: 'undefined', description: 'Callback when state changes.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction.' },
    ],
    accessibility: {
      role: 'checkbox',
      keyboard: ['Space: Toggles checkbox.'],
      aria: ['aria-checked: True, false, or mixed.'],
    },
    examples: [],
  },

  textarea: {
    id: 'textarea',
    name: 'Textarea',
    description: 'Multi-line text input field styled with atomic border tokens, focus rings, and responsive auto-resize support.',
    category: 'Forms',
    webImport: `import { Textarea } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Textarea } from "@thatguycodes/design-system/native";`,
    anatomy: `<Textarea placeholder="Type your message..." />`,
    usageCode: `<Textarea placeholder="Describe the enclave configuration..." rows={4} className="max-w-md" />`,
    mobileUsageCode: `<Textarea multiline numberOfLines={4} placeholder="Type notes..." />`,
    props: [
      { name: 'placeholder', type: 'string', default: 'undefined', description: 'Placeholder guidance text.' },
      { name: 'rows', type: 'number', default: '3', description: 'Number of visible text lines.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables typing.' },
    ],
    accessibility: {
      role: 'textbox',
      aria: ['aria-multiline="true"'],
    },
    examples: [],
  },

  avatar: {
    id: 'avatar',
    name: 'Avatar',
    description: 'An image element with an automated fallback for representing the user or identity.',
    category: 'Feedback',
    webImport: `import { Avatar, AvatarImage, AvatarFallback } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Avatar, AvatarImage, AvatarFallback } from "@thatguycodes/design-system/native";`,
    anatomy: `<Avatar>\n  <AvatarImage src="https://github.com/thatguycodes.png" alt="@thatguycodes" />\n  <AvatarFallback>TC</AvatarFallback>\n</Avatar>`,
    usageCode: `<div className="flex gap-3 items-center">\n  <Avatar>\n    <AvatarImage src="https://github.com/thatguycodes.png" />\n    <AvatarFallback>TC</AvatarFallback>\n  </Avatar>\n  <Avatar>\n    <AvatarFallback>SA</AvatarFallback>\n  </Avatar>\n</div>`,
    mobileUsageCode: `<Avatar><AvatarFallback><Text>TC</Text></AvatarFallback></Avatar>`,
    props: [
      { name: 'src', type: 'string', default: 'undefined', description: 'Image URL source on AvatarImage.' },
      { name: 'alt', type: 'string', default: 'undefined', description: 'Alternative text for accessibility.' },
      { name: 'delayMs', type: 'number', default: '600', description: 'Delay in milliseconds before rendering fallback initials.' },
    ],
    accessibility: {
      role: 'img',
      aria: ['alt prop required on AvatarImage.'],
    },
    examples: [],
  },

  progress: {
    id: 'progress',
    name: 'Progress',
    description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    category: 'Feedback',
    webImport: `import { Progress } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Progress } from "@thatguycodes/design-system/native";`,
    anatomy: `<Progress value={65} max={100} />`,
    usageCode: `<div className="w-full max-w-sm space-y-2">\n  <div className="flex justify-between text-xs">\n    <span>Deploying Enclave Pods</span>\n    <span className="font-mono">78%</span>\n  </div>\n  <Progress value={78} />\n</div>`,
    mobileUsageCode: `<Progress value={78} />`,
    props: [
      { name: 'value', type: 'number', default: '0', description: 'Current progress percentage (0 - 100).' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum completion value.' },
    ],
    accessibility: {
      role: 'progressbar',
      aria: ['aria-valuenow: Current value.', 'aria-valuemin: 0.', 'aria-valuemax: Max value.'],
    },
    examples: [],
  },

  skeleton: {
    id: 'skeleton',
    name: 'Skeleton',
    description: 'Use to show a placeholder shimmering animation while content or data is actively loading.',
    category: 'Feedback',
    webImport: `import { Skeleton } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Skeleton } from "@thatguycodes/design-system/native";`,
    anatomy: `<Skeleton className="w-[100px] h-[20px] rounded-full" />`,
    usageCode: `<div className="flex items-center space-x-4">\n  <Skeleton className="h-12 w-12 rounded-full" />\n  <div className="space-y-2">\n    <Skeleton className="h-4 w-[250px]" />\n    <Skeleton className="h-4 w-[200px]" />\n  </div>\n</div>`,
    mobileUsageCode: `<Skeleton style={{ width: 120, height: 20, borderRadius: 4 }} />`,
    props: [
      { name: 'className', type: 'string', default: 'undefined', description: 'Defines dimension and radius styling.' },
    ],
    accessibility: {
      aria: ['aria-hidden="true" recommended since it represents placeholder visuals.'],
    },
    examples: [],
  },

  slider: {
    id: 'slider',
    name: 'Slider',
    description: 'An input where the user selects a value from within a given range by sliding a thumb along a horizontal track.',
    category: 'Forms',
    webImport: `import { Slider } from "@thatguycodes/design-system/web";`,
    anatomy: `<Slider defaultValue={[50]} max={100} step={1} />`,
    usageCode: `<div className="w-full max-w-sm space-y-2">\n  <label className="text-xs font-mono text-muted-foreground">Thermal Cap: 320W</label>\n  <Slider defaultValue={[65]} max={100} step={1} />\n</div>`,
    props: [
      { name: 'value', type: 'number[]', default: 'undefined', description: 'Controlled slider values array.' },
      { name: 'defaultValue', type: 'number[]', default: '[0]', description: 'Uncontrolled initial values.' },
      { name: 'min', type: 'number', default: '0', description: 'Minimum value.' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
      { name: 'step', type: 'number', default: '1', description: 'Stepping interval.' },
    ],
    accessibility: {
      role: 'slider',
      keyboard: ['Arrow Right / Up: Increases value.', 'Arrow Left / Down: Decreases value.', 'Home / End: Jumps to min / max.'],
    },
    examples: [],
  },

  alert: {
    id: 'alert',
    name: 'Alert',
    description: 'Displays a callout banner communicating important messages, notifications, or status feedback to users.',
    category: 'Feedback',
    webImport: `import { Alert, AlertTitle, AlertDescription } from "@thatguycodes/design-system/web";`,
    anatomy: `<Alert variant="default">\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>You can configure components.</AlertDescription>\n</Alert>`,
    usageCode: `<Alert variant="default">\n  <Terminal className="h-4 w-4" />\n  <AlertTitle>Sovereign Node Active</AlertTitle>\n  <AlertDescription>\n    Node telemetry is streaming on port 8080 with zero egress cost.\n  </AlertDescription>\n</Alert>`,
    props: [
      { name: 'variant', type: '"default" | "destructive"', default: '"default"', description: 'Visual intent of the alert banner.' },
    ],
    accessibility: {
      role: 'alert',
      aria: ['aria-live="polite" or "assertive"'],
    },
    examples: [],
  },

  tooltip: {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    category: 'Overlays',
    webImport: `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@thatguycodes/design-system/web";`,
    anatomy: `<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger>\n    <TooltipContent><p>Add to library</p></TooltipContent>\n  </Tooltip>\n</TooltipProvider>`,
    usageCode: `<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger asChild>\n      <Button variant="outline" size="icon"><Zap className="w-4 h-4" /></Button>\n    </TooltipTrigger>\n    <TooltipContent>\n      <p>Instant Hot Reload Trigger</p>\n    </TooltipContent>\n  </Tooltip>\n</TooltipProvider>`,
    props: [
      { name: 'delayDuration', type: 'number', default: '700', description: 'Duration in milliseconds before the tooltip displays.' },
      { name: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: 'Preferred side of the trigger to render.' },
    ],
    accessibility: {
      role: 'tooltip',
      keyboard: ['Escape: Closes tooltip immediately without moving focus.'],
    },
    examples: [],
  },

  popover: {
    id: 'popover',
    name: 'Popover',
    description: 'Displays rich content in a portal, triggered by a button click. Unlike Tooltip, Popover supports interactive contents and focus management.',
    category: 'Overlays',
    webImport: `import { Popover, PopoverTrigger, PopoverContent } from "@thatguycodes/design-system/web";`,
    anatomy: `<Popover>\n  <PopoverTrigger asChild><Button>Open Popover</Button></PopoverTrigger>\n  <PopoverContent>Place content here.</PopoverContent>\n</Popover>`,
    usageCode: `<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="outline">Telemetry Filters</Button>\n  </PopoverTrigger>\n  <PopoverContent className="w-80">\n    <div className="grid gap-4">\n      <h4 className="font-medium text-sm">Dimensions</h4>\n      <Input placeholder="Cluster ID..." />\n      <Button size="sm">Apply</Button>\n    </div>\n  </PopoverContent>\n</Popover>`,
    props: [
      { name: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: 'Preferred placement edge.' },
      { name: 'align', type: '"start" | "center" | "end"', default: '"center"', description: 'Alignment relative to trigger.' },
    ],
    accessibility: {
      role: 'dialog',
      keyboard: ['Escape: Dismisses popover.'],
    },
    examples: [],
  },

  table: {
    id: 'table',
    name: 'Table',
    description: 'A responsive, semantic tabular container for displaying structured datasets with atomic row borders and header styling.',
    category: 'Surfaces',
    webImport: `import {\n  Table,\n  TableHeader,\n  TableBody,\n  TableHead,\n  TableRow,\n  TableCell,\n} from "@thatguycodes/design-system/web";`,
    anatomy: `<Table>\n  <TableHeader><TableRow><TableHead>Col</TableHead></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>Val</TableCell></TableRow></TableBody>\n</Table>`,
    usageCode: `<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Protocol</TableHead>\n      <TableHead>Status</TableHead>\n      <TableHead className="text-right">Monthly Cost</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell className="font-mono">Mirage Edge</TableCell>\n      <TableCell><Badge variant="emerald">ACTIVE</Badge></TableCell>\n      <TableCell className="text-right font-mono">$0.00</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`,
    props: [
      { name: 'className', type: 'string', default: 'undefined', description: 'Additional container styling.' },
    ],
    accessibility: {
      role: 'table',
      aria: ['Adheres to standard HTML5 table accessibility.'],
    },
    examples: [],
  },

  dropdownMenu: {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    description: 'Displays a menu to the user—such as a set of actions or functions—triggered by a button click.',
    category: 'Overlays',
    webImport: `import {\n  DropdownMenu,\n  DropdownMenuTrigger,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuLabel,\n  DropdownMenuSeparator,\n} from "@thatguycodes/design-system/web";`,
    anatomy: `<DropdownMenu>\n  <DropdownMenuTrigger asChild><Button>Options</Button></DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>My Account</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`,
    usageCode: `<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Actions Menu</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent className="w-56">\n    <DropdownMenuLabel>Cluster Node Actions</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Rotate Wireguard Keys</DropdownMenuItem>\n    <DropdownMenuItem>Purge Ingress Cache</DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem className="text-destructive">Tear Down Node</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`,
    props: [
      { name: 'open', type: 'boolean', default: 'undefined', description: 'Controlled open state.' },
      { name: 'onOpenChange', type: '(open: boolean) => void', default: 'undefined', description: 'Event handler called when open state changes.' },
    ],
    accessibility: {
      role: 'menu',
      keyboard: ['Arrow Down / Up: Moves highlight between menu items.', 'Enter: Triggers menu action.'],
    },
    examples: [],
  },

  'alert-dialog': {
    id: 'alert-dialog',
    name: 'Alert Dialog',
    description: 'A modal dialog that interrupts the user with important content and expects an affirmative or cancelling response. Focus is trapped and clicking outside does not dismiss.',
    category: 'Overlays',
    webImport: `import {\n  AlertDialog,\n  AlertDialogTrigger,\n  AlertDialogContent,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogAction,\n  AlertDialogCancel,\n} from "@thatguycodes/design-system/web";`,
    mobileImport: `import {\n  Dialog,\n  DialogHeader,\n  DialogTitle,\n  DialogContent,\n} from "@thatguycodes/design-system/native";`,
    anatomy: `<AlertDialog>\n  <AlertDialogTrigger asChild><Button>Delete</Button></AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\n      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Cancel</AlertDialogCancel>\n      <AlertDialogAction>Continue</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`,
    usageCode: `<AlertDialog>\n  <AlertDialogTrigger asChild>\n    <Button variant="destructive">Tear Down Node</Button>\n  </AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Confirm Enclave Destruction</AlertDialogTitle>\n      <AlertDialogDescription>\n        This will permanently revoke your cryptographic keys and purge local cache.\n      </AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Abort</AlertDialogCancel>\n      <AlertDialogAction className="bg-destructive text-destructive-foreground">Confirm Purge</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`,
    props: [
      { name: 'open', type: 'boolean', default: 'undefined', description: 'The controlled open state.' },
      { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'The initial open state.' },
      { name: 'onOpenChange', type: '(open: boolean) => void', default: 'undefined', description: 'State change callback.' },
    ],
    accessibility: {
      role: 'alertdialog',
      keyboard: ['Escape: Closes dialog.', 'Tab: Focus is trapped within modal.'],
      aria: ['aria-modal="true"'],
    },
    examples: [],
  },

  breadcrumb: {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'Displays the path to the current resource using a hierarchy of links and separators.',
    category: 'Navigation',
    webImport: `import {\n  Breadcrumb,\n  BreadcrumbList,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from "@thatguycodes/design-system/web";`,
    anatomy: `<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem><BreadcrumbPage>Dashboard</BreadcrumbPage></BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`,
    usageCode: `<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Enclaves</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/nodes">Sahara-Cluster-01</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Telemetry</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`,
    props: [
      { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'BreadcrumbList and children.' },
    ],
    accessibility: {
      role: 'navigation',
      aria: ['aria-label="breadcrumb"', 'aria-current="page" on BreadcrumbPage.'],
    },
    examples: [],
  },

  collapsible: {
    id: 'collapsible',
    name: 'Collapsible',
    description: 'An interactive component which expands/collapses a panel to reveal or hide arbitrary content.',
    category: 'Surfaces',
    webImport: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@thatguycodes/design-system/web";`,
    anatomy: `<Collapsible>\n  <CollapsibleTrigger><Button>Toggle</Button></CollapsibleTrigger>\n  <CollapsibleContent>Hidden content</CollapsibleContent>\n</Collapsible>`,
    usageCode: `<Collapsible>\n  <div className="flex items-center justify-between space-x-4 px-4">\n    <h4 className="text-sm font-semibold">@thatguycodes starred 3 repositories</h4>\n    <CollapsibleTrigger asChild>\n      <Button variant="ghost" size="sm">Toggle</Button>\n    </CollapsibleTrigger>\n  </div>\n  <CollapsibleContent className="space-y-2 mt-2">\n    <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@thatguycodes/design-system</div>\n  </CollapsibleContent>\n</Collapsible>`,
    props: [
      { name: 'open', type: 'boolean', default: 'undefined', description: 'Controlled open state.' },
      { name: 'onOpenChange', type: '(open: boolean) => void', default: 'undefined', description: 'State change callback.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables trigger.' },
    ],
    accessibility: {
      role: 'region',
      aria: ['aria-expanded: Reflects whether panel is expanded.'],
    },
    examples: [],
  },

  pagination: {
    id: 'pagination',
    name: 'Pagination',
    description: 'Pagination with page navigation links, next/previous buttons, and ellipsis for multi-page lists.',
    category: 'Navigation',
    webImport: `import {\n  Pagination,\n  PaginationContent,\n  PaginationItem,\n  PaginationLink,\n  PaginationNext,\n  PaginationPrevious,\n} from "@thatguycodes/design-system/web";`,
    anatomy: `<Pagination>\n  <PaginationContent>\n    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>\n    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>\n    <PaginationItem><PaginationNext href="#" /></PaginationItem>\n  </PaginationContent>\n</Pagination>`,
    usageCode: `<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationPrevious href="#" />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#" isActive>1</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#">2</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#">3</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationNext href="#" />\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>`,
    props: [
      { name: 'className', type: 'string', default: 'undefined', description: 'Nav container styling.' },
    ],
    accessibility: {
      role: 'navigation',
      aria: ['aria-label="pagination"'],
    },
    examples: [],
  },

  separator: {
    id: 'separator',
    name: 'Separator',
    description: 'Visually or semantically separates content horizontally or vertically with atomic border tokens.',
    category: 'Primitives',
    webImport: `import { Separator } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { Separator } from "@thatguycodes/design-system/native";`,
    anatomy: `<Separator orientation="horizontal" />`,
    usageCode: `<div>\n  <div className="space-y-1">\n    <h4 className="text-sm font-medium leading-none">Design Tokens</h4>\n    <p className="text-sm text-muted-foreground">Obsidian Dark and Daylight Light palettes.</p>\n  </div>\n  <Separator className="my-4" />\n  <div className="flex h-5 items-center space-x-4 text-sm">\n    <div>Web</div>\n    <Separator orientation="vertical" />\n    <div>Mobile</div>\n    <Separator orientation="vertical" />\n    <div>Tokens</div>\n  </div>\n</div>`,
    mobileUsageCode: `<Separator />`,
    props: [
      { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The orientation of the separator line.' },
      { name: 'decorative', type: 'boolean', default: 'true', description: 'Whether the separator is purely decorative (removes separator role from accessibility tree).' },
    ],
    accessibility: {
      role: 'separator',
      aria: ['aria-orientation: "horizontal" | "vertical"'],
    },
    examples: [],
  },

  'radio-group': {
    id: 'radio-group',
    name: 'Radio Group',
    description: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
    category: 'Forms',
    webImport: `import { RadioGroup, RadioGroupItem } from "@thatguycodes/design-system/web";`,
    anatomy: `<RadioGroup defaultValue="1">\n  <div className="flex items-center space-x-2">\n    <RadioGroupItem value="1" id="r1" />\n    <label htmlFor="r1">Option 1</label>\n  </div>\n</RadioGroup>`,
    usageCode: `<RadioGroup defaultValue="compact">\n  <div className="flex items-center space-x-2">\n    <RadioGroupItem value="default" id="r1" />\n    <label htmlFor="r1" className="text-sm">Standard Mesh</label>\n  </div>\n  <div className="flex items-center space-x-2">\n    <RadioGroupItem value="compact" id="r2" />\n    <label htmlFor="r2" className="text-sm">Zero-Egress Micro Host</label>\n  </div>\n</RadioGroup>`,
    props: [
      { name: 'defaultValue', type: 'string', default: 'undefined', description: 'The value of the radio item that should be checked when initially rendered.' },
      { name: 'value', type: 'string', default: 'undefined', description: 'Controlled value.' },
      { name: 'onValueChange', type: '(value: string) => void', default: 'undefined', description: 'Callback invoked when selection changes.' },
    ],
    accessibility: {
      role: 'radiogroup',
      keyboard: ['Arrow Down / Right: Selects next radio option.', 'Arrow Up / Left: Selects previous radio option.'],
    },
    examples: [],
  },

  toggle: {
    id: 'toggle',
    name: 'Toggle',
    description: 'A two-state button that can be either on or off with multiple styling variants.',
    category: 'Primitives',
    webImport: `import { Toggle } from "@thatguycodes/design-system/web";`,
    anatomy: `<Toggle aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>`,
    usageCode: `<div className="flex gap-2">\n  <Toggle aria-label="Toggle bold">\n    <Bold className="h-4 w-4" />\n  </Toggle>\n  <Toggle variant="outline" aria-label="Toggle italic">\n    <Italic className="h-4 w-4" />\n  </Toggle>\n</div>`,
    props: [
      { name: 'pressed', type: 'boolean', default: 'undefined', description: 'Controlled pressed state.' },
      { name: 'onPressedChange', type: '(pressed: boolean) => void', default: 'undefined', description: 'Callback when pressed state changes.' },
      { name: 'variant', type: '"default" | "outline"', default: '"default"', description: 'The visual variant.' },
    ],
    accessibility: {
      role: 'button',
      aria: ['aria-pressed: Indicates whether the toggle is active.'],
    },
    examples: [],
  },

  'toggle-group': {
    id: 'toggle-group',
    name: 'Toggle Group',
    description: 'A set of two-state buttons that can be toggled on or off with single or multiple item selection.',
    category: 'Primitives',
    webImport: `import { ToggleGroup, ToggleGroupItem } from "@thatguycodes/design-system/web";`,
    anatomy: `<ToggleGroup type="single">\n  <ToggleGroupItem value="a">A</ToggleGroupItem>\n  <ToggleGroupItem value="b">B</ToggleGroupItem>\n</ToggleGroup>`,
    usageCode: `<ToggleGroup type="single" defaultValue="center">\n  <ToggleGroupItem value="left" aria-label="Align left">\n    <AlignLeft className="h-4 w-4" />\n  </ToggleGroupItem>\n  <ToggleGroupItem value="center" aria-label="Align center">\n    <AlignCenter className="h-4 w-4" />\n  </ToggleGroupItem>\n  <ToggleGroupItem value="right" aria-label="Align right">\n    <AlignRight className="h-4 w-4" />\n  </ToggleGroupItem>\n</ToggleGroup>`,
    props: [
      { name: 'type', type: '"single" | "multiple"', default: '"single"', description: 'Determines whether single or multiple items can be pressed.' },
      { name: 'value', type: 'string | string[]', default: 'undefined', description: 'Controlled value(s).' },
      { name: 'onValueChange', type: '(value: any) => void', default: 'undefined', description: 'Value change callback.' },
    ],
    accessibility: {
      role: 'group',
      aria: ['aria-pressed on each item.'],
    },
    examples: [],
  },

  'phone-input': {
    id: 'phone-input',
    name: 'Auth Phone Card',
    description: 'A pre-composed, production-grade phone authentication pattern ported directly from Stitch, available on both Web and React Native.',
    category: 'Patterns',
    webImport: `import { AuthPhoneCard } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { AuthPhoneCard } from "@thatguycodes/design-system/native";`,
    anatomy: `<AuthPhoneCard onSendCode={(phone) => console.log(phone)} />`,
    usageCode: `<AuthPhoneCard\n  title="Sign in with Phone"\n  description="Receive a one-time 6-digit verification code"\n  onSendCode={(phone) => console.log('Authenticating:', phone)}\n/>`,
    mobileUsageCode: `<AuthPhoneCard onSendCode={(phone) => console.log('Mobile SMS:', phone)} />`,
    props: [
      { name: 'title', type: 'string', default: '"Sign in with Phone"', description: 'Card title heading.' },
      { name: 'description', type: 'string', default: 'undefined', description: 'Subtitle instructions.' },
      { name: 'onSendCode', type: '(phoneNumber: string) => void', default: 'undefined', description: 'Callback with sanitized phone number.' },
    ],
    accessibility: {
      role: 'region',
      aria: ['aria-labelledby to card header.'],
    },
    examples: [],
  },
};

export function getComponentDoc(id: string): ComponentDoc {
  if (COMPONENT_DOCS[id]) {
    return COMPONENT_DOCS[id];
  }

  // Fallback dynamic generator for any component that doesn't have an explicit entry
  const formattedName = id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    id,
    name: formattedName,
    description: `Official cross-platform ${formattedName} component for ThatGuyCodes design system. Built with accessible primitives and styled with Obsidian Dark & Daylight Light design tokens.`,
    category: 'Primitives',
    webImport: `import { ${formattedName.replace(/\\s+/g, '')} } from "@thatguycodes/design-system/web";`,
    mobileImport: `import { ${formattedName.replace(/\\s+/g, '')} } from "@thatguycodes/design-system/native";`,
    anatomy: `<${formattedName.replace(/\\s+/g, '')} />`,
    usageCode: `import { ${formattedName.replace(/\\s+/g, '')} } from "@thatguycodes/design-system/web";\n\nexport default function Example() {\n  return (\n    <${formattedName.replace(/\\s+/g, '')} />\n  );\n}`,
    mobileUsageCode: `import { ${formattedName.replace(/\\s+/g, '')} } from "@thatguycodes/design-system/native";\n\nexport default function MobileExample() {\n  return (\n    <${formattedName.replace(/\\s+/g, '')} />\n  );\n}`,
    props: [
      { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS utility classes.' },
      { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'Inner component content or child elements.' },
    ],
    accessibility: {
      role: 'component',
      keyboard: ['Tab: Moves focus into and through the component.'],
      aria: ['Adheres to W3C WAI-ARIA standards.'],
    },
    examples: [],
  };
}
