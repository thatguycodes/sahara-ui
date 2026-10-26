/**
 * Shadow and elevation tokens for thatguycodes design system
 * Supports both CSS strings for Web and ViewStyle objects for React Native (iOS & Android)
 */

export interface NativeShadow {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export const shadows = {
  web: {
    dark: {
      bevel: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      glowAmber: '0 0 20px -3px rgba(255, 186, 86, 0.35)',
      glowTerracotta: '0 0 20px -3px rgba(200, 109, 59, 0.35)',
      glowEmerald: '0 0 18px -3px rgba(52, 211, 153, 0.35)',
      hud: '0 24px 48px -12px rgba(0, 0, 0, 0.75), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
    },
    light: {
      bevel: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      glowAmber: '0 4px 14px 0 rgba(224, 159, 62, 0.25)',
      glowTerracotta: '0 4px 14px 0 rgba(200, 109, 59, 0.25)',
      glowEmerald: '0 4px 14px 0 rgba(5, 150, 105, 0.20)',
      hud: '0 10px 25px -5px rgba(34, 27, 23, 0.08), 0 8px 10px -6px rgba(34, 27, 23, 0.04)',
    },
  },
  native: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    } as NativeShadow,
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
    } as NativeShadow,
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 6,
    } as NativeShadow,
    hud: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 12,
    } as NativeShadow,
    glowAmber: {
      shadowColor: '#ffba56',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.45,
      shadowRadius: 8,
      elevation: 6,
    } as NativeShadow,
    glowTerracotta: {
      shadowColor: '#c86d3b',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.45,
      shadowRadius: 8,
      elevation: 6,
    } as NativeShadow,
  },
} as const;
