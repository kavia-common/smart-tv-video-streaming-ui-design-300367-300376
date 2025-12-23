//
// Ocean Professional Theme - colors, spacing, typography, shadows
//

// PUBLIC_INTERFACE
export const theme = {
  name: 'Ocean Professional',
  colors: {
    background: '#0B1220', // deep ocean
    surface: '#0F172A', // slate/dark surface
    surfaceElevated: '#111827',
    primary: '#2563EB', // blue
    primaryAccent: '#3B82F6',
    secondary: '#F59E0B', // amber
    text: '#E5E7EB',
    textMuted: 'rgba(229,231,235,0.75)',
    outline: 'rgba(59,130,246,0.6)',
    outlineStrong: '#F59E0B',
    tileBg: '#111827',
    tileHover: '#1F2937',
    border: 'rgba(255,255,255,0.08)',
    shadow: 'rgba(0,0,0,0.35)',
    gradientFrom: 'rgba(37,99,235,0.10)',
    gradientTo: 'rgba(17,24,39,0.0)',
    danger: '#EF4444'
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 18,
    xl: 24
  },
  shadow: {
    soft: '0 6px 20px rgba(0,0,0,0.3)',
    medium: '0 10px 28px rgba(0,0,0,0.35)',
    strong: '0 18px 60px rgba(0,0,0,0.4)'
  },
  typography: {
    fontFamily: `'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif`,
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 22,
      xxl: 28
    }
  }
};

// PUBLIC_INTERFACE
export function cssVar(name, fallback) {
  return `var(--${name}, ${fallback || 'initial'})`;
}
