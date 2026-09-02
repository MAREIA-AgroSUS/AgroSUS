import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing, typography, riskColors, RiskLevel } from '../theme';

type Props = {
  risk: RiskLevel;
  size?: 'sm' | 'md';
};

export default function StatusBadge({ risk, size = 'md' }: Props) {
  const cfg = riskColors[risk];
  return (
    <View style={styles.row}>
      <Ionicons name="flag" size={size === 'sm' ? 14 : 16} color={cfg.fg} />
      <Text
        style={[
          typography.bodyBold,
          { color: cfg.fg, marginLeft: 6, fontSize: size === 'sm' ? 12 : 13 },
        ]}
      >
        {cfg.label}
      </Text>
    </View>
  );
}

export function Pill({
  text,
  tone = 'success',
}: {
  text: string;
  tone?: 'success' | 'warning' | 'danger' | 'neutral' | 'info';
}) {
  const map = {
    success: { fg: colors.success, bg: colors.successBg },
    warning: { fg: colors.warning, bg: colors.warningBg },
    danger: { fg: colors.danger, bg: colors.dangerBg },
    info: { fg: colors.info, bg: colors.infoBg },
    neutral: { fg: colors.inkSoft, bg: colors.divider },
  } as const;
  const c = map[tone];
  return (
    <View style={[pillStyles.pill, { backgroundColor: c.bg }]}>
      <Text style={[pillStyles.text, { color: c.fg }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
});

const pillStyles = StyleSheet.create({
  pill: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
    borderRadius: radius.pill,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
});
