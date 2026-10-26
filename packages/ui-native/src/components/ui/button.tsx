import * as React from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'group flex flex-row items-center justify-center rounded-[8px] active:opacity-85 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default: 'bg-primary border border-primary/20',
        secondary: 'bg-secondary border border-border',
        destructive: 'bg-destructive border border-destructive/30',
        outline: 'border border-border bg-transparent',
        ghost: 'bg-transparent active:bg-secondary/40',
        link: 'bg-transparent underline',
        glow: 'bg-primary border border-primary/30 shadow-md',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 rounded-[6px]',
        lg: 'h-12 px-6 rounded-[10px]',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva('font-medium text-center', {
  variants: {
    variant: {
      default: 'text-primary-foreground font-semibold',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground font-semibold',
      outline: 'text-foreground',
      ghost: 'text-foreground',
      link: 'text-primary underline',
      glow: 'text-primary-foreground font-semibold tracking-wide',
    },
    size: {
      default: 'text-sm',
      sm: 'text-xs',
      lg: 'text-base',
      icon: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
}

export function Button({
  className,
  textClassName,
  variant,
  size,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={cn(
        buttonVariants({ variant, size }),
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
      disabled={disabled}
      accessibilityRole="button"
      {...props}
    >
      {typeof children === 'string' ? (
        <Text className={cn(buttonTextVariants({ variant, size }), textClassName)}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

export { buttonVariants, buttonTextVariants };
