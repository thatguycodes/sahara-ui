import * as React from 'react';
import { View, Text, type ViewProps, type TextProps } from 'react-native';
import { cn } from '../../lib/utils';

export function Card({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View
      className={cn(
        'rounded-[12px] border border-border bg-card p-4 shadow-sm',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: ViewProps & { className?: string }) {
  return <View className={cn('flex flex-col space-y-1.5 pb-3', className)} {...props} />;
}

export function CardTitle({ className, ...props }: TextProps & { className?: string }) {
  return (
    <Text
      className={cn(
        'text-lg font-semibold leading-none tracking-tight text-card-foreground',
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: TextProps & { className?: string }) {
  return (
    <Text
      className={cn('text-sm text-muted-foreground pt-1', className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: ViewProps & { className?: string }) {
  return <View className={cn('py-2', className)} {...props} />;
}

export function CardFooter({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View
      className={cn('flex flex-row items-center pt-3', className)}
      {...props}
    />
  );
}
