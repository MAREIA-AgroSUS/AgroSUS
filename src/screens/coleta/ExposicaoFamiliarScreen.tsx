import React from 'react';
import { View, Text } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import { useCollection } from '../../context/CollectionContext';
import { spacing, typography, colors } from '../../theme';

const PERGUNTAS = [
  { key: 'familiaresAjudam', label: 'Familiares ajudam na aplicação' },
  { key: 'criancasCirculam', label: 'Crianças circulam na área tratada' },
  { key: 'fontesAguaProximas', label: 'Fontes de água próximas à lavoura' },
  { key: 'moradiasProximas', label: 'Moradias vizinhas próximas' },
  { key: 'riscoDeriva', label: 'Risco de deriva (vento/pulverização)' },
];

export default function ExposicaoFamiliarScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <FormStepLayout
      step={9}
      total={9}
      title="Exp. familiar/ambiental"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('SaudeSintomas')}
      nextLabel="Avançar →"
    >
      {PERGUNTAS.map((p) => (
        <View key={p.key} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.sm }}>
          <Text style={[typography.body, { color: colors.ink, flex: 1 }]}>{p.label}</Text>
          <View style={{ width: 100 }}>
            <ToggleGroup compact value={(data as any)[p.key]} onChange={(v) => update({ [p.key]: v } as any)} />
          </View>
        </View>
      ))}

      <TextField
        label="OBSERVAÇÕES AMBIENTAIS"
        placeholder="Digite aqui"
        multiline
        value={data.observacoesAmbientais}
        onChangeText={(v) => update({ observacoesAmbientais: v })}
      />
    </FormStepLayout>
  );
}
