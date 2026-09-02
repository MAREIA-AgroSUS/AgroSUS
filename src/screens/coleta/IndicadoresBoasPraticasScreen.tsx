import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import { useCollection } from '../../context/CollectionContext';
import { boasPraticasList } from '../../data/mockData';
import { colors, radius, spacing, typography } from '../../theme';

const OPCOES = ['sim', 'nao', 'na'];
const LABELS: Record<string, string> = { sim: 'S', nao: 'N', na: 'NA' };

export default function IndicadoresBoasPraticasScreen({ navigation }: any) {
  const { data, update } = useCollection();

  const setValor = (item: string, valor: string) => {
    update({ boasPraticas: { ...data.boasPraticas, [item]: valor } });
  };

  const percentual = useMemo(() => {
    const respondidos = boasPraticasList.filter((i) => data.boasPraticas[i] && data.boasPraticas[i] !== 'na');
    const positivos = respondidos.filter((i) => data.boasPraticas[i] === 'sim');
    if (respondidos.length === 0) return 0;
    return Math.round((positivos.length / respondidos.length) * 100);
  }, [data.boasPraticas]);

  return (
    <FormStepLayout
      step={9}
      total={9}
      title="Boas práticas"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('ObservacoesAcs')}
    >
      <Text style={[typography.h2, { marginBottom: spacing.sm }]}>Boas práticas agrícolas</Text>

      <View style={styles.progressCard}>
        <View style={styles.progressHead}>
          <Text style={typography.body}>% atendido</Text>
          <Text style={typography.bodyBold}>{percentual}%</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${percentual}%` }]} />
        </View>
      </View>

      <Text style={[typography.label, { marginBottom: spacing.sm }]}>CHECK LIST (SIM / NÃO / N.A)</Text>
      {boasPraticasList.map((item, idx) => (
        <View key={item} style={styles.row}>
          <Text style={[typography.bodyBold, { flex: 1 }]}>{idx + 1}. {item}</Text>
          <View style={styles.toggleRow}>
            {OPCOES.map((op, i) => {
              const active = data.boasPraticas[item] === op;
              return (
                <TouchableOpacity
                  key={op}
                  onPress={() => setValor(item, op)}
                  style={[
                    styles.toggleBtn,
                    i === 0 && { borderTopLeftRadius: radius.sm, borderBottomLeftRadius: radius.sm, borderLeftWidth: 1 },
                    i === OPCOES.length - 1 && { borderTopRightRadius: radius.sm, borderBottomRightRadius: radius.sm },
                    active && styles.toggleActive,
                  ]}
                >
                  <Text style={[typography.captionBold, { color: active ? colors.white : colors.ink }]}>
                    {LABELS[op]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}
    </FormStepLayout>
  );
}

const styles = StyleSheet.create({
  progressCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  progressHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.divider,
    overflow: 'hidden',
  },
  progressFill: {
    height: 8,
    backgroundColor: colors.warning,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  toggleRow: {
    flexDirection: 'row',
  },
  toggleBtn: {
    width: 32,
    height: 30,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    borderLeftWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
});
