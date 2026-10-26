import * as React from 'react';
import { Modal, View, Text, Pressable, type ViewProps, type TextProps } from 'react-native';
import { cn } from '../../lib/utils';

interface SheetContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

export interface SheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Sheet({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: SheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
  );

  return (
    <SheetContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

export interface SheetTriggerProps {
  children: React.ReactElement<{ onPress?: () => void }>;
  asChild?: boolean;
}

export function SheetTrigger({
  children,
}: SheetTriggerProps): React.ReactNode {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error('SheetTrigger must be used within Sheet');

  return React.cloneElement(children, {
    onPress: () => {
      children.props.onPress?.();
      ctx.onOpenChange(true);
    },
  });
}

export function SheetContent({
  className,
  children,
}: ViewProps & { className?: string }) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error('SheetContent must be used within Sheet');

  return (
    <Modal
      transparent
      animationType="slide"
      visible={ctx.open}
      onRequestClose={() => ctx.onOpenChange(false)}
    >
      <View className="flex-1 justify-end bg-black/60">
        <Pressable
          className="flex-1"
          onPress={() => ctx.onOpenChange(false)}
        />
        <View
          className={cn(
            'w-full rounded-t-[24px] border-t border-border bg-card p-6 pb-10 shadow-2xl',
            className
          )}
        >
          {/* Drag Handle Pill */}
          <View className="items-center pb-4">
            <View className="h-1.5 w-12 rounded-full bg-border" />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

export function SheetHeader({ className, ...props }: ViewProps & { className?: string }) {
  return <View className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props} />;
}

export function SheetTitle({ className, ...props }: TextProps & { className?: string }) {
  return (
    <Text
      className={cn('text-lg font-semibold text-foreground', className)}
      {...props}
    />
  );
}

export function SheetDescription({ className, ...props }: TextProps & { className?: string }) {
  return (
    <Text
      className={cn('text-sm text-muted-foreground pt-1', className)}
      {...props}
    />
  );
}

export function SheetFooter({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View
      className={cn('flex flex-row justify-end space-x-2 pt-4', className)}
      {...props}
    />
  );
}
