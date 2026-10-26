import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--accent-primary)] text-[var(--accent-on-primary)] hover:bg-[var(--accent-hover)] font-semibold shadow-[var(--shadow-bevel)] focus-visible:ring-[var(--accent-primary)]',
        primary:
          'bg-[var(--accent-primary)] text-[var(--accent-on-primary)] hover:bg-[var(--accent-hover)] font-semibold shadow-[var(--shadow-bevel)] focus-visible:ring-[var(--accent-primary)]',
        glow:
          'bg-[var(--accent-primary)] text-[var(--accent-on-primary)] hover:bg-[var(--accent-hover)] font-semibold shadow-[var(--shadow-glow-violet)] focus-visible:ring-[var(--accent-primary)]',
        secondary:
          'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-base)] hover:border-[var(--border-light)] hover:bg-[var(--bg-surface)] focus-visible:ring-[var(--border-light)]',
        outline:
          'border border-[var(--border-light)] bg-transparent hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] focus-visible:ring-[var(--accent-primary)]',
        ghost:
          'hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus-visible:ring-[var(--border-light)]',
        destructive:
          'bg-[var(--telemetry-danger-bg,rgba(147,0,10,0.3))] text-[var(--telemetry-danger,#ffb4ab)] border border-[var(--telemetry-danger-border,rgba(255,180,171,0.35))] hover:opacity-90 font-medium focus-visible:ring-red-500',
        emerald:
          'bg-[var(--telemetry-success-bg,rgba(6,95,70,0.25))] text-[var(--telemetry-success,#34d399)] border border-[var(--telemetry-success-border,rgba(52,211,153,0.35))] hover:opacity-95 font-semibold shadow-[var(--shadow-glow-emerald)] focus-visible:ring-[var(--telemetry-success,#34d399)]',
        terracotta:
          'bg-[var(--color-sahara-terracotta,#c86d3b)] text-white hover:bg-[var(--color-sahara-solstice-terracotta-hover,#b55f2f)] font-semibold shadow-xs focus-visible:ring-[#c86d3b]',
        amber:
          'bg-[var(--color-sahara-amber,#e09f3e)] text-[#161311] hover:bg-[var(--color-sahara-amber-bright,#ffba56)] font-semibold shadow-xs focus-visible:ring-[#e09f3e]',
        sandstone:
          'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-base)] hover:border-[var(--color-sahara-sandstone,#9e8e7d)] hover:bg-[var(--bg-surface)] font-medium',
        link:
          'text-primary underline-offset-4 hover:underline focus-visible:ring-0',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-[6px] px-3 text-xs',
        lg: 'h-10 rounded-[8px] px-6 text-base',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  glow?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      glow = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const effectiveVariant = glow && (!variant || variant === 'default' || variant === 'primary') ? 'glow' : variant;

    return (
      <Comp
        className={cn(buttonVariants({ variant: effectiveVariant, size, className }), glow && variant === 'emerald' && 'shadow-[var(--shadow-glow-emerald)]')}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
