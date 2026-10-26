import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] text-[11px] font-mono font-medium border uppercase tracking-wider transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[var(--accent-muted)] border-[var(--accent-primary)]/30 text-[var(--accent-primary)]',
        violet: 'bg-[var(--accent-muted)] border-[var(--accent-primary)]/30 text-[var(--accent-primary)]',
        emerald: 'bg-[var(--telemetry-success-bg,rgba(6,95,70,0.25))] border-[var(--telemetry-success-border,rgba(52,211,153,0.35))] text-[var(--telemetry-success,#34d399)]',
        amber: 'bg-[var(--telemetry-warning-bg,rgba(224,159,62,0.2))] border-[var(--telemetry-warning-border,rgba(255,186,86,0.35))] text-[var(--telemetry-warning,#ffba56)]',
        destructive: 'bg-[var(--telemetry-danger-bg,rgba(147,0,10,0.3))] border-[var(--telemetry-danger-border,rgba(255,180,171,0.35))] text-[var(--telemetry-danger,#ffb4ab)]',
        crimson: 'bg-[var(--telemetry-danger-bg,rgba(147,0,10,0.3))] border-[var(--telemetry-danger-border,rgba(255,180,171,0.35))] text-[var(--telemetry-danger,#ffb4ab)]',
        secondary: 'bg-[var(--bg-elevated)] border-[var(--border-base)] text-[var(--text-secondary)]',
        zinc: 'bg-[var(--bg-elevated)] border-[var(--border-base)] text-[var(--text-secondary)]',
        terracotta: 'bg-[#fbece4] dark:bg-[#c86d3b]/20 border-[#c86d3b]/40 text-[#c86d3b] dark:text-[#ffb59c]',
        sandstone: 'bg-[#f3e7e0] dark:bg-[#2e2927] border-[#efe3db] dark:border-[#514536] text-[#705f55] dark:text-[#9e8e7d]',
        outline: 'bg-transparent border-[var(--border-light)] text-[var(--text-primary)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  pulse?: boolean;
}

function Badge({ className, variant, dot = false, pulse = false, children, ...props }: BadgeProps) {
  const dotColors: Record<string, string> = {
    default: 'bg-[var(--accent-primary)]',
    violet: 'bg-[var(--accent-primary)]',
    emerald: 'bg-[var(--telemetry-success,#34d399)]',
    amber: 'bg-[var(--telemetry-warning,#ffba56)]',
    destructive: 'bg-[var(--telemetry-danger,#ffb4ab)]',
    crimson: 'bg-[var(--telemetry-danger,#ffb4ab)]',
    terracotta: 'bg-[#c86d3b] dark:bg-[#ffb59c]',
    sandstone: 'bg-[#705f55] dark:bg-[#9e8e7d]',
    secondary: 'bg-[var(--text-muted)]',
    zinc: 'bg-[var(--text-muted)]',
    outline: 'bg-[var(--text-primary)]',
  };

  const currentVariant = variant || 'default';

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span
              className={cn(
                'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                dotColors[currentVariant]
              )}
            />
          )}
          <span className={cn('relative inline-flex rounded-full h-1.5 w-1.5', dotColors[currentVariant])} />
        </span>
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
