import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shortcut?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, shortcut, error, disabled, ...props }, ref) => {
    // If enriched with icons/shortcuts/error, render composed input container
    if (leftIcon || rightIcon || shortcut || error) {
      return (
        <div className="w-full space-y-1">
          <div
            className={cn(
              'relative flex h-9 items-center w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors',
              'focus-within:ring-1 focus-within:ring-ring focus-within:border-ring',
              error && 'border-destructive focus-within:ring-destructive focus-within:border-destructive',
              disabled && 'cursor-not-allowed opacity-50 bg-muted/20'
            )}
          >
            {leftIcon && (
              <span className="mr-2 text-muted-foreground flex items-center shrink-0 [&_svg]:size-4">
                {leftIcon}
              </span>
            )}
            <input
              type={type}
              ref={ref}
              disabled={disabled}
              className={cn(
                'w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                className
              )}
              {...props}
            />
            {shortcut && (
              <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                {shortcut}
              </kbd>
            )}
            {rightIcon && (
              <span className="ml-2 text-muted-foreground flex items-center shrink-0 [&_svg]:size-4">
                {rightIcon}
              </span>
            )}
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
