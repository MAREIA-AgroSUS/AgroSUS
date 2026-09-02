import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, sizing } from '../theme';

type Props = {
  step: number;
  total: number;
  title: string;
};

export default function ProgressSteps({ step, total, title }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.headRow}>
        <Text style={typography.bodyBold}>
          Etapa {step} de {total}
        </Text>
        <Text style={[typography.bodyBold, { color: colors.ink }]}>{title}</Text>
      </View>
      <View style={styles.track}>
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.segment,
              i < step ? styles.segmentActive : styles.segmentInactive,
              i === 0 && { marginLeft: 0 },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: sizing.screenPaddingH,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    backgroundColor: colors.background,
  },
  headRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  track: {
    flexDirection: 'row',
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    marginLeft: 4,
  },
  segmentActive: {
    backgroundColor: colors.ink,
  },
  segmentInactive: {
    backgroundColor: colors.divider,
  },
});
