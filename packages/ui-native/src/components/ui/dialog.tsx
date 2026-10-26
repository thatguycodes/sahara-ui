import * as React from 'react';
import { Modal, View, Text, Pressable, type ViewProps, type TextProps } from 'react-native';
import { cn } from '../../lib/utils';

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: DialogProps) {
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
    <DialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export interface DialogTriggerProps {
  children: React.ReactElement<{ onPress?: () => void }>;
  asChild?: boolean;
}

export function DialogTrigger({
  children,
}: DialogTriggerProps): React.ReactNode {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error('DialogTrigger must be used within Dialog');

  return React.cloneElement(children, {
    onPress: () => {
      children.props.onPress?.();
      ctx.onOpenChange(true);
    },
  });
}

export function DialogContent({
  className,
  children,
}: ViewProps & { className?: string }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error('DialogContent must be used within Dialog');

  return (
    <Modal
      transparent
      animationType="fade"
      visible={ctx.open}
      onRequestClose={() => ctx.onOpenChange(false)}
    >
      <View className="flex-1 items-center justify-center bg-black/70 px-4">
        <Pressable
          className="absolute inset-0"
          onPress={() => ctx.onOpenChange(false)}
        />
        <View
          className={cn(
            'w-full max-w-sm rounded-[16px] border border-border bg-card p-6 shadow-xl',
            className
          )}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
}

export function DialogHeader({ className, ...props }: ViewProps & { className?: string }) {
  return <View className={cn('flex flex-col space-y-1.5 pb-3', className)} {...props} />;
}

export function DialogTitle({ className, ...props }: TextProps & { className?: string }) {
  return (
    <Text
      className={cn('text-lg font-semibold text-foreground', className)}
      {...props}
    />
  );
}

export function DialogDescription({ className, ...props }: TextProps & { className?: string }) {
  return (
    <Text
      className={cn('text-sm text-muted-foreground pt-1', className)}
      {...props}
    />
  );
}

export function DialogFooter({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View
      className={cn('flex flex-row justify-end space-x-2 pt-4', className)}
      {...props}
    />
  );
}

export interface DialogCloseProps {
  children: React.ReactElement<{ onPress?: () => void }>;
  asChild?: boolean;
}

export function DialogClose({
  children,
}: DialogCloseProps): React.ReactNode {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error('DialogClose must be used within Dialog');

  return React.cloneElement(children, {
    onPress: () => {
      children.props.onPress?.();
      ctx.onOpenChange(false);
    },
  });
}
