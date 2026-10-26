/**
 * Universal color tokens for thatguycodes design system
 * Supports:
 * - Sahara Nocturne / Atomic Dark (Dark Theme)
 * - Sahara Solstice / Daylight (Light Theme)
 * - Telemetry & Signal status colors
 */

export const palette = {
  // Atomic / Basalt Base
  atomic: {
    black: '#09090b',
    dark: '#0c0c0f',
    surface: '#121215',
    elevated: '#18181b',
    highest: '#1e1e22',
    border: '#27272a',
    borderSubtle: '#1e1e24',
    borderLight: '#3f3f46',
    outline: '#52525b',
    accent: '#a78bfa',
    accentHover: '#c4b5fd',
    accentDeep: '#7c3aed',
    accentMuted: 'rgba(167, 139, 250, 0.15)',
  },

  // Sahara Suite
  sahara: {
    basalt: '#161311',
    surfaceLowest: '#110d0c',
    surface: '#231f1d',
    surfaceHigh: '#2e2927',
    surfaceHighest: '#393431',
    amber: '#e09f3e',
    amberBright: '#ffba56',
    terracotta: '#c86d3b',
    terracottaBright: '#ffb59c',
    sandstone: '#9e8e7d',
    sandstoneDark: '#514536',
  },

  // Solstice Suite (Light Theme)
  solstice: {
    bg: '#fff8f5',
    surface: '#ffffff',
    recessed: '#faf2ee',
    dock: '#f3e7e0',
    border: '#efe3db',
    borderHairline: '#eae0d8',
    borderLight: '#dfd2c8',
    terracotta: '#c86d3b',
    terracottaHover: '#b55f2f',
    terracottaTint: '#fbece4',
    terracottaPill: '#fceee7',
    textPrimary: '#221b17',
    textSecondary: '#705f55',
    textMuted: '#917e73',
    code: '#b45309',
    danger: '#b3261e',
  },

  // Telemetry & Status Signals
  telemetry: {
    emerald: '#34d399',
    emeraldBright: '#6ee7b7',
    emeraldDark: '#065f46',
    emeraldLight: '#059669',
    amber: '#fbbf24',
    amberBright: '#ffba56',
    amberDark: '#d97706',
    crimson: '#ef4444',
    crimsonBright: '#ffb4ab',
    crimsonDark: '#b3261e',
  },
} as const;

export interface ThemeSemanticColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;

  // Semantic surfaces
  bgCanvas: string;
  bgSurface: string;
  bgElevated: string;
  bgHighest: string;

  // Semantic borders
  borderBase: string;
  borderSubtle: string;
  borderLight: string;
  borderFocus: string;

  // Semantic brand & text
  accentPrimary: string;
  accentHover: string;
  accentDeep: string;
  accentMuted: string;
  accentOnPrimary: string;

  textPrimary: string;
  textSecondary: string;
  textMuted: string;

  // Status
  telemetrySuccess: string;
  telemetrySuccessBg: string;
  telemetrySuccessBorder: string;
  telemetryWarning: string;
  telemetryWarningBg: string;
  telemetryWarningBorder: string;
  telemetryDanger: string;
  telemetryDangerBg: string;
  telemetryDangerBorder: string;

  // Skeleton
  skeleton: string;
  skeletonShimmer: string;
}

export const darkThemeColors: ThemeSemanticColors = {
  background: '#161311',
  foreground: '#eae1dd',
  card: '#231f1d',
  cardForeground: '#eae1dd',
  popover: '#231f1d',
  popoverForeground: '#eae1dd',
  primary: '#ffba56',
  primaryForeground: '#161311',
  secondary: '#2e2927',
  secondaryForeground: '#eae1dd',
  muted: '#2e2927',
  mutedForeground: '#9e8e7d',
  accent: '#393431',
  accentForeground: '#ffba56',
  destructive: '#ffb4ab',
  destructiveForeground: '#450003',
  border: '#514536',
  input: '#514536',
  ring: '#ffba56',

  bgCanvas: '#161311',
  bgSurface: '#1f1b19',
  bgElevated: '#231f1d',
  bgHighest: '#2e2927',

  borderBase: '#514536',
  borderSubtle: '#393431',
  borderLight: '#9e8e7d',
  borderFocus: '#ffba56',

  accentPrimary: '#ffba56',
  accentHover: '#ffca7a',
  accentDeep: '#e09f3e',
  accentMuted: 'rgba(255, 186, 86, 0.15)',
  accentOnPrimary: '#161311',

  textPrimary: '#eae1dd',
  textSecondary: '#d5c4b1',
  textMuted: '#9e8e7d',

  telemetrySuccess: '#34d399',
  telemetrySuccessBg: 'rgba(6, 95, 70, 0.25)',
  telemetrySuccessBorder: 'rgba(52, 211, 153, 0.35)',
  telemetryWarning: '#ffba56',
  telemetryWarningBg: 'rgba(224, 159, 62, 0.2)',
  telemetryWarningBorder: 'rgba(255, 186, 86, 0.35)',
  telemetryDanger: '#ffb4ab',
  telemetryDangerBg: 'rgba(147, 0, 10, 0.3)',
  telemetryDangerBorder: 'rgba(255, 180, 171, 0.35)',

  skeleton: '#393431',
  skeletonShimmer: '#514536',
};

export const lightThemeColors: ThemeSemanticColors = {
  background: '#fff8f5',
  foreground: '#221b17',
  card: '#ffffff',
  cardForeground: '#221b17',
  popover: '#ffffff',
  popoverForeground: '#221b17',
  primary: '#c86d3b',
  primaryForeground: '#ffffff',
  secondary: '#faf2ee',
  secondaryForeground: '#221b17',
  muted: '#f3e7e0',
  mutedForeground: '#705f55',
  accent: '#fceee7',
  accentForeground: '#c86d3b',
  destructive: '#b3261e',
  destructiveForeground: '#ffffff',
  border: '#efe3db',
  input: '#efe3db',
  ring: '#c86d3b',

  bgCanvas: '#fff8f5',
  bgSurface: '#ffffff',
  bgElevated: '#faf2ee',
  bgHighest: '#f3e7e0',

  borderBase: '#efe3db',
  borderSubtle: '#eae0d8',
  borderLight: '#dfd2c8',
  borderFocus: '#c86d3b',

  accentPrimary: '#c86d3b',
  accentHover: '#b55f2f',
  accentDeep: '#852a03',
  accentMuted: '#fbece4',
  accentOnPrimary: '#ffffff',

  textPrimary: '#221b17',
  textSecondary: '#705f55',
  textMuted: '#917e73',

  telemetrySuccess: '#059669',
  telemetrySuccessBg: '#ecfdf5',
  telemetrySuccessBorder: '#a7f3d0',
  telemetryWarning: '#e09f3e',
  telemetryWarningBg: '#fffbeb',
  telemetryWarningBorder: '#fde68a',
  telemetryDanger: '#b3261e',
  telemetryDangerBg: '#fbeae9',
  telemetryDangerBorder: '#fecaca',

  skeleton: '#eae0d8',
  skeletonShimmer: '#dfd2c8',
};
