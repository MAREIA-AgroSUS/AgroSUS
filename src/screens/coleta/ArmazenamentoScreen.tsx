import React from 'react';
import { Text } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import Checkbox from '../../components/Checkbox';
import { useCollection } from '../../context/CollectionContext';
import { condicoesDepositoList } from '../../data/mockData';
import { spacing, typography } from '../../theme';

export default function ArmazenamentoScreen({ navigation }: any) {
  const { data, update } = useCollection();

  const toggleCondicao = (c: string) => {
    const has = data.condicoesDeposito.includes(c);
    update({
      condicoesDeposito: has
        ? data.condicoesDeposito.filter((x) => x !== c)
        : [...data.condicoesDeposito, c],
    });
  };

  return (
    <FormStepLayout
      step={8}
      total={9}
      title="Armazenamento"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('ExposicaoFamiliar')}
    >
      <TextField
        label="LOCAL DE ARMAZENAMENTO DOS PRODUTOS"
        placeholder="Digite aqui"
        value={data.localArmazenamento}
        onChangeText={(v) => update({ localArmazenamento: v })}
      />

      <Text style={[typography.label, { marginBottom: spacing.sm }]}>CONDIÇÕES DO DEPÓSITO (SIM / NÃO)</Text>
      {condicoesDepositoList.map((c) => (
        <Checkbox
          key={c}
          label={c}
          checked={data.condicoesDeposito.includes(c)}
          onToggle={() => toggleCondicao(c)}
        />
      ))}

      <ToggleGroup
        label="Faz tríplice lavagem?"
        value={data.fazTriplicelavagem}
        onChange={(v) => update({ fazTriplicelavagem: v })}
      />
      <ToggleGroup
        label="Devolve as embalagens?"
        value={data.devolveEmbalagens}
        onChange={(v) => update({ devolveEmbalagens: v })}
      />
    </FormStepLayout>
  );
}
