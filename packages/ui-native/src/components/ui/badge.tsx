import * as React from 'react';
import { View, Text, type ViewProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex flex-row items-center rounded-full px-2.5 py-0.5 border',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary',
        secondary: 'border-transparent bg-secondary',
        destructive: 'border-transparent bg-destructive',
        outline: 'border-border bg-transparent',
        emerald: 'border-emerald-500/30 bg-emerald-500/15',
        amber: 'border-amber-500/30 bg-amber-500/15',
        terracotta: 'border-orange-500/30 bg-orange-500/15',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva('text-xs font-semibold', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'text-foreground',
      emerald: 'text-emerald-400',
      amber: 'text-amber-400',
      terracotta: 'text-orange-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BadgeProps
  extends ViewProps,
    VariantProps<typeof badgeVariants> {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
}

export function Badge({
  className,
  textClassName,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ variant }), className)} {...props}>
      {typeof children === 'string' ? (
        <Text className={cn(badgeTextVariants({ variant }), textClassName)}>
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}

export { badgeVariants, badgeTextVariants };
