import React from 'react';
import { View } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import { useCollection } from '../../context/CollectionContext';
import { rastreabilidadeItems } from '../../data/mockData';
import { spacing, typography } from '../../theme';
import { Text } from 'react-native';

export default function RastreabilidadeScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <FormStepLayout
      step={5}
      total={9}
      title="Rastreabilidade"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('Exposicao')}
    >
      <Text style={[typography.label, { marginBottom: spacing.sm }]}>REGISTRA OS SEGUINTES DADOS?</Text>
      {rastreabilidadeItems.map((item) => (
        <View key={item.key} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.sm }}>
          <Text style={[typography.body, { color: '#132029', flex: 1 }]}>{item.label}</Text>
          <View style={{ width: 120 }}>
            <ToggleGroup
              compact
              value={(data as any)[item.key]}
              onChange={(v) => update({ [item.key]: v } as any)}
            />
          </View>
        </View>
      ))}

      <TextField
        label="ONDE OS REGISTROS SÃO GUARDADOS?"
        placeholder="Digite aqui"
        value={data.ondeGuardaRegistros}
        onChangeText={(v) => update({ ondeGuardaRegistros: v })}
      />
      <TextField
        label="POR QUANTO TEMPO?"
        placeholder="Digite aqui"
        value={data.porQuantoTempoGuarda}
        onChangeText={(v) => update({ porQuantoTempoGuarda: v })}
      />
    </FormStepLayout>
  );
}
