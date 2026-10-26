import * as React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface ProgressProps extends ViewProps {
  value?: number;
  max?: number;
  className?: string;
  indicatorClassName?: string;
}

export function Progress({
  value = 0,
  max = 100,
  className,
  indicatorClassName,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <View
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-secondary border border-border',
        className
      )}
      {...props}
    >
      <View
        className={cn('h-full bg-primary rounded-full transition-all', indicatorClassName)}
        style={{ width: `${percentage}%` }}
      />
    </View>
  );
}
