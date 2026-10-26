import { cn } from './utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-skeleton border border-border/30 shadow-xs',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
