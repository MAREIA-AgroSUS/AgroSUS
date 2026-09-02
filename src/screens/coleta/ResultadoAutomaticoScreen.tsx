import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import { Pill } from '../../components/StatusBadge';
import { colors, radius, spacing, typography } from '../../theme';
import { useCollection } from '../../context/CollectionContext';

const SCORE = 72;
const NIVEL: 'baixo' | 'moderado' | 'alto' = 'alto';

export default function ResultadoAutomaticoScreen({ navigation }: any) {
  const { update } = useCollection();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <Text style={[typography.h1, { marginBottom: spacing.lg }]}>Resultado da avaliação</Text>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={typography.body}>Score de exposição</Text>
            <Text style={typography.bodyBold}>{SCORE} / 100</Text>
          </View>
          <View style={styles.track}>
            <View style={[styles.fill, { width: `${SCORE}%` }]} />
          </View>

          <View style={{ alignItems: 'center', marginVertical: spacing.md }}>
            <View style={styles.riskPill}>
              <Text style={styles.riskPillText}>RISCO ALTO</Text>
            </View>
          </View>

          <Text style={[typography.body, { marginBottom: 6 }]}>Probabilidade de intoxicação</Text>
          <View style={styles.segmentedRow}>
            {(['baixo', 'moderado', 'alto'] as const).map((nivel) => (
              <View
                key={nivel}
                style={[
                  styles.segment,
                  nivel === NIVEL && styles.segmentActive,
                ]}
              >
                <Text style={[typography.captionBold, nivel === NIVEL && { color: colors.white }]}>
                  {nivel[0].toUpperCase() + nivel.slice(1)}
                </Text>
              </View>
            ))}
          </View>

          <InfoRow label="Necessita encaminhamento" value="Sim — UBS" danger />
          <InfoRow label="Conduta sugerida" value="Avaliação clínica + orientação EPI" />
          <InfoRow label="Pendências" value="1 bloco incompleto" />
          <InfoRow label="Próxima visita recomendada" value="em 90 dias" />
        </View>

        <View style={{ marginTop: spacing.xl }}>
          <Button
            label="Gerar encaminhamento"
            onPress={() => {
              update({ riscoDetectado: 'Score de exposição 72/100 — Risco alto' });
              navigation.navigate('EncaminhamentoUbs');
            }}
          />
        </View>
      </ScreenContainer>
    </View>
  );
}

function InfoRow({ label, value, danger }: { label: string; value: string; danger?: boolean }) {
  return (
    <View style={[styles.rowBetween, { paddingVertical: 10, borderTopWidth: 1, borderTopColor: colors.divider }]}>
      <Text style={typography.caption}>{label}</Text>
      <Text style={[typography.bodyBold, danger && { color: colors.riskHigh }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.divider,
    overflow: 'hidden',
    marginTop: spacing.sm,
  },
  fill: {
    height: 10,
    backgroundColor: colors.riskHigh,
    borderRadius: 5,
  },
  riskPill: {
    backgroundColor: colors.riskHigh,
    paddingHorizontal: spacing.lg,
    paddingVertical: 8,
    borderRadius: radius.pill,
  },
  riskPillText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.3,
  },
  segmentedRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  segment: {
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  segmentActive: {
    backgroundColor: colors.riskHigh,
  },
});
