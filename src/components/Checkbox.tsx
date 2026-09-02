import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing, typography } from '../theme';

type Props = {
  label: string;
  checked: boolean;
  onToggle: () => void;
};

export default function Checkbox({ label, checked, onToggle }: Props) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={onToggle}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && <Ionicons name="checkmark" size={16} color={colors.white} />}
      </View>
      <Text style={[typography.body, { color: colors.ink, flex: 1 }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  box: {
    width: 24,
    height: 24,
    borderRadius: radius.sm - 2,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.inputBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  boxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
});
