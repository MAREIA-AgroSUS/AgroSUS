import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import { useCollection } from '../../context/CollectionContext';
import { equipamentosEpi } from '../../data/mockData';
import { colors, radius, spacing, typography } from '../../theme';

const OPCOES = [
  { key: 'sempre', label: 'Sempre' },
  { key: 'as_vezes', label: 'Às vezes' },
  { key: 'nunca', label: 'Nunca' },
  { key: 'nao_tem', label: 'Não tem' },
];

export default function EpisScreen({ navigation }: any) {
  const { data, update } = useCollection();

  const setUso = (equip: string, value: string) => {
    update({ episUso: { ...data.episUso, [equip]: value } });
  };

  return (
    <FormStepLayout
      step={7}
      total={9}
      title="EPIs"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('Armazenamento')}
    >
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerCell, { flex: 1.4, textAlign: 'left', paddingLeft: 8 }]}>Equipamento</Text>
          {OPCOES.map((o) => (
            <Text key={o.key} style={styles.headerCell}>{o.label}</Text>
          ))}
        </View>
        {equipamentosEpi.map((equip) => (
          <View key={equip} style={styles.row}>
            <Text style={[typography.body, { flex: 1.4, color: colors.ink, paddingLeft: 8 }]}>{equip}</Text>
            {OPCOES.map((o) => (
              <TouchableOpacity
                key={o.key}
                style={styles.cell}
                onPress={() => setUso(equip, o.key)}
              >
                <View style={[styles.dot, data.episUso[equip] === o.key && styles.dotActive]} />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <ToggleGroup
        label="Conserva em bom estado?"
        value={data.episConservaBomEstado}
        onChange={(v) => update({ episConservaBomEstado: v })}
      />
      <ToggleGroup
        label="Lava separado da roupa da família?"
        value={data.episLavaSeparado}
        onChange={(v) => update({ episLavaSeparado: v })}
      />

      <TextField
        label="LOCAL DE GUARDA DOS EPIS"
        placeholder="Digite aqui"
        value={data.localGuardaEpis}
        onChangeText={(v) => update({ localGuardaEpis: v })}
      />
    </FormStepLayout>
  );
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    overflow: 'hidden',
    marginBottom: spacing.md,
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
