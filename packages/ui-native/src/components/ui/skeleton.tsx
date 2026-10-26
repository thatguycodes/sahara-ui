import * as React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export function Skeleton({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View
      className={cn('animate-pulse rounded-[8px] bg-[#393431] border border-border/30', className)}
      {...props}
    />
  );
}
