import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Phone, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react-native';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

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

  const handleSubmit = () => {
    if (onSubmitPhone) {
      onSubmitPhone(`${countryCode} ${phoneNumber}`);
    }
  };

  return (
    <Card className={cn('w-full max-w-sm', className)}>
      <CardHeader>
        <View className="mb-3 h-10 w-10 items-center justify-center rounded-[8px] border border-primary/20 bg-primary/10">
          <Phone size={20} color="#ffba56" />
        </View>
        <CardTitle>Obsidian Access</CardTitle>
        <CardDescription>
          Enter your mobile phone number to sign into the sovereign cockpit
        </CardDescription>
      </CardHeader>

      <CardContent>
        <View className="flex flex-col space-y-2">
          <Text className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Mobile Number
          </Text>

          <View className="flex flex-row items-center overflow-hidden rounded-[8px] border border-border bg-card">
            <View className="flex flex-row items-center border-r border-border bg-secondary px-3 py-2.5">
              <Text className="text-xs font-semibold text-foreground mr-1">
                {countryCode}
              </Text>
              <ChevronDown size={14} color="#9e8e7d" />
            </View>

            <TextInput
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder={placeholder}
              placeholderTextColor="#9e8e7d"
              className="flex-1 px-3 py-2 text-sm text-foreground"
            />
          </View>
        </View>
      </CardContent>

      <CardFooter className="flex flex-col space-y-3">
        <Button
          variant="glow"
          disabled={isLoading || phoneNumber.trim().length === 0}
          onPress={handleSubmit}
          className="w-full flex flex-row items-center justify-center space-x-2"
        >
          <Text className="text-sm font-semibold text-primary-foreground mr-1">
            {isLoading ? 'Verifying...' : 'Send One-Time Code'}
          </Text>
          <ArrowRight size={16} color="#161311" />
        </Button>

        <View className="flex flex-row items-center justify-center space-x-1.5 pt-1">
          <ShieldCheck size={14} color="#ffba56" />
          <Text className="text-[11px] text-muted-foreground text-center">
            Secured via Cloudflare Zero Trust & HMAC verification
          </Text>
        </View>
      </CardFooter>
    </Card>
  );
}
