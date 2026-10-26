import * as React from 'react';
import { View, Text, Image, type ViewProps, type ImageProps, type TextProps } from 'react-native';
import { cn } from '../../lib/utils';

export function Avatar({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-secondary items-center justify-center border border-border',
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }: ImageProps & { className?: string }) {
  return (
    <Image
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className, ...props }: TextProps & { className?: string }) {
  return (
    <Text
      className={cn(
        'flex h-full w-full items-center justify-center text-xs font-medium text-muted-foreground uppercase',
        className
      )}
      {...props}
    />
  );
}
