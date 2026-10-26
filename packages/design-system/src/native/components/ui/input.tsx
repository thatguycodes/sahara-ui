import * as React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface InputProps extends TextInputProps {
  className?: string;
  error?: boolean;
}

export const Input = React.forwardRef<any, InputProps>(
  ({ className, error, placeholderTextColor, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        placeholderTextColor={placeholderTextColor ?? '#9e8e7d'}
        className={cn(
          'h-11 w-full rounded-[8px] border border-input bg-card px-3 py-2 text-sm text-foreground',
          'focus:border-primary focus:ring-1 focus:ring-primary',
          error && 'border-destructive text-destructive',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
