import { cn } from '@/lib/utils';
import { Check, ShieldCheck, GitPullRequest, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface PolarCheckoutCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  tierName?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  onCheckout?: () => void;
  className?: string;
}

export function PolarCheckoutCard({
  title,
  price,
  originalPrice,
  tierName = 'FLAGSHIP REPO',
  description,
  features,
  isPopular = false,
  onCheckout,
  className,
}: PolarCheckoutCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-[16px] bg-[var(--bg-surface,#0c0c0f)] border border-[var(--border-base,#27272a)] p-6 transition-all duration-200 overflow-hidden group hover:border-[var(--accent-primary,#a78bfa)]/50 shadow-lg',
        isPopular && 'border-[var(--accent-primary,#a78bfa)] shadow-[var(--shadow-glow-violet)]',
        className
      )}
    >
      {/* Background Accent Gradient */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent-primary,#a78bfa)]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--accent-primary,#a78bfa)]/15 transition-all" />

      {/* Header Tier */}
      <div className="flex items-center justify-between mb-4">
        <Badge variant={isPopular ? 'violet' : 'zinc'} dot={isPopular} pulse={isPopular}>
          {tierName}
        </Badge>
        {isPopular && (
          <span className="text-[11px] font-mono text-[var(--telemetry-success,#34d399)] bg-[var(--telemetry-success-bg,rgba(6,95,70,0.2))] px-2 py-0.5 rounded border border-[var(--telemetry-success-border,rgba(5,150,105,0.3))] font-medium">
            Save 30% Today
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-[var(--text-primary,#fafafa)] tracking-tight">{title}</h3>
      <p className="text-xs text-[var(--text-secondary,#a1a1aa)] mt-1.5 leading-relaxed">{description}</p>

      {/* Pricing Block */}
      <div className="my-5 pb-5 border-b border-[var(--border-base,#27272a)]">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-mono font-bold text-[var(--text-primary,#fafafa)] tracking-tight">{price}</span>
          {originalPrice && (
            <span className="text-sm font-mono text-[var(--text-muted,#71717a)] line-through">{originalPrice}</span>
          )}
        </div>
        <p className="text-[11px] font-mono text-[var(--telemetry-success,#34d399)] mt-1 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" />
          One-time payment • Lifetime repo pull access
        </p>
      </div>

      {/* Features List */}
      <div className="space-y-2.5 mb-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted,#71717a)]">
          Included Infrastructure
        </p>
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary,#fafafa)]">
            <Check className="w-4 h-4 text-[var(--telemetry-success,#34d399)] shrink-0 mt-0.5" />
            <span className="leading-tight">{feature}</span>
          </div>
        ))}
      </div>

      {/* Action CTA */}
      <Button
        variant={isPopular ? 'primary' : 'secondary'}
        glow={isPopular}
        className="w-full font-semibold py-2.5"
        onClick={onCheckout}
        rightIcon={<ArrowRight className="w-4 h-4" />}
      >
        <span>Instant Checkout via Polar</span>
      </Button>

      {/* Trust Signal */}
      <div className="mt-3.5 flex items-center justify-center gap-2 text-[10px] font-mono text-[var(--text-muted,#71717a)]">
        <GitPullRequest className="w-3 h-3 text-[var(--accent-primary,#a78bfa)]" />
        <span>Automated GitHub Invite within 5 seconds</span>
      </div>
    </div>
  );
}
