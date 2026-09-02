import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing, typography } from '../theme';

type Tone = 'danger' | 'warning' | 'info';

export default function AlertBanner({
  text,
  tone = 'danger',
}: {
  text: string;
  tone?: Tone;
}) {
  const map = {
    danger: { fg: colors.danger, bg: colors.dangerBg, icon: 'warning' as const },
    warning: { fg: colors.warning, bg: colors.warningBg, icon: 'alert-circle' as const },
    info: { fg: colors.info, bg: colors.infoBg, icon: 'information-circle' as const },
  };
  const c = map[tone];
  return (
    <View style={[styles.wrap, { borderColor: c.fg, backgroundColor: c.bg }]}>
      <View style={[styles.iconCircle, { backgroundColor: c.fg }]}>
        <Ionicons name={c.icon} size={14} color={colors.white} />
      </View>
      <Text style={[typography.bodyBold, { color: c.fg, flex: 1 }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.md,
  },
  iconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
});
