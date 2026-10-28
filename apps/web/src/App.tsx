import * as React from 'react';
import { DESIGN_SYSTEM_VERSION } from '@thatguycodes/design-system';
import { getComponentDoc } from './docs-data';
import {
  Moon,
  Sun,
  Terminal,
  Copy,
  Check,
  Shield,
  Zap,
  Sparkles,
  Search,
  Lock,
  Info,
  AlertTriangle,
  MoreVertical,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from '@/components/ui/context-menu';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import { PhoneInput } from '@/components/ui/phone-input';
import { CodeSandbox } from '@/components/gen-ui/code-sandbox';
import { PolarCheckoutCard } from '@/components/gen-ui/polar-checkout-card';
import { LandingPage } from './components/landing/LandingPage';
import { DocsPage } from './components/docs/DocsPage';

type ComponentId =
  | 'button'
  | 'input'
  | 'textarea'
  | 'checkbox'
  | 'switch'
  | 'slider'
  | 'radio-group'
  | 'select'
  | 'toggle'
  | 'toggle-group'
  | 'card'
  | 'accordion'
  | 'tabs'
  | 'dialog'
  | 'alert-dialog'
  | 'sheet'
  | 'popover'
  | 'tooltip'
  | 'hover-card'
  | 'dropdown-menu'
  | 'context-menu'
  | 'badge'
  | 'avatar'
  | 'progress'
  | 'skeleton'
  | 'alert'
  | 'separator'
  | 'breadcrumb'
  | 'pagination'
  | 'table'
  | 'collapsible'
  | 'scroll-area'
  | 'phone-input'
  | 'code-sandbox'
  | 'polar-card'
  | 'sahara-suite';

interface ComponentMeta {
  id: ComponentId;
  name: string;
  group: 'Atoms (Primitives)' | 'Molecules (Compound)' | 'Organisms (Modules)' | 'Blocks & GenUI';
  atomicLevel?: 'Atom' | 'Molecule' | 'Organism' | 'Pattern';
  badge?: string;
  description: string;
}

const ALL_COMPONENTS: ComponentMeta[] = [
  // Atoms (Primitives)
  { id: 'button', name: 'Button', group: 'Atoms (Primitives)', atomicLevel: 'Atom', badge: 'Slot / CVA', description: 'Interactive button with polymorphic asChild slot, variants, and loading states.' },
  { id: 'input', name: 'Input', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Accessible text field with focus rings, icons, and keyboard shortcut support.' },
  { id: 'textarea', name: 'Textarea', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Multi-line text input field styled with atomic borders and ring indicators.' },
  { id: 'checkbox', name: 'Checkbox', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Radix Checkbox with checkmark indicator and keyboard focus control.' },
  { id: 'switch', name: 'Switch', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Accessible sliding toggle switch primitive for boolean states.' },
  { id: 'slider', name: 'Slider', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Smooth range slider with custom thumb and filled track.' },
  { id: 'radio-group', name: 'Radio Group', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Set of checkable radio buttons where only one item can be selected.' },
  { id: 'toggle', name: 'Toggle', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Two-state button that can be pressed to toggle an active state.' },
  { id: 'badge', name: 'Badge', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Status tags with variants, outline, and radar pulse indicators.' },
  { id: 'avatar', name: 'Avatar', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'User image avatar with automated fallback initials.' },
  { id: 'progress', name: 'Progress', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Displays an activity status bar along with percentage progress.' },
  { id: 'skeleton', name: 'Skeleton', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Pulsing placeholder mockup indicating content is actively loading.' },
  { id: 'separator', name: 'Separator', group: 'Atoms (Primitives)', atomicLevel: 'Atom', description: 'Visually separates content horizontally or vertically with atomic border token.' },

  // Molecules (Compound)
  { id: 'select', name: 'Select', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'Custom styled Radix select dropdown menu with popper positioning.' },
  { id: 'toggle-group', name: 'Toggle Group', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'A group of two-state toggle buttons with single or multiple selection.' },
  { id: 'popover', name: 'Popover', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'Floating non-modal popover anchored to a trigger element.' },
  { id: 'tooltip', name: 'Tooltip', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'Micro-popover delivering contextual hints on hover or focus.' },
  { id: 'hover-card', name: 'Hover Card', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'Rich preview card triggered by hovering over a link or element.' },
  { id: 'alert', name: 'Alert', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'Callout banner communicating informative, success, warning, or error messages.' },
  { id: 'breadcrumb', name: 'Breadcrumb', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'Hierarchical navigation trail indicating user location in deep structures.' },
  { id: 'pagination', name: 'Pagination', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'Page navigation with numbered links, next, previous, and ellipsis.' },
  { id: 'collapsible', name: 'Collapsible', group: 'Molecules (Compound)', atomicLevel: 'Molecule', description: 'Interactive disclosure component that expands and collapses arbitrary content.' },

  // Organisms (Modules)
  { id: 'card', name: 'Card', group: 'Organisms (Modules)', atomicLevel: 'Organism', badge: 'Compound', description: 'Versatile compound card container with header, title, description, content, and footer.' },
  { id: 'accordion', name: 'Accordion', group: 'Organisms (Modules)', atomicLevel: 'Organism', badge: 'Stitch Spec', description: 'Vertically stacked disclosure items powered by Radix with keyboard navigation.' },
  { id: 'tabs', name: 'Tabs', group: 'Organisms (Modules)', atomicLevel: 'Organism', description: 'Tabbed navigation switcher for organizing layered viewports.' },
  { id: 'dialog', name: 'Dialog', group: 'Organisms (Modules)', atomicLevel: 'Organism', description: 'Modal dialog box that interrupts the user with critical information or forms.' },
  { id: 'alert-dialog', name: 'Alert Dialog', group: 'Organisms (Modules)', atomicLevel: 'Organism', description: 'Confirmation modal that requires explicit action before dismissal.' },
  { id: 'sheet', name: 'Sheet', group: 'Organisms (Modules)', atomicLevel: 'Organism', description: 'Slide-over drawer panel emerging from any viewport edge (right, left, top, bottom).' },
  { id: 'dropdown-menu', name: 'Dropdown Menu', group: 'Organisms (Modules)', atomicLevel: 'Organism', description: 'Accessible dropdown menu with items, checkboxes, and submenus.' },
  { id: 'context-menu', name: 'Context Menu', group: 'Organisms (Modules)', atomicLevel: 'Organism', description: 'Right-click contextual menu anchored to cursor coordinates.' },
  { id: 'table', name: 'Table', group: 'Organisms (Modules)', atomicLevel: 'Organism', description: 'Dense, clean tabular data display styled with atomic borders.' },
  { id: 'scroll-area', name: 'Scroll Area', group: 'Organisms (Modules)', atomicLevel: 'Organism', description: 'Custom scrollbar container with smooth cross-platform inertia.' },

  // Blocks & GenUI
  { id: 'phone-input', name: 'Phone Sign-in Card', group: 'Blocks & GenUI', atomicLevel: 'Pattern', badge: 'Stitch Block', description: 'Complete phone authentication pattern composed from Card, Input, and Button.' },
  { id: 'code-sandbox', name: 'Code Sandbox', group: 'Blocks & GenUI', atomicLevel: 'Pattern', badge: 'GenUI', description: 'Docker & TypeScript code inspection dock with clipboard copy.' },
  { id: 'polar-card', name: 'Polar Checkout', group: 'Blocks & GenUI', atomicLevel: 'Pattern', badge: 'Commerce', description: 'Productized SaaS starter kit tier card with instant checkout trigger.' },
  { id: 'sahara-suite', name: 'Sahara Dual Matrix', group: 'Blocks & GenUI', atomicLevel: 'Pattern', badge: 'Stitch Spec', description: 'Basalt minerals, golden amber telemetry, and terracotta actions from Stitch.' },
];

export default function App() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');
  const [currentView, setCurrentView] = React.useState<'landing' | 'docs' | 'components'>('landing');
  const [selectedComponent, setSelectedComponent] = React.useState<ComponentId>('button');
  const [activeTab, setActiveTab] = React.useState<'preview' | 'code'>('preview');
  const [copiedCmd, setCopiedCmd] = React.useState(false);
  const [copiedSnippet, setCopiedSnippet] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sliderVal, setSliderVal] = React.useState([65]);
  const [switchVal, setSwitchVal] = React.useState(true);
  const [checkVal, setCheckVal] = React.useState(true);
  const [collapsibleOpen, setCollapsibleOpen] = React.useState(false);

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/docs')) {
        setCurrentView('docs');
      } else if (hash.startsWith('#/components')) {
        setCurrentView('components');
        const parts = hash.split('/');
        if (parts[2] && ALL_COMPONENTS.some((c) => c.id === parts[2])) {
          setSelectedComponent(parts[2] as ComponentId);
        }
      } else {
        setCurrentView('landing');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('global-search-input');
        if (searchInput) {
          searchInput.focus();
        } else {
          handleNavigate('components');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (view: 'landing' | 'docs' | 'components', componentId?: string) => {
    setCurrentView(view);
    if (componentId && ALL_COMPONENTS.some((c) => c.id === componentId)) {
      setSelectedComponent(componentId as ComponentId);
    }
    if (view === 'landing') {
      window.location.hash = '#/';
    } else if (view === 'docs') {
      window.location.hash = '#/docs';
    } else if (view === 'components') {
      window.location.hash = componentId ? `#/components/${componentId}` : '#/components';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyInstallCommand = (comp: string) => {
    navigator.clipboard.writeText(`pnpm dlx sahara-ui add ${comp}`);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const copySnippet = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const filteredComponents = ALL_COMPONENTS.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.group.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentMeta = ALL_COMPONENTS.find((c) => c.id === selectedComponent) || ALL_COMPONENTS[0];
  const currentDoc = getComponentDoc(selectedComponent);

  const groups: Array<ComponentMeta['group']> = [
    'Atoms (Primitives)',
    'Molecules (Compound)',
    'Organisms (Modules)',
    'Blocks & GenUI',
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
        {/* Top Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border px-4 sm:px-6 py-3 transition-colors">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              {/* Brand Logo */}
              <button
                onClick={() => handleNavigate('landing')}
                className="flex items-center gap-3 text-left cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary transition-transform group-hover:scale-105 shadow-xs">
                  <span className="material-symbols-outlined text-[18px]">landscape</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold tracking-tight text-sm text-foreground font-sans">
                      sahara
                    </span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-medium">
                      ui / v{DESIGN_SYSTEM_VERSION}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground hidden sm:block">
                    Desert Modernism Primitives &amp; Tokens
                  </p>
                </div>
              </button>

              {/* Main Navigation Links */}
              <nav className="hidden md:flex items-center gap-1 font-title-md text-sm">
                <button
                  onClick={() => handleNavigate('landing')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    currentView === 'landing'
                      ? 'bg-secondary text-primary font-semibold border border-border shadow-xs'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigate('docs')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    currentView === 'docs'
                      ? 'bg-secondary text-primary font-semibold border border-border shadow-xs'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  Docs
                </button>
                <button
                  onClick={() => handleNavigate('components')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    currentView === 'components'
                      ? 'bg-secondary text-primary font-semibold border border-border shadow-xs'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  Components
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="https://www.npmjs.com/package/@thatguycodes/design-system"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>npm v1.0.1</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://github.com/thatguycodes/sahara-ui"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <div className="relative flex items-center">
                <Input
                  id="global-search-input"
                  placeholder="Search 37+ components... ⌘K"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (currentView !== 'components' && e.target.value.trim().length > 0) {
                      setCurrentView('components');
                    }
                  }}
                  leftIcon={<Search className="w-3.5 h-3.5 text-muted-foreground" />}
                  className="w-40 sm:w-56 h-8 text-xs"
                />
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="gap-2 text-xs font-mono"
              >
                {theme === 'dark' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-primary" />
                    <span className="hidden sm:inline">Nocturne</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span className="hidden sm:inline">Solstice</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* View Switcher */}
        {currentView === 'landing' && <LandingPage onNavigate={handleNavigate} />}

        {currentView === 'docs' && <DocsPage onNavigate={handleNavigate} />}

        {currentView === 'components' && (
          <div className="max-w-7xl mx-auto w-full flex-1 flex px-4 md:px-6 py-6 gap-8">
          {/* Left Sidebar */}
          <aside className="w-64 shrink-0 hidden md:block">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 space-y-6">
              {groups.map((group) => {
                const items = filteredComponents.filter((c) => c.group === group);
                if (items.length === 0) return null;
                return (
                  <div key={group}>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
                      <span>{group}</span>
                      <span className="text-[10px] text-muted-foreground/60">{items.length}</span>
                    </h4>
                    <nav className="space-y-0.5">
                      {items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedComponent(item.id)}
                          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium transition-all text-left cursor-pointer ${
                            selectedComponent === item.id
                              ? 'bg-secondary text-primary font-semibold border border-border shadow-xs'
                              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                          }`}
                        >
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-primary/10 text-primary">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      ))}
                    </nav>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Center Workbench */}
          <main className="flex-1 max-w-4xl space-y-6 min-w-0">
            {/* Component Header */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  atomic / {currentMeta.group}
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">
                {currentMeta.name}
              </h1>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                {currentMeta.description}
              </p>
            </div>

            {/* CLI Install Block */}
            <div className="flex items-center justify-between rounded-lg bg-card border border-border p-3 font-mono text-xs shadow-xs">
              <div className="flex items-center gap-2.5 text-foreground truncate">
                <Terminal className="w-4 h-4 text-primary shrink-0" />
                <span className="truncate">npx atomic-ui add {selectedComponent}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyInstallCommand(selectedComponent)}
                className="h-7 px-2.5 text-xs text-muted-foreground hover:text-foreground shrink-0"
                leftIcon={
                  copiedCmd ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )
                }
              >
                {copiedCmd ? 'Copied' : 'Copy'}
              </Button>
            </div>

            {/* Tab Controls */}
            <div className="flex items-center justify-between border-b border-border pb-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`text-xs font-mono px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-secondary text-foreground font-semibold border border-border'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`text-xs font-mono px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-secondary text-foreground font-semibold border border-border'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Code
                </button>
              </div>
            </div>

            {/* Interactive Preview Container */}
            {activeTab === 'preview' ? (
              <div className="rounded-xl border border-border bg-card p-8 min-h-[340px] flex items-center justify-center relative overflow-hidden transition-colors">
                {/* 1. BUTTON */}
                {selectedComponent === 'button' && (
                  <div className="flex flex-col gap-4 items-center">
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                      <Button variant="default">Default</Button>
                      <Button variant="terracotta" rightIcon={<Sparkles className="w-4 h-4" />}>
                        Terracotta CTA
                      </Button>
                      <Button variant="amber" leftIcon={<Zap className="w-4 h-4" />}>
                        Amber Radiant
                      </Button>
                      <Button variant="sandstone">
                        Sandstone
                      </Button>
                      <Button variant="secondary" leftIcon={<Terminal className="w-4 h-4" />}>
                        Secondary
                      </Button>
                      <Button variant="emerald" leftIcon={<Shield className="w-4 h-4" />}>
                        $0/mo Verified
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost Trigger</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="default" isLoading>
                        Loading
                      </Button>
                    </div>
                  </div>
                )}

                {/* 2. INPUT */}
                {selectedComponent === 'input' && (
                  <div className="w-full max-w-sm space-y-3">
                    <Input placeholder="Default input field..." />
                    <Input
                      placeholder="Search architecture..."
                      leftIcon={<Search className="w-4 h-4" />}
                      shortcut="⌘K"
                    />
                    <Input
                      type="password"
                      defaultValue="secretpass"
                      leftIcon={<Lock className="w-4 h-4 text-destructive" />}
                      error="HMAC SHA-256 requires at least 32 characters."
                    />
                  </div>
                )}

                {/* 3. TEXTAREA */}
                {selectedComponent === 'textarea' && (
                  <div className="w-full max-w-sm space-y-2">
                    <Label htmlFor="bio">System Prompt / Instructions</Label>
                    <Textarea id="bio" placeholder="Enter instructions for the sovereign agent..." />
                  </div>
                )}

                {/* 4. CHECKBOX */}
                {selectedComponent === 'checkbox' && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={checkVal}
                        onCheckedChange={(checked) => setCheckVal(!!checked)}
                      />
                      <Label htmlFor="terms" className="cursor-pointer">
                        Enable Cloudflare Zero Trust tunnel protection
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms2" disabled />
                      <Label htmlFor="terms2" className="text-muted-foreground">
                        Hardware memory cap locked (macOS root)
                      </Label>
                    </div>
                  </div>
                )}

                {/* 5. SWITCH */}
                {selectedComponent === 'switch' && (
                  <div className="flex items-center justify-between gap-6 p-4 rounded-lg border border-border bg-background w-full max-w-sm">
                    <div className="space-y-0.5">
                      <Label htmlFor="airplane">Autonomous Agents</Label>
                      <p className="text-xs text-muted-foreground">Allow background task execution</p>
                    </div>
                    <Switch id="airplane" checked={switchVal} onCheckedChange={setSwitchVal} />
                  </div>
                )}

                {/* 6. SLIDER */}
                {selectedComponent === 'slider' && (
                  <div className="w-full max-w-sm space-y-4">
                    <div className="flex justify-between text-xs font-mono">
                      <span>RAM Allocation</span>
                      <span className="text-primary font-bold">{sliderVal[0]}%</span>
                    </div>
                    <Slider
                      value={sliderVal}
                      onValueChange={setSliderVal}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                )}

                {/* 7. RADIO GROUP */}
                {selectedComponent === 'radio-group' && (
                  <RadioGroup defaultValue="tunnel" className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tunnel" id="r1" />
                      <Label htmlFor="r1" className="cursor-pointer">Cloudflare Tunnel (Outbound QUIC)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="direct" id="r2" />
                      <Label htmlFor="r2" className="cursor-pointer">Direct Ingress with Static IP</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tailscale" id="r3" />
                      <Label htmlFor="r3" className="cursor-pointer">Tailscale Mesh VPN</Label>
                    </div>
                  </RadioGroup>
                )}

                {/* 8. SELECT */}
                {selectedComponent === 'select' && (
                  <div className="w-full max-w-xs space-y-2">
                    <Label>Cluster Runtime</Label>
                    <Select defaultValue="apple-silicon">
                      <SelectTrigger>
                        <SelectValue placeholder="Select runtime" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple-silicon">Apple Silicon M-Series (Metal GPU)</SelectItem>
                        <SelectItem value="cloudflare-edge">Cloudflare Workers Edge</SelectItem>
                        <SelectItem value="docker-compose">Docker Compose Local Daemon</SelectItem>
                        <SelectItem value="hetzner-vps">Hetzner Sovereign Dedicated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* 9. TOGGLE */}
                {selectedComponent === 'toggle' && (
                  <div className="flex gap-3">
                    <Toggle aria-label="Toggle terminal mode" variant="outline">
                      <Terminal className="h-4 w-4 mr-2" />
                      Terminal Mode
                    </Toggle>
                    <Toggle aria-label="Toggle telemetry" variant="default" defaultPressed>
                      <Zap className="h-4 w-4 mr-2" />
                      Live Stream
                    </Toggle>
                  </div>
                )}

                {/* 10. TOGGLE GROUP */}
                {selectedComponent === 'toggle-group' && (
                  <ToggleGroup type="single" defaultValue="preview">
                    <ToggleGroupItem value="preview" aria-label="Preview">
                      Preview
                    </ToggleGroupItem>
                    <ToggleGroupItem value="code" aria-label="Code">
                      Code
                    </ToggleGroupItem>
                    <ToggleGroupItem value="diff" aria-label="Diff">
                      Diff
                    </ToggleGroupItem>
                  </ToggleGroup>
                )}

                {/* 11. ACCORDION */}
                {selectedComponent === 'accordion' && (
                  <div className="w-full max-w-md">
                    <Accordion type="single" collapsible defaultValue="item-1">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Zero Open Router Ports</AccordionTrigger>
                        <AccordionContent>
                          Traffic is tunneled through Cloudflare Edge. Port scanners cannot identify your machine.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Self-Hosted Automation</AccordionTrigger>
                        <AccordionContent>
                          Built-in n8n workflows trigger social scheduling and code backups with 0 API fees.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Dual Theming Tokens</AccordionTrigger>
                        <AccordionContent>
                          Atomic Dark and Daylight modes seamlessly switch using CSS variables.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )}

                {/* 12. TABS */}
                {selectedComponent === 'tabs' && (
                  <Tabs defaultValue="overview" className="w-full max-w-sm">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="deploy">Deployment</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="p-4 rounded-lg border border-border bg-background mt-2">
                      <h4 className="font-semibold text-sm mb-1">Atomic UI Engine</h4>
                      <p className="text-xs text-muted-foreground">Tailwind CSS v4 + Radix primitives.</p>
                    </TabsContent>
                    <TabsContent value="deploy" className="p-4 rounded-lg border border-border bg-background mt-2">
                      <h4 className="font-semibold text-sm mb-1">Docker Compose</h4>
                      <p className="text-xs font-mono text-muted-foreground">docker compose up -d --build</p>
                    </TabsContent>
                  </Tabs>
                )}

                {/* 13. DIALOG */}
                {selectedComponent === 'dialog' && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Deploy Stack to Production</DialogTitle>
                        <DialogDescription>
                          This will provision edge workers and activate tunnel certificates.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3 py-2">
                        <Label>Tunnel Key</Label>
                        <Input placeholder="eyJhIjoi..." />
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button variant="glow">Confirm Deploy</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}

                {/* 14. ALERT DIALOG */}
                {selectedComponent === 'alert-dialog' && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete Database</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your cluster database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                          Delete Permanently
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}

                {/* 15. SHEET */}
                {selectedComponent === 'sheet' && (
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Right Sheet</Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <SheetHeader>
                        <SheetTitle>Cockpit Settings</SheetTitle>
                        <SheetDescription>Configure tunnel and hardware limits.</SheetDescription>
                      </SheetHeader>
                      <div className="py-4 space-y-4">
                        <div className="space-y-1">
                          <Label>Node Version</Label>
                          <Input defaultValue="v22.14.0 LTS" readOnly />
                        </div>
                        <div className="space-y-1">
                          <Label>Edge Regions</Label>
                          <Input defaultValue="Johannesburg (JNB)" readOnly />
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                )}

                {/* 16. POPOVER */}
                {selectedComponent === 'popover' && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Cluster Telemetry</h4>
                        <p className="text-xs text-muted-foreground">
                          CPU: 12% • Memory: 1.2 GB / 16 GB • Uptime: 99.98%
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}

                {/* 17. TOOLTIP */}
                {selectedComponent === 'tooltip' && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Built with Radix UI Tooltip Primitive</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {/* 18. HOVER CARD */}
                {selectedComponent === 'hover-card' && (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link">@thatguycodes</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarFallback>TC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">ThatGuyCodes</h4>
                          <p className="text-xs text-muted-foreground">
                            Sovereign AI Stack builder &amp; creator of Atomic UI.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                )}

                {/* 19. DROPDOWN MENU */}
                {selectedComponent === 'dropdown-menu' && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Actions <MoreVertical className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                      <DropdownMenuItem>API Keys</DropdownMenuItem>
                      <DropdownMenuItem>Telemetry Logs</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}

                {/* 20. CONTEXT MENU */}
                {selectedComponent === 'context-menu' && (
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-40 w-72 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground font-mono">
                      Right click inside this area
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>Inspect Element</ContextMenuItem>
                      <ContextMenuItem>View Source</ContextMenuItem>
                      <ContextMenuItem>Reload Container</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                )}

                {/* 21. ALERT */}
                {selectedComponent === 'alert' && (
                  <div className="w-full max-w-md space-y-3">
                    <Alert variant="default">
                      <Info className="h-4 w-4" />
                      <AlertTitle>Zero Trust Tunnel Active</AlertTitle>
                      <AlertDescription>Inbound QUIC connection established through Cloudflare edge.</AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Saas Tax Warning</AlertTitle>
                      <AlertDescription>External PaaS egress fees breached your $0/mo budget.</AlertDescription>
                    </Alert>
                  </div>
                )}

                {/* 22. PROGRESS */}
                {selectedComponent === 'progress' && (
                  <div className="w-full max-w-sm space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span>Syncing n8n Blueprints</span>
                      <span className="text-primary">78%</span>
                    </div>
                    <Progress value={78} />
                  </div>
                )}

                {/* 23. SKELETON */}
                {selectedComponent === 'skeleton' && (
                  <div className="flex flex-col gap-6 w-full max-w-sm">
                    {/* User profile loading skeleton */}
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full shrink-0" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>

                    {/* Cockpit card loading mockup */}
                    <div className="space-y-3 p-4 rounded-xl border border-border bg-card/60">
                      <Skeleton className="h-24 w-full rounded-lg" />
                      <div className="space-y-2 pt-1">
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-6 w-14 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 24. CARD */}
                {selectedComponent === 'card' && (
                  <Card className="w-full max-w-sm">
                    <CardHeader>
                      <CardTitle>Atomic Card Primitive</CardTitle>
                      <CardDescription>Structured compound card component.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Composed with CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">Dismiss</Button>
                      <Button variant="default" size="sm">Action</Button>
                    </CardFooter>
                  </Card>
                )}

                {/* 25. BADGE */}
                {selectedComponent === 'badge' && (
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="terracotta" dot pulse>
                      TERRACOTTA ACTIVE
                    </Badge>
                    <Badge variant="amber" dot>
                      AMBER RADIANCE
                    </Badge>
                    <Badge variant="sandstone" dot>
                      SANDSTONE DUNE
                    </Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="emerald" dot pulse>
                      24/7 DOCKER ONLINE
                    </Badge>
                    <Badge variant="crimson" dot>
                      SAAS TAX BREACH
                    </Badge>
                  </div>
                )}

                {/* 26. AVATAR */}
                {selectedComponent === 'avatar' && (
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                  </div>
                )}

                {/* 27. SEPARATOR */}
                {selectedComponent === 'separator' && (
                  <div className="w-full max-w-xs space-y-3">
                    <div className="text-sm font-medium">Atomic Design System</div>
                    <Separator />
                    <div className="flex h-5 items-center space-x-4 text-xs text-muted-foreground">
                      <div>Accessible</div>
                      <Separator orientation="vertical" />
                      <div>Tailwind v4</div>
                      <Separator orientation="vertical" />
                      <div>Radix UI</div>
                    </div>
                  </div>
                )}

                {/* 28. BREADCRUMB */}
                {selectedComponent === 'breadcrumb' && (
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                )}

                {/* 29. PAGINATION */}
                {selectedComponent === 'pagination' && (
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}

                {/* 30. TABLE */}
                {selectedComponent === 'table' && (
                  <div className="w-full max-w-md border border-border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Service</TableHead>
                          <TableHead>Port</TableHead>
                          <TableHead className="text-right">Cost</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Cloudflare Tunnel</TableCell>
                          <TableCell className="font-mono text-xs">QUIC:443</TableCell>
                          <TableCell className="text-right text-emerald-500 font-mono">$0.00/mo</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">n8n Automation</TableCell>
                          <TableCell className="font-mono text-xs">5678</TableCell>
                          <TableCell className="text-right text-emerald-500 font-mono">$0.00/mo</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Umami Analytics</TableCell>
                          <TableCell className="font-mono text-xs">3000</TableCell>
                          <TableCell className="text-right text-emerald-500 font-mono">$0.00/mo</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                )}

                {/* 31. COLLAPSIBLE */}
                {selectedComponent === 'collapsible' && (
                  <div className="w-full max-w-xs space-y-2">
                    <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
                      <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                        <span className="text-xs font-mono font-medium">@thatguycodes/atomic-ui</span>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm">
                            {collapsibleOpen ? 'Hide' : 'Expand'}
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="space-y-1 pt-2">
                        <div className="rounded-md border border-border px-3 py-2 text-xs font-mono text-muted-foreground">
                          npm install class-variance-authority
                        </div>
                        <div className="rounded-md border border-border px-3 py-2 text-xs font-mono text-muted-foreground">
                          npm install @radix-ui/react-slot
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                )}

                {/* 32. SCROLL AREA */}
                {selectedComponent === 'scroll-area' && (
                  <ScrollArea className="h-48 w-64 rounded-md border border-border p-4">
                    <h4 className="mb-3 text-xs font-mono font-semibold text-primary">Edge Tunnel Nodes</h4>
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i} className="text-xs py-1 border-b border-border/50 font-mono text-muted-foreground">
                        quic-edge-node-{i + 1}.cloudflare.com
                      </div>
                    ))}
                  </ScrollArea>
                )}

                {/* 33. PHONE INPUT (BLOCK) */}
                {selectedComponent === 'phone-input' && (
                  <div className="flex justify-center w-full">
                    <PhoneInput />
                  </div>
                )}

                {/* 34. CODE SANDBOX (BLOCK) */}
                {selectedComponent === 'code-sandbox' && (
                  <div className="w-full max-w-lg">
                    <CodeSandbox
                      fileName="docker-compose.yml"
                      language="yaml"
                      code={`services:\n  tunnel:\n    image: cloudflare/cloudflared:latest\n    restart: always\n    network_mode: host`}
                    />
                  </div>
                )}

                {/* 35. POLAR CHECKOUT CARD (BLOCK) */}
                {selectedComponent === 'polar-card' && (
                  <div className="w-full max-w-md">
                    <PolarCheckoutCard
                      title="Atomic UI Pro Architecture"
                      price="$149"
                      originalPrice="$249"
                      tierName="SOVEREIGN STACK"
                      isPopular
                      description="Complete production Next.js 15 + Docker Compose cluster with pre-wired Polar checkout."
                      features={[
                        'Full 35+ accessible Atomic UI components',
                        'Cloudflare Zero Trust tunnels',
                        'n8n omnichannel AI workflows',
                        'Automated GitHub repo access',
                      ]}
                    />
                  </div>
                )}

                {/* 36. SAHARA DUAL MATRIX (STITCH BLOCK) */}
                {selectedComponent === 'sahara-suite' && (
                  theme === 'dark' ? (
                    /* SAHARA NOCTURNE (DARK MODE) */
                    <div className="w-full max-w-2xl rounded-xl border border-[#514536]/40 bg-[#161311] p-6 text-[#eae1dd] shadow-xl">
                      <div className="flex items-center justify-between border-b border-[#514536]/30 pb-4 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffba56] animate-pulse" />
                          <span className="text-xs font-mono uppercase tracking-wider text-[#ffba56] font-semibold">
                            Sahara Nocturne • Spec v3.4 (Dark Mode)
                          </span>
                        </div>
                        <Badge className="bg-[#231f1d] text-[#ffba56] border-[#514536]/40">
                          Basalt & Amber (Luminance: 3.2%)
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-[#eae1dd] mb-2">
                        Dual-Theme Component Suite
                      </h3>
                      <p className="text-sm text-[#d5c4b1] mb-6">
                        Deep basalt canvas with golden amber radiance and charred mineral containers ported directly from Stitch.
                      </p>

                      {/* Segmented Filter Dock Molecule */}
                      <div className="space-y-2 mb-6">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#9e8e7d]">
                          Segmented Filter Dock (Molecule)
                        </div>
                        <div className="flex flex-wrap gap-2 p-1.5 rounded-lg bg-[#110d0c] border border-[#514536]/30">
                          <button className="px-3.5 py-1.5 rounded text-xs font-semibold bg-[#231f1d] text-[#ffba56] shadow-sm flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5" />
                            <span>All Dunes (84)</span>
                          </button>
                          <button className="px-3.5 py-1.5 rounded text-xs text-[#d5c4b1] hover:text-[#eae1dd] hover:bg-[#1f1b19] flex items-center gap-1.5 transition-colors">
                            <span>Active Oases</span>
                          </button>
                          <button className="px-3.5 py-1.5 rounded text-xs text-[#d5c4b1] hover:text-[#eae1dd] hover:bg-[#1f1b19] flex items-center gap-1.5 transition-colors">
                            <span>Archived Caravans</span>
                          </button>
                        </div>
                      </div>

                      {/* Action Suite Organism */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#9e8e7d]">
                          Action Suite Hierarchy (Organism)
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#e09f3e] hover:bg-[#ffba56] text-[#452b00] font-semibold text-sm shadow-md transition-colors">
                            <Sparkles className="w-4 h-4" />
                            <span>Deploy Mirage Protocol</span>
                          </button>
                          <button className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#852a03]/30 hover:bg-[#852a03]/50 text-[#ffb59c] border border-[#ffb59c]/20 text-sm font-medium transition-colors">
                            <span>Sync Sandpoint</span>
                            <span className="text-xs font-mono bg-[#110d0c] px-1.5 py-0.5 rounded text-[#ffb59c]">
                              ⌘S
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* SAHARA SOLSTICE (LIGHT MODE) */
                    <div className="w-full max-w-2xl rounded-xl border border-[#EFE3DB] bg-[#FFF8F5] p-6 text-[#221B17] shadow-xl">
                      <div className="flex items-center justify-between border-b border-[#EFE3DB] pb-4 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#C86D3B]" />
                          <span className="text-xs font-mono uppercase tracking-wider text-[#C86D3B] font-bold">
                            Sahara Solstice • Spec v3.4 (Light Mode)
                          </span>
                        </div>
                        <Badge className="bg-[#FAF2EE] text-[#C86D3B] border-[#EFE3DB] font-semibold">
                          Sandstone & Terracotta (Luminance: 96.8%)
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-[#221B17] mb-2">
                        Sahara Solstice Component Suite
                      </h3>
                      <p className="text-sm text-[#705F55] mb-6">
                        Crisp daylight warmth, bleached sandstone cards, sunbaked terracotta contrast, and WCAG AAA compliance.
                      </p>

                      {/* Segmented Filter Dock Molecule (Light) */}
                      <div className="space-y-2 mb-6">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#917E73] font-semibold">
                          Segmented Filter Dock (Molecule - Light)
                        </div>
                        <div className="flex flex-wrap gap-2 p-1.5 rounded-lg bg-[#F3E7E0] border border-[#EFE3DB]">
                          <button className="px-3.5 py-1.5 rounded text-xs font-bold bg-[#FFFFFF] text-[#C86D3B] shadow-xs flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5" />
                            <span>All Dunes (84)</span>
                          </button>
                          <button className="px-3.5 py-1.5 rounded text-xs text-[#705F55] hover:text-[#221B17] hover:bg-[#FAF2EE] flex items-center gap-1.5 transition-colors font-medium">
                            <span>Active Oases</span>
                          </button>
                          <button className="px-3.5 py-1.5 rounded text-xs text-[#705F55] hover:text-[#221B17] hover:bg-[#FAF2EE] flex items-center gap-1.5 transition-colors font-medium">
                            <span>Archived Caravans</span>
                          </button>
                        </div>
                      </div>

                      {/* Action Suite Organism (Light) */}
                      <div className="space-y-4">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#917E73] font-semibold">
                          Action Suite Hierarchy (Organism - Light)
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C86D3B] hover:bg-[#B55F2F] text-[#FFFFFF] font-bold text-sm shadow-md transition-colors">
                            <Sparkles className="w-4 h-4" />
                            <span>Deploy Mirage Protocol</span>
                          </button>
                          <button className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#FBECE4] hover:bg-[#F7DECE] text-[#C86D3B] border border-[#EFE3DB] text-sm font-semibold transition-colors">
                            <span>Sync Sandpoint</span>
                            <span className="text-xs font-mono bg-[#FFFFFF] px-1.5 py-0.5 rounded text-[#C86D3B] shadow-xs">
                              ⌘S
                            </span>
                          </button>
                        </div>

                        {/* Telemetry & Disclosure Unit (Light) */}
                        <div className="rounded-lg bg-[#FFFFFF] border border-[#EFE3DB] p-4 shadow-xs space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 rounded-full bg-[#FCEEE7] text-[#C86D3B] text-[11px] font-mono font-bold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C86D3B]" />
                              ACTIVE • 24°C
                            </span>
                            <span className="text-[11px] font-mono text-[#8C7A70]">SH-ENCLAVE-99</span>
                          </div>
                          <div className="text-xs font-mono bg-[#FAF2EE] text-[#B45309] font-semibold p-2.5 rounded border border-[#EFE3DB] overflow-x-auto">
                            <code>sahara enclave --mesh ed25519-dune --thermal-cap 320W</code>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[11px] text-[#705F55]">
                              <span>Thermal Dissipation Bandwidth</span>
                              <span className="font-semibold text-[#221B17]">84.2% Nominal</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-[#EFE3DB] overflow-hidden">
                              <div className="h-full bg-[#C86D3B] rounded-full" style={{ width: '84%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              /* Code Tab */
              <div className="rounded-xl border border-border bg-card p-4 font-mono text-xs overflow-x-auto text-foreground shadow-xs relative">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-border">
                  <span className="text-[11px] font-mono text-muted-foreground">React 19 / Vite / Next.js Component Usage</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copySnippet(currentDoc.usageCode, 'code-tab')}
                    className="h-6 px-2 text-[11px]"
                    leftIcon={
                      copiedSnippet === 'code-tab' ? (
                        <Check className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )
                    }
                  >
                    {copiedSnippet === 'code-tab' ? 'Copied' : 'Copy'}
                  </Button>
                </div>
                <pre>{currentDoc.usageCode}</pre>
              </div>
            )}

            {/* Comprehensive Documentation Section (shadcn/ui spec) */}
            <div className="pt-10 mt-6 border-t border-border space-y-10">
              {/* 1. Installation */}
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
                    Installation
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Install the sovereign design system package using your preferred package manager:
                </p>
                <div className="rounded-lg bg-card border border-border p-3.5 font-mono text-xs flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2 text-foreground truncate">
                    <Terminal className="w-4 h-4 text-primary shrink-0" />
                    <span className="truncate">npm install @thatguycodes/design-system</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copySnippet('npm install @thatguycodes/design-system', 'install-npm')}
                    className="h-7 px-2.5 text-xs shrink-0"
                    leftIcon={
                      copiedSnippet === 'install-npm' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )
                    }
                  >
                    {copiedSnippet === 'install-npm' ? 'Copied' : 'Copy'}
                  </Button>
                </div>
              </section>

              {/* 2. Usage (Web) */}
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
                    Web Usage
                  </h2>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold border border-primary/20">
                    React 19 & Next.js
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Import the component and ensure the unified stylesheet is loaded at root:
                </p>
                <div className="rounded-lg bg-card border border-border p-4 font-mono text-xs overflow-x-auto relative shadow-xs">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-border/60">
                    <span className="text-[10px] text-muted-foreground">Import Statement</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copySnippet(currentDoc.webImport, 'web-import')}
                      className="h-6 px-2 text-[11px]"
                    >
                      {copiedSnippet === 'web-import' ? 'Copied' : 'Copy'}
                    </Button>
                  </div>
                  <pre className="text-primary font-semibold mb-3">{currentDoc.webImport}</pre>
                  <div className="pt-2 border-t border-border/40">
                    <pre className="text-foreground/90">{currentDoc.usageCode}</pre>
                  </div>
                </div>
              </section>

              {/* 3. Mobile Usage (React Native / Expo) */}
              {currentDoc.mobileUsageCode && (
                <section className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
                      Mobile Usage (React Native / Expo)
                    </h2>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">
                      iOS & Android
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Import native cross-platform primitives styled with NativeWind and universal tokens:
                  </p>
                  <div className="rounded-lg bg-card border border-border p-4 font-mono text-xs overflow-x-auto relative shadow-xs">
                    {currentDoc.mobileImport && (
                      <div className="flex justify-between items-center mb-2 pb-2 border-b border-border/60">
                        <span className="text-[10px] text-muted-foreground">Native Import</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copySnippet(currentDoc.mobileImport!, 'mobile-import')}
                          className="h-6 px-2 text-[11px]"
                        >
                          {copiedSnippet === 'mobile-import' ? 'Copied' : 'Copy'}
                        </Button>
                      </div>
                    )}
                    {currentDoc.mobileImport && (
                      <pre className="text-emerald-500 font-semibold mb-3">{currentDoc.mobileImport}</pre>
                    )}
                    <div className="pt-2 border-t border-border/40">
                      <pre className="text-foreground/90">{currentDoc.mobileUsageCode}</pre>
                    </div>
                  </div>
                </section>
              )}

              {/* 4. Anatomy */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
                  Anatomy
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Component structural hierarchy and composition pattern:
                </p>
                <div className="rounded-lg bg-card border border-border p-4 font-mono text-xs overflow-x-auto shadow-xs text-foreground/90">
                  <pre>{currentDoc.anatomy}</pre>
                </div>
              </section>

              {/* 5. Props & API Reference */}
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
                    API Reference
                  </h2>
                  <span className="text-xs font-mono text-muted-foreground">
                    {currentDoc.props.length} Prop{currentDoc.props.length === 1 ? '' : 's'}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Configurable properties and attributes supported by <code className="font-mono text-xs font-semibold text-primary">{currentDoc.name}</code>:
                </p>
                <div className="rounded-lg border border-border overflow-hidden shadow-xs bg-card">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead className="bg-secondary/40 border-b border-border text-[11px] uppercase font-mono text-muted-foreground">
                        <tr>
                          <th className="px-4 py-3">Prop</th>
                          <th className="px-4 py-3">Type</th>
                          <th className="px-4 py-3">Default</th>
                          <th className="px-4 py-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {currentDoc.props.map((p) => (
                          <tr key={p.name} className="hover:bg-secondary/20 transition-colors">
                            <td className="px-4 py-3 font-mono text-xs font-semibold text-primary whitespace-nowrap">
                              {p.name}
                            </td>
                            <td className="px-4 py-3 font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                              <code>{p.type}</code>
                            </td>
                            <td className="px-4 py-3 font-mono text-xs text-muted-foreground/80 whitespace-nowrap">
                              {p.default ? <code>{p.default}</code> : '-'}
                            </td>
                            <td className="px-4 py-3 text-xs text-foreground/90 leading-relaxed min-w-[240px]">
                              {p.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 6. Accessibility */}
              {currentDoc.accessibility && (
                <section className="space-y-3 pb-12">
                  <h2 className="text-xl font-bold tracking-tight text-foreground font-sans">
                    Accessibility & ARIA
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built to adhere strictly to the W3C WAI-ARIA authoring practices with keyboard focus traps and high-contrast color tokens:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentDoc.accessibility.keyboard && (
                      <div className="rounded-lg bg-card border border-border p-4 space-y-2 shadow-xs">
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-primary" />
                          <span>Keyboard Navigation</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-foreground/90 pt-1">
                          {currentDoc.accessibility.keyboard.map((k, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary font-mono text-xs">•</span>
                              <span>{k}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {currentDoc.accessibility.aria && (
                      <div className="rounded-lg bg-card border border-border p-4 space-y-2 shadow-xs">
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-emerald-500" />
                          <span>ARIA States & Roles</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-foreground/90 pt-1">
                          {currentDoc.accessibility.aria.map((a, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-mono text-xs">•</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </div>
          </main>
        </div>
        )}
      </div>
    </TooltipProvider>
  );
}
