import * as React from 'react';
import { Phone, ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';

export interface AuthPhoneCardProps {
  defaultCountryCode?: string;
  placeholder?: string;
  onSubmitPhone?: (fullNumber: string) => void;
  isLoading?: boolean;
  className?: string;
}

export function AuthPhoneCard({
  defaultCountryCode = '+267',
  placeholder = '71 234 567',
  onSubmitPhone,
  isLoading = false,
  className,
}: AuthPhoneCardProps) {
  const [countryCode] = React.useState(defaultCountryCode);
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmitPhone) {
      onSubmitPhone(`${countryCode} ${phoneNumber}`);
    }
  };

  return (
    <Card className={className ? `w-full max-w-sm ${className}` : 'w-full max-w-sm'}>
      <CardHeader className="space-y-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Phone className="w-5 h-5" />
        </div>
        <div>
          <CardTitle>Obsidian Access</CardTitle>
          <CardDescription>Enter your phone number to sign into the sovereign cockpit</CardDescription>
        </div>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
              Mobile Number
            </label>
            <div className="flex items-center rounded-md border border-input bg-background focus-within:ring-1 focus-within:ring-ring focus-within:border-ring transition-colors overflow-hidden">
              <div className="flex items-center gap-1 px-3 py-2 border-r border-border bg-muted/40 text-xs font-mono text-foreground shrink-0 select-none">
                <span>{countryCode}</span>
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-transparent px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button
            type="submit"
            variant="glow"
            isLoading={isLoading}
            className="w-full"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Send One-Time Code
          </Button>

          <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Secured via Cloudflare Zero Trust &amp; HMAC verification</span>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
