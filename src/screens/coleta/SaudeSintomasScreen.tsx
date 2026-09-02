import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import AlertBanner from '../../components/AlertBanner';
import { useCollection } from '../../context/CollectionContext';
import { sintomasList } from '../../data/mockData';
import { colors, radius, spacing, typography } from '../../theme';

export default function SaudeSintomasScreen({ navigation }: any) {
  const { data, update } = useCollection();

  const setSintoma = (s: string, field: 'sim' | 'nao' | 'posAplicacao', value: boolean) => {
    const current = data.sintomas[s] ?? { sim: false, nao: false, posAplicacao: false };
    const next = { ...current, [field]: value };
    if (field === 'sim' && value) next.nao = false;
    if (field === 'nao' && value) { next.sim = false; next.posAplicacao = false; }
    update({ sintomas: { ...data.sintomas, [s]: next } });
  };

  return (
    <FormStepLayout
      step={9}
      total={9}
      title="Saúde e sintomas"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('HistoricoIntoxicacao')}
      hideBack={false}
    >
      <AlertBanner text="Bloco crítico — sinais de intoxicação" tone="danger" />

      <TextField
        label="DOENÇAS PREEXISTENTES"
        placeholder="Digite aqui"
        value={data.doencasPreexistentes}
        onChangeText={(v) => update({ doencasPreexistentes: v })}
      />
      <TextField
        label="MEDICAMENTOS EM USO"
        placeholder="Digite aqui"
        value={data.medicamentosUso}
        onChangeText={(v) => update({ medicamentosUso: v })}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: '48%' }}>
          <ToggleGroup label="TABAGISMO" value={data.tabagismo} onChange={(v) => update({ tabagismo: v })} />
        </View>
        <View style={{ width: '48%' }}>
          <ToggleGroup label="ETILISMO" value={data.etilismo} onChange={(v) => update({ etilismo: v })} />
        </View>
      </View>

      <Text style={[typography.label, { marginBottom: spacing.xs }]}>SINTOMAS</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerCell, { flex: 1.6, textAlign: 'left', paddingLeft: 8 }]}>Sintoma</Text>
          <Text style={styles.headerCell}>Sim</Text>
          <Text style={styles.headerCell}>Não</Text>
          <Text style={styles.headerCell}>Pós-aplic</Text>
        </View>
        {sintomasList.map((s) => {
          const val = data.sintomas[s] ?? { sim: false, nao: false, posAplicacao: false };
          return (
            <View key={s} style={styles.row}>
              <Text style={[typography.body, { flex: 1.6, color: colors.ink, paddingLeft: 8 }]}>{s}</Text>
              <TouchableOpacity style={styles.cell} onPress={() => setSintoma(s, 'sim', !val.sim)}>
                <View style={[styles.dot, val.sim && styles.dotActive]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cell} onPress={() => setSintoma(s, 'nao', !val.nao)}>
                <View style={[styles.dot, val.nao && styles.dotActive]} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.cell, val.posAplicacao && { backgroundColor: colors.riskHighBg }]}
                onPress={() => setSintoma(s, 'posAplicacao', !val.posAplicacao)}
              >
                <View style={[styles.dot, val.posAplicacao && { backgroundColor: colors.riskHigh, borderColor: colors.riskHigh }]} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <Text style={[typography.caption, { marginBottom: spacing.md }]}>
        Coluna "Pós-aplic" destacada em vermelho quando marcada — indica sintoma que surgiu ou piorou após aplicação.
      </Text>
    </FormStepLayout>
  );
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
  headerCell: {
    flex: 1,
    color: colors.white,
    fontSize: 10.5,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 6,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.ink,
    borderColor: colors.ink,
  },
});
