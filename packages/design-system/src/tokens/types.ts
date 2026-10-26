import type { ThemeSemanticColors } from './colors';
import type { RadiusToken } from './radii';

export type ThemeMode = 'dark' | 'light';

export interface DesignTokens {
  theme: ThemeMode;
  colors: ThemeSemanticColors;
  radii: typeof import('./radii').radii;
  typography: typeof import('./typography').typography;
  shadows: typeof import('./shadows').shadows;
}
