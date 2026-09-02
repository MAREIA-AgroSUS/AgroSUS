import React from 'react';
import { Text } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import { useCollection } from '../../context/CollectionContext';
import { typography, spacing } from '../../theme';

export default function ObservacoesAcsScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <FormStepLayout
      step={9}
      total={9}
      title="Observações do ACS"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('Resumo')}
    >
      <Text style={[typography.h2, { marginBottom: spacing.sm }]}>Observações do ACS</Text>
      <Text style={[typography.body, { marginBottom: spacing.md }]}>
        Anotações livres sobre a visita, contexto da família, condições observadas e orientações dadas.
      </Text>
      <TextField
        label="TEXTO LIVRE"
        placeholder="Digite aqui"
        multiline
        value={data.observacoesAcs}
        onChangeText={(v) => update({ observacoesAcs: v })}
        style={{ height: 220 }}
      />
    </FormStepLayout>
  );
}
