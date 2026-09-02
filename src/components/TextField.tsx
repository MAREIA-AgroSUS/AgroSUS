import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors, radius, spacing, sizing, typography } from '../theme';

type Props = TextInputProps & {
  label?: string;
  multiline?: boolean;
  half?: boolean;
  error?: string;
  suffix?: string;
};

export default function TextField({
  label,
  multiline,
  half,
  error,
  suffix,
  style,
  ...rest
}: Props) {
  return (
    <View style={[styles.wrap, half && { width: '48%' }]}>
      {label ? <Text style={typography.label}>{label}</Text> : null}
      <View style={styles.inputRow}>
        <TextInput
          placeholderTextColor={colors.textMuted}
          style={[
            styles.input,
            multiline && styles.multiline,
            !!error && styles.inputError,
            style,
          ]}
          multiline={multiline}
          {...rest}
        />
        {suffix ? <Text style={styles.suffix}>{suffix}</Text> : null}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.md,
  },
  inputRow: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    height: sizing.inputHeight,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    marginTop: 6,
    ...typography.input,
  },
  multiline: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: spacing.sm,
  },
  inputError: {
    borderColor: colors.danger,
  },
  suffix: {
    position: 'absolute',
    right: 12,
    ...typography.caption,
  },
  errorText: {
    ...typography.caption,
    color: colors.danger,
    marginTop: 4,
  },
});
