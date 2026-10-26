import * as React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface TextareaProps extends TextInputProps {
  className?: string;
  error?: boolean;
}

export const Textarea = React.forwardRef<any, TextareaProps>(
  ({ className, error, placeholderTextColor, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        placeholderTextColor={placeholderTextColor ?? '#9e8e7d'}
        className={cn(
          'min-h-[96px] w-full rounded-[8px] border border-input bg-card px-3 py-2 text-sm text-foreground',
          'focus:border-primary focus:ring-1 focus:ring-primary',
          error && 'border-destructive text-destructive',
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';
