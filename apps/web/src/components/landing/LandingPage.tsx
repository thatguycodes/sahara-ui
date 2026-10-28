import * as React from 'react';

interface LandingPageProps {
  onNavigate: (view: 'landing' | 'docs' | 'components', componentId?: string) => void;
}

const CATEGORY_SNIPPETS: Record<string, string> = {
  enclave: `// Sahara UI Enclave Card Primitive
import { EnclaveCard, EnclaveHeader, EnclaveTelemetry, EnclaveBadge, Button } from "@/components/ui/enclave";

export function SolsticeEnclave() {
  return (
    <EnclaveCard variant="sandstone" elevation="crest">
      <EnclaveHeader
        title="Zero-Knowledge Enclave"
        subtitle="ZK-Rollup Dune Verifier v4"
        badge={<EnclaveBadge status="live">Active • 24°C</EnclaveBadge>}
      />
      <EnclaveTelemetry metric="Entropy Saturation" value={94.8} />
      <div className="flex gap-3 mt-4">
        <Button variant="primary" icon="lock_reset">Rotate Keys</Button>
        <Button variant="ghost" icon="terminal">Logs</Button>
      </div>
    </EnclaveCard>
  );
}`,
  buttons: `// Sahara UI Tactile Button Primitives
import { Button, GlassButton } from "@/components/ui/button";

export function ButtonShowcase() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" size="lg" icon="rocket_launch">
        Deploy Mirage Protocol
      </Button>

      <GlassButton shortcut="⌘S">
        Sync Sandpoint
      </GlassButton>
    </div>
  );
}`,
  status: `// Sahara UI Segmented Dock & Status Pills
import { SegmentedControl, FilterDock, Badge } from "@/components/ui/docks";

export function DockShowcase() {
  return (
    <div className="flex flex-col items-center gap-4">
      <FilterDock
        items={[
          { label: "All Dunes (84)", active: true },
          { label: "Active Oases" },
          { label: "Bedrock Clusters" }
        ]}
      />
      <Badge variant="solstice" dot>Solstice Synced</Badge>
    </div>
  );
}`,
};

const STRATA_PALETTE = [
  { name: 'Solstice Chalk', hex: '#FFF8F5', textDark: true },
  { name: 'Desert Sandstone', hex: '#F4ECE8', textDark: true },
  { name: 'Canyon Blush', hex: '#FFDBCB', textDark: true },
  { name: 'Caliche Ochre', hex: '#944516', textDark: false },
  { name: 'Obsidian Basalt', hex: '#33302D', textDark: false },
];

export function LandingPage({ onNavigate }: LandingPageProps) {
  const [copiedCli, setCopiedCli] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<'enclave' | 'buttons' | 'status'>('enclave');
  const [previewMode, setPreviewMode] = React.useState<'preview' | 'code'>('preview');
  const [copiedCode, setCopiedCode] = React.useState(false);
  const [copiedHex, setCopiedHex] = React.useState<string | null>(null);
  const [activeDockFilter, setActiveDockFilter] = React.useState('All Dunes (84)');
  const [entropyVal, setEntropyVal] = React.useState(94.8);

  const copyCliCommand = () => {
    navigator.clipboard.writeText('pnpm dlx sahara-ui@latest init');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const copyCodeSnippet = () => {
    navigator.clipboard.writeText(CATEGORY_SNIPPETS[activeCategory]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const copyColorHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="w-full flex flex-col bg-background text-foreground transition-colors">
      {/* 1. Release Announcement Banner */}
      <section className="w-full flex justify-center px-4 pt-6 pb-2">
        <button
          onClick={() => onNavigate('docs')}
          className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-high hover:bg-surface-variant transition-all duration-300 shadow-xs cursor-pointer border border-border/40"
        >
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
          <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
            <span className="font-bold text-primary">v2.4</span>
            <span className="text-on-surface-variant">Apple Liquid Glass & Dual-Mode Sandstone Primitives</span>
            <span className="text-primary group-hover:translate-x-0.5 transition-transform duration-200">
              → Read Release
            </span>
          </span>
        </button>
      </section>

      {/* 2. Hero Section */}
      <section className="relative w-full max-w-[1320px] mx-auto px-6 lg:px-12 pt-10 pb-20 overflow-hidden">
        {/* Atmospheric Ambient Halo */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-b from-secondary-container/15 via-primary-fixed/20 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Mineral Overline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container mb-6 shadow-xs border border-border/50">
            <span
              className="material-symbols-outlined text-[15px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              landscape
            </span>
            <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant font-semibold">
              Desert Modernism Design System
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight text-balance mb-6">
            The Foundation for your{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              Sovereign Interface
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-balance mb-10 leading-relaxed">
            Composable, accessible, desert-toned components engineered with warm sandstone aesthetics, zero runtime
            overhead, and total copy-paste code ownership.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full mb-10">
            <button
              onClick={() => onNavigate('docs')}
              className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-lg bg-primary hover:bg-secondary text-on-primary font-title-md text-title-md transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">bolt</span>
              Get Started
            </button>

            <button
              onClick={() => onNavigate('components')}
              className="inline-flex items-center justify-center gap-3 px-6 h-12 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-title-md text-title-md shadow-xs border border-border transition-all duration-200 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[19px] text-on-surface-variant">widgets</span>
              View Components
              <kbd className="px-2 py-0.5 rounded bg-surface-container-highest font-label-sm text-label-sm text-on-surface-variant">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Interactive Quick CLI Copy Box */}
          <div className="w-full max-w-md mx-auto">
            <div className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-surface-container-lowest shadow-xs border border-border hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-3 font-mono text-[13px] text-on-surface overflow-x-auto">
                <span className="text-primary font-bold select-none">$</span>
                <span className="tracking-tight select-all">pnpm dlx sahara-ui@latest init</span>
              </div>
              <button
                onClick={copyCliCommand}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-variant text-[12px] font-medium transition-colors cursor-pointer border border-border/30"
                title="Copy CLI Command"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedCli ? 'check' : 'content_copy'}
                </span>
                <span className="font-label-sm text-label-sm">{copiedCli ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Framework Compatibility Row */}
          <div className="mt-14 pt-8 w-full max-w-3xl flex flex-col items-center border-t border-border/30">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/80 mb-4">
              First-class compatibility with modern toolchains
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-title-md text-title-md text-on-surface-variant">
              <div className="flex items-center gap-2 hover:text-on-surface transition-colors">
                <span className="w-2 h-2 rounded-full bg-primary" /> Next.js 15
              </div>
              <div className="flex items-center gap-2 hover:text-on-surface transition-colors">
                <span className="w-2 h-2 rounded-full bg-secondary-container" /> React 19
              </div>
              <div className="flex items-center gap-2 hover:text-on-surface transition-colors">
                <span className="w-2 h-2 rounded-full bg-tertiary" /> Vite
              </div>
              <div className="flex items-center gap-2 hover:text-on-surface transition-colors">
                <span className="w-2 h-2 rounded-full bg-primary-container" /> Tailwind CSS v4
              </div>
              <div className="flex items-center gap-2 hover:text-on-surface transition-colors">
                <span className="w-2 h-2 rounded-full bg-outline" /> TypeScript 5.8
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Component Enclave Playground */}
      <section className="w-full max-w-[1320px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              Tactile Sandstone Primitives
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Interactive Component Enclave</h2>
          </div>

          {/* Category Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-surface-container shadow-inner border border-border/50">
            <button
              onClick={() => setActiveCategory('enclave')}
              className={`px-4 py-1.5 rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                activeCategory === 'enclave'
                  ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Enclaves
            </button>
            <button
              onClick={() => setActiveCategory('buttons')}
              className={`px-4 py-1.5 rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                activeCategory === 'buttons'
                  ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Buttons
            </button>
            <button
              onClick={() => setActiveCategory('status')}
              className={`px-4 py-1.5 rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                activeCategory === 'status'
                  ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Badges &amp; Docks
            </button>
          </div>
        </div>

        {/* Playground Frame */}
        <div className="w-full rounded-2xl bg-surface-container-lowest shadow-md border border-border overflow-hidden flex flex-col">
          {/* Toolbar Header */}
          <div className="h-14 px-6 border-b border-border flex items-center justify-between bg-surface-container-low">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-error/70" />
              <span className="w-3 h-3 rounded-full bg-secondary-container/70" />
              <span className="w-3 h-3 rounded-full bg-primary/70" />
              <span className="text-on-surface-variant/70 font-mono text-[11px] ml-2 font-medium">
                sahara-enclave-preview.tsx
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Preview vs Code switcher */}
              <div className="flex items-center p-0.5 rounded-lg bg-surface-container border border-border/40">
                <button
                  onClick={() => setPreviewMode('preview')}
                  className={`px-3 py-1 rounded font-label-sm text-label-sm transition-all cursor-pointer ${
                    previewMode === 'preview'
                      ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold'
                      : 'text-on-surface-variant'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setPreviewMode('code')}
                  className={`px-3 py-1 rounded font-label-sm text-label-sm transition-all cursor-pointer ${
                    previewMode === 'code'
                      ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold'
                      : 'text-on-surface-variant'
                  }`}
                >
                  Code (React)
                </button>
              </div>

              {previewMode === 'code' && (
                <button
                  onClick={copyCodeSnippet}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary text-on-primary font-label-sm text-label-sm hover:bg-secondary transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedCode ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Main Stage */}
          {previewMode === 'preview' ? (
            <div className="p-8 md:p-14 min-h-[380px] flex items-center justify-center bg-surface-container-lowest">
              {/* 1. ENCLAVE SHOWCASE */}
              {activeCategory === 'enclave' && (
                <div className="w-full max-w-md p-6 rounded-2xl bg-surface-container border border-border shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Zero-Knowledge Enclave
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        ZK-Rollup Dune Verifier v4
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm border border-border">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Active • 24°C
                    </span>
                  </div>

                  <div className="my-5 p-4 rounded-xl bg-surface-container-lowest border border-border/60">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-on-surface-variant">Entropy Saturation</span>
                      <span className="text-primary font-bold">{entropyVal}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-secondary to-secondary-container transition-all duration-300"
                        style={{ width: `${entropyVal}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEntropyVal((prev) => (prev > 95 ? 88.4 : 96.2))}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-md text-label-md shadow-xs transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">lock_reset</span>
                      Rotate Keys
                    </button>
                    <button
                      onClick={() => onNavigate('components', 'card')}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-variant text-on-surface font-label-md text-label-md border border-border transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">terminal</span>
                      View Primitives
                    </button>
                  </div>
                </div>
              )}

              {/* 2. BUTTONS SHOWCASE */}
              {activeCategory === 'buttons' && (
                <div className="flex flex-col items-center gap-6 max-w-lg">
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => onNavigate('components', 'button')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-secondary text-on-primary font-title-md text-title-md shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                      Deploy Mirage Protocol
                    </button>

                    <button
                      onClick={() => onNavigate('components', 'button')}
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-title-md text-title-md border border-border shadow-xs transition-all cursor-pointer"
                    >
                      <span>Sync Sandpoint</span>
                      <kbd className="px-1.5 py-0.5 rounded bg-surface-container-highest text-xs font-mono text-on-surface-variant">
                        ⌘S
                      </kbd>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    <span className="px-3 py-1 rounded-md bg-secondary text-on-secondary text-xs font-medium">
                      Terracotta Active
                    </span>
                    <span className="px-3 py-1 rounded-md bg-tertiary text-on-tertiary text-xs font-medium">
                      Caliche Earth
                    </span>
                    <span className="px-3 py-1 rounded-md bg-surface-container-high text-on-surface text-xs font-medium border border-border">
                      Sandstone Border
                    </span>
                  </div>
                </div>
              )}

              {/* 3. STATUS & DOCKS SHOWCASE */}
              {activeCategory === 'status' && (
                <div className="flex flex-col items-center gap-6">
                  {/* Segmented Filter Dock */}
                  <div className="inline-flex items-center p-1 rounded-2xl bg-surface-container border border-border shadow-inner">
                    {['All Dunes (84)', 'Active Oases', 'Bedrock Clusters'].map((label) => (
                      <button
                        key={label}
                        onClick={() => setActiveDockFilter(label)}
                        className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                          activeDockFilter === label
                            ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold'
                            : 'text-on-surface-variant hover:text-on-surface'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* Status Pills */}
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Solstice Synced
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Nocturne Basalt
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/15 text-secondary dark:text-secondary-fixed text-xs font-mono font-medium">
                      Telemetry OK (99.99%)
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Code View Stage */
            <div className="p-6 bg-inverse-surface text-inverse-on-surface font-mono text-[13px] leading-relaxed overflow-x-auto">
              <pre>
                <code>{CATEGORY_SNIPPETS[activeCategory]}</code>
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* 4. Value Propositions: Engineered for Sovereign Craftsmen */}
      <section className="w-full max-w-[1320px] mx-auto px-6 lg:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            Uncompromising Engineering
          </span>
          <h2 className="font-display-md text-display-md text-on-surface mt-2 tracking-tight">
            Engineered for Sovereign Craftsmen
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3">
            Built around the philosophy that great user interfaces are personal, local, and completely free of opaque
            dependency lock-ins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-xs border border-border hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-6">
                <span className="material-symbols-outlined text-[26px]">folder_copy</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Copy &amp; Paste Ownership</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                You own the code. Not a closed black-box npm package that breaks with React releases. Drop
                zero-dependency, fully accessible primitives directly into your repository.
              </p>
            </div>
            <div className="mt-8 pt-4 flex items-center gap-2 font-label-md text-label-md text-primary font-semibold">
              <button
                onClick={() => onNavigate('docs')}
                className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <span>Explore Architecture</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-xs border border-border hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-6">
                <span className="material-symbols-outlined text-[26px]">palette</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
                Solstice &amp; Nocturne Dual-Themes
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Warm sandstone light modes and basalt dark modes meticulously balanced with mineral contrast ratios. No
                blinding pure-whites or washed-out grays.
              </p>
            </div>
            <div className="mt-8 pt-4 flex items-center gap-2 font-label-md text-label-md text-primary font-semibold">
              <button
                onClick={() => onNavigate('docs')}
                className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <span>Inspect Theme Tokens</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-xs border border-border hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-6">
                <span className="material-symbols-outlined text-[26px]">terminal</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">CLI-Powered Velocity</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Add any component in milliseconds. Seamless scaffolding with auto-detection for Tailwind CSS v4, Next.js
                15 App Router, and React 19 compiler patterns.
              </p>
            </div>
            <div className="mt-8 pt-4 flex items-center gap-2 font-label-md text-label-md text-primary font-semibold">
              <button
                onClick={() => onNavigate('docs')}
                className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <span>Quickstart Guide</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3-Step Walkthrough: Ready in Three Steps */}
      <section className="w-full bg-surface-container-low py-20 my-6 border-y border-border/40">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                Fast Integration
              </span>
              <h2 className="font-display-md text-display-md text-on-surface tracking-tight mt-1">
                Ready in Three Steps
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Zero configuration headache. Follow the simple workflow to bootstrap your application with
              production-ready primitives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-xs border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-sm text-label-sm font-bold px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed">
                    STEP 01
                  </span>
                  <span className="material-symbols-outlined text-outline-variant text-[20px]">rocket</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-2">
                  Initialize your project
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Run the CLI wizard inside any Next.js, Vite, or Remix workspace to inject font scales and sandstone tokens.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-inverse-surface font-mono text-[12px] text-inverse-on-surface overflow-x-auto">
                <code>pnpm dlx sahara-ui init</code>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-xs border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-sm text-label-sm font-bold px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed">
                    STEP 02
                  </span>
                  <span className="material-symbols-outlined text-outline-variant text-[20px]">add_circle</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-2">
                  Add your primitives
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Select and pull the exact accessible components you need directly into your source folder.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-inverse-surface font-mono text-[12px] text-inverse-on-surface overflow-x-auto">
                <code>pnpm dlx sahara-ui add button enclave</code>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-xs border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-sm text-label-sm font-bold px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed">
                    STEP 03
                  </span>
                  <span className="material-symbols-outlined text-outline-variant text-[20px]">verified</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-2">
                  Compose and ship
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Import the primitives and tweak styles directly with Tailwind CSS classes without stylesheet conflicts.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-inverse-surface font-mono text-[12px] text-inverse-on-surface overflow-x-auto">
                <code>import &#123; Button &#125; from &quot;@/components/ui&quot;</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Spatial Typography & Minerals Architectural Block */}
      <section className="w-full max-w-[1320px] mx-auto px-6 lg:px-12 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-surface-container via-surface-container-low to-surface-container-high p-8 lg:p-14 shadow-md border border-border/60 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">
              Spatial Typography &amp; Minerals
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface mt-2 mb-4">
              Crafted for Quiet Concentration
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
              Inspired by high desert modernism in Palm Springs, Arizona calderas, and tectonic sandstone canyons. We
              discarded aggressive saturation in favor of rich earthy warmth that honors your users’ focus.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-border/40">
                <span className="font-display-md text-display-md text-primary font-bold">
                  0.0<span className="text-secondary text-[24px]">kb</span>
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Runtime JavaScript bundle tax
                </p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-border/40">
                <span className="font-display-md text-display-md text-secondary font-bold">
                  100<span className="text-primary text-[24px]">%</span>
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Accessible ARIA compliant primitives
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Strata Color Swatches */}
          <div className="w-full lg:max-w-md p-6 rounded-2xl bg-surface-container-lowest border border-border shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="font-title-md text-title-md text-on-surface font-semibold">Strata Color Palette</span>
              <span className="text-xs text-on-surface-variant font-mono">
                {copiedHex ? `Copied ${copiedHex}!` : 'Click swatch to copy'}
              </span>
            </div>
            <div className="space-y-3">
              {STRATA_PALETTE.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => copyColorHex(color.hex)}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-border/50 hover:border-primary/50 transition-all cursor-pointer text-left group"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className={`font-label-md text-label-md font-semibold ${
                      color.textDark ? 'text-[#1e1b19]' : 'text-white'
                    }`}
                  >
                    {color.name}
                  </span>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded bg-black/10 group-hover:bg-black/20 transition-colors ${
                      color.textDark ? 'text-[#1e1b19]' : 'text-white'
                    }`}
                  >
                    {color.hex}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="w-full max-w-[1320px] mx-auto px-6 lg:px-12 py-16 mb-8">
        <div className="relative overflow-hidden rounded-3xl bg-surface-container-high p-10 md:p-16 text-center flex flex-col items-center border border-border/50">
          {/* Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-on-primary mb-6 shadow-md">
              <span className="material-symbols-outlined text-[28px]">filter_hdr</span>
            </div>
            <h2 className="font-display-md text-display-md text-on-surface tracking-tight">
              Begin sculpting your interface.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 mb-8 text-balance">
              Explore over 37+ beautifully composed primitives, block templates, and accessible enclaves crafted for
              sovereign makers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('components')}
                className="px-7 h-12 rounded-lg bg-primary hover:bg-secondary text-on-primary font-title-md text-title-md transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Component Gallery</span>
                <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
              </button>
              <a
                href="https://github.com/thatguycodes/thatguycodes"
                target="_blank"
                rel="noreferrer"
                className="px-6 h-12 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-title-md text-title-md transition-all shadow-xs border border-border flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="w-full bg-surface-container-low border-t border-border/40">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined text-[16px]">filter_hdr</span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Crafted for high-focus modern web tools. Inspired by desert modernism.
            </span>
          </div>
          <div className="flex items-center gap-6 font-label-md text-label-md text-on-surface-variant">
            <a
              href="https://github.com/thatguycodes/thatguycodes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-on-surface transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@thatguycodes/design-system"
              target="_blank"
              rel="noreferrer"
              className="hover:text-on-surface transition-colors"
            >
              npm
            </a>
            <button onClick={() => onNavigate('docs')} className="hover:text-on-surface transition-colors cursor-pointer">
              Documentation
            </button>
            <button onClick={() => onNavigate('components')} className="hover:text-on-surface transition-colors cursor-pointer">
              Components
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
