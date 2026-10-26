import './global.css';
import * as React from 'react';
import { DESIGN_SYSTEM_VERSION } from '@thatguycodes/design-system';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import {
  Moon,
  Sun,
  Shield,
  Sparkles,
  Terminal,
  Zap,
  Sliders,
  Layers,
  Box,
} from 'lucide-react-native';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Badge,
  Avatar,
  AvatarFallback,
  Switch,
  Checkbox,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Separator,
  Progress,
  Skeleton,
  AuthPhoneCard,
} from '@thatguycodes/ui-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('buttons');

  // Interactive control states
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [checkboxChecked, setCheckboxChecked] = React.useState(true);
  const [progressVal, setProgressVal] = React.useState(68);
  const [inputText, setInputText] = React.useState('');

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const currentThemeClass = isDarkMode ? 'dark' : 'light';

  return (
    <SafeAreaView
      className={`flex-1 ${currentThemeClass} bg-background`}
      style={{ backgroundColor: isDarkMode ? '#161311' : '#fff8f5' }}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#161311' : '#fff8f5'}
      />

      <ScrollView
        className="flex-1 px-4 pt-3"
        contentContainerStyle={{ paddingBottom: 48 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Cockpit Header */}
        <View className="flex flex-row items-center justify-between pb-4 border-b border-border">
          <View className="flex flex-col">
            <View className="flex flex-row items-center space-x-2">
              <View className="h-2 w-2 rounded-full bg-emerald-400" />
              <Text className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase">
                thatguycodes • native v{DESIGN_SYSTEM_VERSION}
              </Text>
            </View>
            <Text className="text-xl font-bold tracking-tight text-foreground pt-0.5">
              Design System
            </Text>
            <Text className="text-xs text-muted-foreground">
              iOS & Android React Native Cockpit
            </Text>
          </View>

          {/* Theme Toggle Button */}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Toggle Theme"
            onPress={toggleTheme}
            className="flex flex-row items-center space-x-1.5 rounded-[8px] border border-border bg-card px-3 py-2 shadow-sm active:opacity-75"
          >
            {isDarkMode ? (
              <>
                <Moon size={16} color="#ffba56" />
                <Text className="text-xs font-semibold text-primary ml-1.5">
                  Nocturne
                </Text>
              </>
            ) : (
              <>
                <Sun size={16} color="#c86d3b" />
                <Text className="text-xs font-semibold text-primary ml-1.5">
                  Solstice
                </Text>
              </>
            )}
          </Pressable>
        </View>

        {/* Status Callout Banner */}
        <View className="mt-4 rounded-[12px] border border-primary/20 bg-primary/10 p-3.5">
          <View className="flex flex-row items-start space-x-3">
            <View className="p-1 rounded-[6px] bg-primary/20">
              <Sparkles size={16} color={isDarkMode ? '#ffba56' : '#c86d3b'} />
            </View>
            <View className="flex-1 ml-2.5">
              <Text className="text-xs font-bold text-foreground">
                Universal Architecture Active
              </Text>
              <Text className="text-[11px] text-muted-foreground pt-0.5 leading-4">
                Tokens synced with Web showcase. Built with NativeWind v4,
                @rn-primitives, and Lucide React Native icons.
              </Text>
            </View>
          </View>
        </View>

        {/* Section Navigation Tabs */}
        <View className="mt-5">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="overlays">Modals</TabsTrigger>
              <TabsTrigger value="auth">Auth Block</TabsTrigger>
            </TabsList>

            {/* TAB 1: BUTTONS & BADGES */}
            <TabsContent value="buttons">
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>
                    Native pressable primitives with variants and tactile feedback
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="default">Primary Default Button</Button>
                  <Button variant="glow">Glow Radiant Button</Button>
                  <Button variant="secondary">Secondary Surface Button</Button>
                  <Button variant="outline">Outline Border Button</Button>
                  <Button variant="destructive">Destructive Danger Button</Button>
                  <Button variant="ghost">Ghost Button</Button>

                  <Separator className="my-2" />

                  <Text className="text-xs font-semibold text-muted-foreground uppercase pt-1">
                    Button Sizes
                  </Text>
                  <View className="flex flex-row items-center space-x-2 pt-1">
                    <Button size="sm" variant="default" className="mr-2">
                      Small
                    </Button>
                    <Button size="default" variant="secondary" className="mr-2">
                      Medium
                    </Button>
                    <Button size="lg" variant="outline">
                      Large
                    </Button>
                  </View>
                </CardContent>
              </Card>

              {/* Badges & Status Pills */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Badges & Signals</CardTitle>
                  <CardDescription>Telemetry status indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <View className="flex flex-row flex-wrap gap-2">
                    <Badge variant="default">Primary Pill</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="emerald">Online 99.9%</Badge>
                    <Badge variant="amber">Syncing...</Badge>
                    <Badge variant="terracotta">Sahara</Badge>
                    <Badge variant="destructive">Alert</Badge>
                  </View>

                  <Separator className="my-3" />

                  <Text className="text-xs font-semibold text-muted-foreground uppercase pb-2">
                    Avatars
                  </Text>
                  <View className="flex flex-row items-center space-x-3">
                    <Avatar className="mr-2">
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <Avatar className="mr-2 bg-primary/20">
                      <AvatarFallback className="text-primary font-bold">
                        AG
                      </AvatarFallback>
                    </Avatar>
                    <Avatar className="bg-emerald-500/20 border-emerald-500/40">
                      <AvatarFallback className="text-emerald-400 font-bold">
                        OK
                      </AvatarFallback>
                    </Avatar>
                  </View>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 2: FORMS & CONTROLS */}
            <TabsContent value="forms">
              <Card>
                <CardHeader>
                  <CardTitle>Input Fields & Textarea</CardTitle>
                  <CardDescription>
                    Native text inputs with Sahara Nocturne focus styling
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <View className="space-y-1.5">
                    <Text className="text-xs font-semibold text-foreground">
                      Standard Input
                    </Text>
                    <Input
                      placeholder="e.g. sovereign-cluster-01"
                      value={inputText}
                      onChangeText={setInputText}
                    />
                  </View>

                  <View className="space-y-1.5">
                    <Text className="text-xs font-semibold text-foreground">
                      Multiline Textarea
                    </Text>
                    <Textarea placeholder="Enter telemetry notes, architectural decisions, or deployment logs..." />
                  </View>

                  <Separator className="my-1" />

                  <View className="flex flex-row items-center justify-between py-1">
                    <View className="flex flex-col">
                      <Text className="text-sm font-medium text-foreground">
                        Cloudflare Zero Trust Gate
                      </Text>
                      <Text className="text-xs text-muted-foreground">
                        Enforce encrypted outbound tunnel
                      </Text>
                    </View>
                    <Switch
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                  </View>

                  <View className="pt-2">
                    <Checkbox
                      checked={checkboxChecked}
                      onCheckedChange={setCheckboxChecked}
                      label="Retain audit logs in local SQLite storage"
                    />
                  </View>

                  <Separator className="my-1" />

                  <View className="space-y-1.5">
                    <View className="flex flex-row justify-between">
                      <Text className="text-xs font-semibold text-foreground">
                        Edge Cache Saturation
                      </Text>
                      <Text className="text-xs font-mono font-bold text-primary">
                        {progressVal}%
                      </Text>
                    </View>
                    <Progress value={progressVal} />
                  </View>

                  <View className="space-y-2 pt-2">
                    <Text className="text-xs font-semibold text-muted-foreground">
                      Skeleton Loading Shimmer
                    </Text>
                    <View className="flex flex-row items-center space-x-3 mb-2">
                      <Skeleton className="h-10 w-10 rounded-full mr-2" />
                      <View className="flex-1 space-y-1.5">
                        <Skeleton className="h-3.5 w-3/4 mb-1" />
                        <Skeleton className="h-3 w-1/2" />
                      </View>
                    </View>
                    <Skeleton className="h-14 w-full rounded-[8px]" />
                  </View>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 3: OVERLAYS & MODALS */}
            <TabsContent value="overlays">
              <Card>
                <CardHeader>
                  <CardTitle>Modals & Drawers</CardTitle>
                  <CardDescription>
                    Native modal presentation and bottom drawer sheets
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Dialog Demo */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default">Open Native Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Deploy to Edge Cluster?</DialogTitle>
                        <DialogDescription>
                          This will syndicate changes across Cloudflare POPs and
                          invalidate local cache.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline" size="sm" className="mr-2">
                            Cancel
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button variant="default" size="sm">
                            Confirm Deploy
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  {/* Bottom Sheet Demo */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="secondary">Open Bottom Sheet Drawer</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Cockpit Settings</SheetTitle>
                        <SheetDescription>
                          Configure your sovereign node runtime parameters
                        </SheetDescription>
                      </SheetHeader>
                      <View className="space-y-3 py-2">
                        <View className="flex flex-row justify-between items-center py-1">
                          <Text className="text-sm text-foreground">
                            Apple Silicon GPU Acceleration
                          </Text>
                          <Badge variant="emerald">Active</Badge>
                        </View>
                        <View className="flex flex-row justify-between items-center py-1">
                          <Text className="text-sm text-foreground">
                            Host Port Isolation
                          </Text>
                          <Text className="text-xs font-mono text-muted-foreground">
                            8080 : 8080
                          </Text>
                        </View>
                      </View>
                    </SheetContent>
                  </Sheet>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 4: AUTH BLOCK */}
            <TabsContent value="auth">
              <View className="items-center justify-center pt-2">
                <AuthPhoneCard
                  onSubmitPhone={(num) => {
                    alert(`Verification OTP sent to ${num}`);
                  }}
                />
              </View>
            </TabsContent>
          </Tabs>
        </View>

        {/* Footer Info */}
        <View className="mt-8 items-center justify-center border-t border-border pt-6 pb-2">
          <Text className="text-[11px] font-mono text-muted-foreground text-center">
            thatguycodes design system • monorepo v1.0
          </Text>
          <Text className="text-[10px] text-muted-foreground/60 text-center pt-0.5">
            Single Source of Truth: Web • iOS • Android
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
