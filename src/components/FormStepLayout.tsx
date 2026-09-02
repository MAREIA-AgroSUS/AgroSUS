import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppHeader from './AppHeader';
import ProgressSteps from './ProgressSteps';
import ScreenContainer from './ScreenContainer';
import Button from './Button';
import { colors, spacing, sizing } from '../theme';

type Props = {
  step: number;
  total: number;
  title: string;
  children: React.ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  hideBack?: boolean;
};

export default function FormStepLayout({
  step,
  total,
  title,
  children,
  onBack,
  onNext,
  nextLabel = 'Avançar →',
  hideBack,
}: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ProgressSteps step={step} total={total} title={title} />
      <ScreenContainer>
        {children}
        <View style={styles.footerRow}>
          {!hideBack && (
            <Button
              label="← Voltar"
              variant="outline"
              onPress={onBack}
              style={{ flex: 1, marginRight: spacing.sm }}
            />
          )}
          <Button label={nextLabel} onPress={onNext} style={{ flex: 1 }} />
        </View>
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  footerRow: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
});
