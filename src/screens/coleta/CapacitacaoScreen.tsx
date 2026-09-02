import React from 'react';
import { View, Text } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import Checkbox from '../../components/Checkbox';
import { useCollection } from '../../context/CollectionContext';
import { temasCapacitacao } from '../../data/mockData';
import { typography, spacing } from '../../theme';

export default function CapacitacaoScreen({ navigation }: any) {
  const { data, update } = useCollection();

  const toggleTema = (tema: string) => {
    const has = data.temasAbordados.includes(tema);
    update({
      temasAbordados: has
        ? data.temasAbordados.filter((t) => t !== tema)
        : [...data.temasAbordados, tema],
    });
  };

  return (
    <FormStepLayout
      step={3}
      total={9}
      title="Capacitação"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('Defensivos')}
    >
      <ToggleGroup
        label="RECEBEU CAPACITAÇÃO SOBRE USO DE DEFENSIVOS?"
        value={data.recebeuCapacitacao}
        onChange={(v) => update({ recebeuCapacitacao: v })}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="DATA" placeholder="Digite aqui" value={data.dataCapacitacao} onChangeText={(v) => update({ dataCapacitacao: v })} />
        <TextField half label="INSTITUIÇÃO" placeholder="Digite aqui" value={data.instituicaoCapacitacao} onChangeText={(v) => update({ instituicaoCapacitacao: v })} />
      </View>

      <Text style={[typography.label, { marginBottom: spacing.sm }]}>TEMAS ABORDADOS</Text>
      {temasCapacitacao.map((tema) => (
        <Checkbox
          key={tema}
          label={tema}
          checked={data.temasAbordados.includes(tema)}
          onToggle={() => toggleTema(tema)}
        />
      ))}
    </FormStepLayout>
  );
}
