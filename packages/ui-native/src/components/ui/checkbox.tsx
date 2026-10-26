import * as React from 'react';
import { Pressable, View, Text, type PressableProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface CheckboxProps extends Omit<PressableProps, 'onPress'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  label?: string;
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  className,
  label,
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      disabled={disabled}
      onPress={() => onCheckedChange?.(!checked)}
      className={cn('flex flex-row items-center space-x-2', disabled && 'opacity-50')}
      {...props}
    >
      <View
        className={cn(
          'h-5 w-5 rounded-[4px] border border-border items-center justify-center',
          checked ? 'bg-primary border-primary' : 'bg-card',
          className
        )}
      >
        {checked && (
          <Text className="text-primary-foreground text-xs font-bold leading-none">✓</Text>
        )}
      </View>
      {label ? (
        <Text className="text-sm font-medium text-foreground ml-2">{label}</Text>
      ) : null}
    </Pressable>
  );
}
