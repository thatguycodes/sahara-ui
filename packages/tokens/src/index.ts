export * from './colors';
export * from './radii';
export * from './shadows';
export * from './typography';
export * from './types';

import { darkThemeColors, lightThemeColors } from './colors';
import { radii } from './radii';
import { shadows } from './shadows';
import { typography } from './typography';
import type { DesignTokens, ThemeMode } from './types';

/**
 * Returns full design tokens bundle for the requested theme mode
 */
export function getTokens(theme: ThemeMode = 'dark'): DesignTokens {
  return {
    theme,
    colors: theme === 'dark' ? darkThemeColors : lightThemeColors,
    radii,
    typography,
    shadows,
  };
}
