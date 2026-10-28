import * as React from 'react';

interface DocsPageProps {
  onNavigate: (view: 'landing' | 'docs' | 'components', componentId?: string) => void;
}

type FrameworkKey = 'vite' | 'nextjs' | 'remix' | 'manual';

const FRAMEWORK_COMMANDS: Record<FrameworkKey, { title: string; cmd: string; desc: string }> = {
  vite: {
    title: 'Vite + React 19 (TypeScript)',
    cmd: 'pnpm create vite@latest my-sahara-app --template react-ts\ncd my-sahara-app\npnpm install',
    desc: 'Lightweight, blazingly fast client-side application with Vite and React 19 compiler support.',
  },
  nextjs: {
    title: 'Next.js 15 App Router',
    cmd: 'npx create-next-app@latest my-sahara-app --typescript --tailwind --eslint --app\ncd my-sahara-app',
    desc: 'Full-stack production framework with React Server Components, server actions, and Turbopack.',
  },
  remix: {
    title: 'Remix / Astro / Vite',
    cmd: 'npx create-remix@latest my-sahara-app\ncd my-sahara-app',
    desc: 'Content-driven and edge-native web applications with first-class web standards.',
  },
  manual: {
    title: 'Manual / Existing Workspace',
    cmd: 'pnpm add -D tailwindcss @tailwindcss/vite clsx tailwind-merge lucide-react',
    desc: 'Drop Sahara primitives into any existing React repository with Tailwind CSS v4 or v3.',
  },
};

const COMPONENTS_JSON_SNIPPET = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "sahara",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}`;

const GLOBALS_CSS_SNIPPET = `@import "tailwindcss";

@theme {
  --color-surface-container: var(--surface-container);
  --color-surface-container-low: var(--surface-container-low);
  --color-surface-container-lowest: var(--surface-container-lowest);
  --color-on-surface: var(--on-surface);
  --color-on-surface-variant: var(--on-surface-variant);
  --color-primary: #944516;
  --color-secondary: #9b4500;
  --color-tertiary: #904821;
}

:root {
  /* Sahara Nocturne (Dark) */
  --surface-container: #231f1d;
  --surface-container-lowest: #141110;
  --on-surface: #eae1dd;
  --on-surface-variant: #9e8e7d;
}

.light, [data-theme="light"] {
  /* Sahara Solstice (Light) */
  --surface-container: #f4ece8;
  --surface-container-lowest: #ffffff;
  --on-surface: #1e1b19;
  --on-surface-variant: #55433b;
}`;

const FIRST_COMPONENT_SNIPPET = `import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-background text-foreground">
      <div className="max-w-md p-6 rounded-2xl bg-surface-container border border-border shadow-md">
        <h2 className="text-xl font-bold font-sans">Sovereign Interface</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-6">
          Desert modernism primitives running directly from your repository.
        </p>
        <div className="flex items-center gap-3">
          <Button variant="default" leftIcon={<Sparkles className="w-4 h-4" />}>
            Deploy Mirage
          </Button>
          <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Explore
          </Button>
        </div>
      </div>
    </main>
  );
}`;

export function DocsPage({ onNavigate }: DocsPageProps) {
  const [selectedFramework, setSelectedFramework] = React.useState<FrameworkKey>('vite');
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 flex gap-8">
      {/* 1. Left Docs Sidebar */}
      <aside className="w-60 shrink-0 hidden lg:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-3 space-y-6">
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Getting Started
            </h4>
            <nav className="space-y-1">
              <button
                onClick={() => onNavigate('landing')}
                className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 text-left cursor-pointer"
              >
                <span>Introduction</span>
              </button>
              <button
                className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-semibold bg-secondary text-primary border border-border text-left cursor-pointer shadow-xs"
              >
                <span>Installation &amp; Quickstart</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </button>
              <button
                onClick={() => scrollToSection('sec-cli-init')}
                className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 text-left cursor-pointer"
              >
                <span>CLI Quickstart</span>
              </button>
              <button
                onClick={() => scrollToSection('sec-color-tokens')}
                className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 text-left cursor-pointer"
              >
                <span>Theming &amp; Tokens</span>
              </button>
              <button
                onClick={() => scrollToSection('sec-mindset')}
                className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 text-left cursor-pointer"
              >
                <span>Architecture</span>
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
              <span>Component Primitives</span>
              <span className="text-[10px] text-primary font-mono">37</span>
            </h4>
            <nav className="space-y-0.5">
              {[
                { name: 'Button', id: 'button' },
                { name: 'Accordion', id: 'accordion' },
                { name: 'Enclave Card', id: 'card' },
                { name: 'Dialog', id: 'dialog' },
                { name: 'Tabs', id: 'tabs' },
                { name: 'Input', id: 'input' },
                { name: 'Phone Input', id: 'phone-input' },
                { name: 'Dropdown Menu', id: 'dropdown-menu' },
                { name: 'Popover', id: 'popover' },
                { name: 'Table', id: 'table' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => onNavigate('components', c.id)}
                  className="w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 text-left cursor-pointer"
                >
                  <span>{c.name}</span>
                </button>
              ))}
              <button
                onClick={() => onNavigate('components')}
                className="w-full flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-primary hover:underline text-left cursor-pointer mt-2"
              >
                <span>View all 37 components</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </nav>
          </div>
        </div>
      </aside>

      {/* 2. Main Documentation Body */}
      <main className="flex-1 min-w-0 max-w-3xl space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <button onClick={() => onNavigate('landing')} className="hover:text-foreground cursor-pointer">
            Docs
          </button>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Getting Started</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-foreground font-medium">Installation</span>
        </div>

        {/* Title Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
            <span className="material-symbols-outlined text-[14px]">tune</span>
            <span>CLI v2.4.0 • Zero Bundle Bloat</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Installation &amp; Quickstart
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed">
            Equip your frontend with artisanal warm minimalist primitives. Designed to live directly inside your source
            repository with full ownership of every line of code.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted-foreground font-mono">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border">
              <span className="material-symbols-outlined text-[14px] text-primary">schedule</span>
              Estimated setup: ~3 mins
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border">
              <span className="material-symbols-outlined text-[14px] text-secondary">layers</span>
              Tailwind v3.4 &amp; v4 ready
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border">
              <span className="material-symbols-outlined text-[14px] text-emerald-500">code</span>
              TypeScript native
            </span>
          </div>
        </div>

        {/* Section 1: Architectural Mindset */}
        <section id="sec-mindset" className="space-y-4 pt-4 border-t border-border/50">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
            Architectural Mindset
          </h2>
          <div className="p-5 rounded-xl bg-surface-container border border-border/70 border-l-4 border-l-primary leading-relaxed text-sm text-foreground/90 space-y-2">
            <p className="italic font-sans">
              &quot;Sahara is not a monolithic component library. It is a collection of re-usable primitives that you copy
              and paste into your apps. You choose the components you need, customize them without fighting stylesheet
              specificity, and ship without runtime overhead.&quot;
            </p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            By avoiding opaque external npm component packages, you prevent breaking changes when React or your bundler
            updates. You retain 100% control of styling, accessibility, and dependencies.
          </p>
        </section>

        {/* Section 2: Prerequisites */}
        <section id="sec-prerequisites" className="space-y-4 pt-4 border-t border-border/50">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
            Prerequisites
          </h2>
          <p className="text-sm text-muted-foreground">
            Ensure your development environment meets the following baseline versions:
          </p>
          <ul className="space-y-2 text-sm text-foreground/90 list-disc list-inside">
            <li>
              <strong>Node.js 18.0.0+</strong> or <strong>Bun 1.0+</strong>
            </li>
            <li>
              <strong>React 18</strong> or <strong>React 19</strong>
            </li>
            <li>
              <strong>Tailwind CSS v4</strong> or <strong>v3.4+</strong> with standard CSS variable mode
            </li>
          </ul>
        </section>

        {/* Section 3: Framework Setup */}
        <section id="sec-frameworks" className="space-y-4 pt-4 border-t border-border/50">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
            Initialize Your Application Base
          </h2>
          <p className="text-sm text-muted-foreground">
            Select your preferred application scaffolding tool to create the base repository:
          </p>

          {/* Framework Tabs */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-1 p-1 bg-secondary/40 border-b border-border overflow-x-auto">
              {(Object.keys(FRAMEWORK_COMMANDS) as FrameworkKey[]).map((fw) => (
                <button
                  key={fw}
                  onClick={() => setSelectedFramework(fw)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer shrink-0 ${
                    selectedFramework === fw
                      ? 'bg-background text-foreground shadow-xs border border-border font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {fw === 'vite' ? 'Vite + React' : fw === 'nextjs' ? 'Next.js 15' : fw === 'remix' ? 'Remix / Astro' : 'Manual'}
                </button>
              ))}
            </div>

            <div className="p-4 space-y-3">
              <p className="text-xs text-muted-foreground">{FRAMEWORK_COMMANDS[selectedFramework].desc}</p>
              <div className="relative rounded-lg bg-inverse-surface p-3 font-mono text-xs text-inverse-on-surface">
                <pre className="overflow-x-auto pr-16">
                  <code>{FRAMEWORK_COMMANDS[selectedFramework].cmd}</code>
                </pre>
                <button
                  onClick={() => copyText(FRAMEWORK_COMMANDS[selectedFramework].cmd, 'fw')}
                  className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-xs font-sans text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedKey === 'fw' ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedKey === 'fw' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Execute CLI Init */}
        <section id="sec-cli-init" className="space-y-4 pt-4 border-t border-border/50">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
            Execute Sahara UI Init
          </h2>
          <p className="text-sm text-muted-foreground">
            Run the initialization command inside your workspace root. The CLI will inspect your package manager,
            configure path aliases, and configure <code className="font-mono text-primary">components.json</code>.
          </p>

          <div className="relative rounded-lg bg-inverse-surface p-4 font-mono text-xs text-inverse-on-surface">
            <pre className="overflow-x-auto pr-16">
              <code>pnpm dlx sahara-ui@latest init</code>
            </pre>
            <button
              onClick={() => copyText('pnpm dlx sahara-ui@latest init', 'init')}
              className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-xs font-sans text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copiedKey === 'init' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedKey === 'init' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Mirage Tip Callout Banner */}
          <div className="p-4 rounded-xl bg-surface-container border border-border/60 flex items-start gap-3">
            <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">
              lightbulb
            </span>
            <div className="space-y-1">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Tip: Mirage Translucent Specular
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The Sahara CLI automatically sets up both <strong>Solstice (warm sandstone light)</strong> and{' '}
                <strong>Nocturne (basalt dark)</strong> mode color tokens, with support for specular glass buttons and
                ambient halo glow.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Configure components.json */}
        <section id="sec-components-json" className="space-y-4 pt-4 border-t border-border/50">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
            Configure components.json
          </h2>
          <p className="text-sm text-muted-foreground">
            The CLI automatically creates or updates <code className="font-mono text-primary">components.json</code>.
            You can verify its contents:
          </p>

          <div className="relative rounded-lg bg-inverse-surface p-4 font-mono text-xs text-inverse-on-surface">
            <pre className="overflow-x-auto pr-16">
              <code>{COMPONENTS_JSON_SNIPPET}</code>
            </pre>
            <button
              onClick={() => copyText(COMPONENTS_JSON_SNIPPET, 'json')}
              className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-xs font-sans text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copiedKey === 'json' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedKey === 'json' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </section>

        {/* Section 6: Embed Color Tokens */}
        <section id="sec-color-tokens" className="space-y-4 pt-4 border-t border-border/50">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
            Embed The Sahara Color Tokens
          </h2>
          <p className="text-sm text-muted-foreground">
            Add the dual-theme token definitions to your <code className="font-mono text-primary">globals.css</code> file:
          </p>

          <div className="relative rounded-lg bg-inverse-surface p-4 font-mono text-xs text-inverse-on-surface">
            <pre className="overflow-x-auto pr-16">
              <code>{GLOBALS_CSS_SNIPPET}</code>
            </pre>
            <button
              onClick={() => copyText(GLOBALS_CSS_SNIPPET, 'css')}
              className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-xs font-sans text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copiedKey === 'css' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedKey === 'css' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </section>

        {/* Section 7: Add First Component */}
        <section id="sec-first-component" className="space-y-4 pt-4 border-t border-border/50">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
            Add Your First Component Primitives
          </h2>
          <p className="text-sm text-muted-foreground">
            Now you are ready to pull primitives into your project. For example, add the Button component:
          </p>

          <div className="relative rounded-lg bg-inverse-surface p-4 font-mono text-xs text-inverse-on-surface">
            <pre className="overflow-x-auto pr-16">
              <code>pnpm dlx sahara-ui add button enclave-card</code>
            </pre>
            <button
              onClick={() => copyText('pnpm dlx sahara-ui add button enclave-card', 'add')}
              className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-xs font-sans text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copiedKey === 'add' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedKey === 'add' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <p className="text-sm text-muted-foreground pt-2">
            Import and compose directly in your application:
          </p>

          <div className="relative rounded-lg bg-inverse-surface p-4 font-mono text-xs text-inverse-on-surface">
            <pre className="overflow-x-auto pr-16">
              <code>{FIRST_COMPONENT_SNIPPET}</code>
            </pre>
            <button
              onClick={() => copyText(FIRST_COMPONENT_SNIPPET, 'usage')}
              className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container text-xs font-sans text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copiedKey === 'usage' ? 'check' : 'content_copy'}
              </span>
              <span>{copiedKey === 'usage' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </section>

        {/* Next Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-border/50">
          <button
            onClick={() => scrollToSection('sec-color-tokens')}
            className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 text-left transition-all cursor-pointer shadow-xs group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-primary font-semibold">Next Topic</span>
              <span className="material-symbols-outlined text-[18px] text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </div>
            <h4 className="text-base font-bold text-foreground font-sans">Theming &amp; Mineral Tokens</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Deep dive into custom Solstice sandstone variables and Nocturne basalt contrast ratios.
            </p>
          </button>

          <button
            onClick={() => onNavigate('components')}
            className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 text-left transition-all cursor-pointer shadow-xs group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-primary font-semibold">Component Gallery</span>
              <span className="material-symbols-outlined text-[18px] text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </div>
            <h4 className="text-base font-bold text-foreground font-sans">Browse 37+ Primitives</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Explore accessible cards, buttons, drawers, dialogs, sliders, and GenUI blocks.
            </p>
          </button>
        </div>
      </main>

      {/* 3. Right Table of Contents (On this page) */}
      <aside className="w-56 shrink-0 hidden xl:block">
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pl-2 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
            On this page
          </h4>
          <nav className="space-y-1.5 text-xs text-muted-foreground">
            <button
              onClick={() => scrollToSection('sec-mindset')}
              className="block w-full text-left hover:text-foreground transition-colors cursor-pointer"
            >
              Architectural Mindset
            </button>
            <button
              onClick={() => scrollToSection('sec-prerequisites')}
              className="block w-full text-left hover:text-foreground transition-colors cursor-pointer"
            >
              Prerequisites
            </button>
            <button
              onClick={() => scrollToSection('sec-frameworks')}
              className="block w-full text-left hover:text-foreground transition-colors cursor-pointer"
            >
              Framework Setup
            </button>
            <button
              onClick={() => scrollToSection('sec-cli-init')}
              className="block w-full text-left hover:text-foreground transition-colors cursor-pointer"
            >
              CLI Initialization
            </button>
            <button
              onClick={() => scrollToSection('sec-components-json')}
              className="block w-full text-left hover:text-foreground transition-colors cursor-pointer"
            >
              Configure components.json
            </button>
            <button
              onClick={() => scrollToSection('sec-color-tokens')}
              className="block w-full text-left hover:text-foreground transition-colors cursor-pointer"
            >
              Sahara Color Tokens
            </button>
            <button
              onClick={() => scrollToSection('sec-first-component')}
              className="block w-full text-left hover:text-foreground transition-colors cursor-pointer"
            >
              First Component
            </button>
          </nav>
        </div>
      </aside>
    </div>
  );
}
