import * as React from 'react';
import { Pressable, View, type PressableProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface SwitchProps extends Omit<PressableProps, 'onPress'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch({
  checked = false,
  onCheckedChange,
  className,
  disabled,
  ...props
}: SwitchProps) {
  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked }}
      disabled={disabled}
      onPress={() => onCheckedChange?.(!checked)}
      className={cn(
        'h-6 w-11 rounded-full p-0.5 transition-colors',
        checked ? 'bg-primary' : 'bg-secondary border border-border',
        disabled && 'opacity-50',
        className
      )}
      {...props}
    >
      <View
        className={cn(
          'h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
          checked ? 'translate-x-5 bg-primary-foreground' : 'translate-x-0 bg-muted-foreground'
        )}
      />
    </Pressable>
  );
}
