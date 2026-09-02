import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

type Option = { label: string; value: string };

type Props = {
  label?: string;
  options?: Option[];
  value: string | null;
  onChange: (value: string) => void;
  compact?: boolean;
};

const DEFAULT_OPTIONS: Option[] = [
  { label: 'Sim', value: 'sim' },
  { label: 'Não', value: 'nao' },
];

export default function ToggleGroup({
  label,
  options = DEFAULT_OPTIONS,
  value,
  onChange,
  compact,
}: Props) {
  return (
    <View style={[styles.wrap, compact && { marginBottom: 0 }]}>
      {label ? <Text style={typography.label}>{label}</Text> : null}
      <View style={[styles.row, !!label && { marginTop: 6 }]}>
        {options.map((opt, idx) => {
          const active = value === opt.value;
          return (
            <TouchableOpacity
              key={opt.value}
              activeOpacity={0.8}
              onPress={() => onChange(opt.value)}
              style={[
                styles.option,
                idx === 0 && styles.first,
                idx === options.length - 1 && styles.last,
                active ? styles.optionActive : styles.optionInactive,
                compact && styles.optionCompact,
              ]}
            >
              <Text
                style={[
                  typography.bodyBold,
                  { color: active ? colors.white : colors.ink, fontSize: compact ? 13 : 14 },
                ]}
              >
                {opt.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.md },
  row: { flexDirection: 'row' },
  option: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
    borderLeftWidth: 0,
  },
  optionCompact: {
    height: 34,
  },
  first: {
    borderLeftWidth: 1.5,
    borderTopLeftRadius: radius.sm,
    borderBottomLeftRadius: radius.sm,
  },
  last: {
    borderTopRightRadius: radius.sm,
    borderBottomRightRadius: radius.sm,
  },
  optionActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionInactive: {
    backgroundColor: colors.white,
  },
});
