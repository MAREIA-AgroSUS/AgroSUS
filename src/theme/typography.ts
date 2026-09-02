/**
 * mare.IA · AgroSUS — Design Tokens: Typography
 */
import { TextStyle } from 'react-native';
import { colors } from './colors';

export const fontFamily = {
  regular: 'System',
  medium: 'System',
  semibold: 'System',
  bold: 'System',
  mono: 'Courier',
} as const;

type Style = TextStyle;

export const typography: Record<string, Style> = {
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: -0.5,
  },
  h1: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.ink,
    letterSpacing: -0.3,
  },
  h2: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.ink,
  },
  h3: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.ink,
  },
  bodyLg: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.inkSoft,
    lineHeight: 23,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.inkSoft,
    lineHeight: 20,
  },
  bodyBold: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink,
  },
  label: {
    fontSize: 11.5,
    fontWeight: '700',
    color: colors.inkSoft,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.textMuted,
  },
  captionBold: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textMuted,
  },
  button: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.2,
  },
  input: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.ink,
  },
  placeholder: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.textMuted,
  },
  mono: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.ink,
    fontFamily: fontFamily.mono,
  },
};

export default typography;
