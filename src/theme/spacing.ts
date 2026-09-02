/**
 * mare.IA · AgroSUS — Design Tokens: Spacing, Radius & Sizing
 */

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

export const radius = {
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 999,
} as const;

export const sizing = {
  screenPaddingH: 20,
  inputHeight: 48,
  buttonHeight: 52,
  tabBarHeight: 64,
  headerHeight: 64,
  iconSm: 18,
  iconMd: 24,
  iconLg: 32,
  touchable: 44,
} as const;

export const borderWidth = {
  hairline: 1,
  thin: 1.5,
  thick: 2,
} as const;

export default spacing;
