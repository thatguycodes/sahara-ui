import * as React from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check, Play, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface CodeSandboxProps {
  fileName?: string;
  language?: string;
  code: string;
  className?: string;
  onRunSandbox?: () => void;
}

export function CodeSandbox({
  fileName = 'docker-compose.yml',
  language = 'yaml',
  code,
  className,
  onRunSandbox,
}: CodeSandboxProps) {
  const [copied, setCopied] = React.useState(false);
  const [isRunning, setIsRunning] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    if (onRunSandbox) onRunSandbox();
    setTimeout(() => setIsRunning(false), 1500);
  };

  return (
    <div
      className={cn(
        'w-full rounded-[12px] bg-[var(--bg-canvas,#0c0c0f)] border border-[var(--border-base,#27272a)] overflow-hidden shadow-2xl transition-colors',
        className
      )}
    >
      {/* Dock Header */}
      <div className="h-10 px-4 bg-[var(--bg-surface,#09090b)] border-b border-[var(--border-base,#27272a)] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-base,#27272a)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-base,#27272a)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-base,#27272a)]" />
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 bg-[var(--bg-elevated,#18181b)] rounded-t-[4px] border-x border-t border-[var(--border-base,#27272a)] text-xs font-mono text-[var(--accent-primary,#c4b5fd)]">
            <Terminal className="w-3.5 h-3.5 text-[var(--accent-primary,#a78bfa)]" />
            <span>{fileName}</span>
          </div>
          <Badge variant="zinc" className="text-[10px]">
            {language}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={copyToClipboard}
            className="h-7 px-2 text-xs text-[var(--text-secondary,#a1a1aa)] hover:text-[var(--text-primary,#fafafa)]"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[var(--telemetry-success,#34d399)] mr-1" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 mr-1" />
                <span>Copy</span>
              </>
            )}
          </Button>

          <Button
            size="sm"
            variant="emerald"
            glow
            isLoading={isRunning}
            onClick={handleRun}
            className="h-7 px-2.5 text-xs font-medium"
            leftIcon={<Play className="w-3 h-3 fill-current" />}
          >
            {isRunning ? 'Deploying...' : 'Run Lab'}
          </Button>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 bg-[var(--bg-canvas,#09090b)] font-mono text-xs leading-relaxed text-[var(--text-primary,#fafafa)] overflow-x-auto">
        <pre className="selection:bg-[var(--accent-primary,#a78bfa)]/30">
          <code>{code}</code>
        </pre>
      </div>

      {/* Footer Telemetry Dock */}
      <div className="px-4 py-2 bg-[var(--bg-surface,#0c0c0f)] border-t border-[var(--border-base,#27272a)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted,#71717a)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--telemetry-success,#34d399)] animate-pulse" />
          <span>Local Engine Ready</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Port: 3000</span>
          <span>RAM: 32MB</span>
          <span className="text-[var(--telemetry-success,#34d399)] font-semibold">$0.00/mo</span>
        </div>
      </div>
    </div>
  );
}
