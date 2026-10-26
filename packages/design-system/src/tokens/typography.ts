/**
 * Typography scale and font stack tokens for thatguycodes design system
 */

export const typography = {
  fontFamilies: {
    sans: "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Geist Mono', 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  fontSizes: {
    xs: { fontSize: 12, lineHeight: 16 },
    sm: { fontSize: 14, lineHeight: 20 },
    base: { fontSize: 16, lineHeight: 24 },
    lg: { fontSize: 18, lineHeight: 28 },
    xl: { fontSize: 20, lineHeight: 28 },
    '2xl': { fontSize: 24, lineHeight: 32 },
    '3xl': { fontSize: 30, lineHeight: 36 },
    '4xl': { fontSize: 36, lineHeight: 40 },
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;
