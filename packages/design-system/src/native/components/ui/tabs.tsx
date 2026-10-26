import * as React from 'react';
import { View, Text, Pressable, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

interface TabsContextValue {
  value: string;
  onValueChange: (val: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export interface TabsProps extends ViewProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (val: string) => void;
  className?: string;
}

export function Tabs({
  value: controlledValue,
  defaultValue = '',
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = React.useCallback(
    (newVal: string) => {
      if (!isControlled) {
        setUncontrolledValue(newVal);
      }
      onValueChange?.(newVal);
    },
    [isControlled, onValueChange]
  );

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <View className={cn('flex flex-col', className)} {...props}>
        {children}
      </View>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View
      className={cn(
        'flex flex-row items-center rounded-[8px] bg-secondary p-1 border border-border',
        className
      )}
      {...props}
    />
  );
}

export interface TabsTriggerProps {
  value: string;
  className?: string;
  textClassName?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export function TabsTrigger({
  value,
  className,
  textClassName,
  children,
  disabled,
}: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabsTrigger must be used within Tabs');
  const isActive = ctx.value === value;

  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
      disabled={disabled}
      onPress={() => ctx.onValueChange(value)}
      className={cn(
        'flex-1 items-center justify-center rounded-[6px] py-1.5 px-3',
        isActive ? 'bg-card shadow-sm border border-border' : 'bg-transparent',
        disabled && 'opacity-50',
        className
      )}
    >
      {typeof children === 'string' ? (
        <Text
          className={cn(
            'text-xs font-medium',
            isActive ? 'text-primary font-semibold' : 'text-muted-foreground',
            textClassName
          )}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

export interface TabsContentProps extends ViewProps {
  value: string;
  className?: string;
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabsContent must be used within Tabs');
  if (ctx.value !== value) return null;

  return (
    <View className={cn('pt-3', className)} {...props}>
      {children}
    </View>
  );
}
