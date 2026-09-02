import React from 'react';
import { View } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import { useCollection } from '../../context/CollectionContext';

export default function IdentificacaoScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <FormStepLayout
      step={1}
      total={9}
      title="Identificação"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('Propriedade')}
    >
      <TextField label="NOME" placeholder="Digite aqui" value={data.nome} onChangeText={(v) => update({ nome: v })} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="CSN" placeholder="Digite aqui" value={data.csn} onChangeText={(v) => update({ csn: v })} />
        <TextField half label="CPF" placeholder="Digite aqui" value={data.cpf} onChangeText={(v) => update({ cpf: v })} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="NASCIMENTO" placeholder="__/__/____" value={data.nascimento} onChangeText={(v) => update({ nascimento: v })} />
        <TextField half label="SEXO" placeholder="Digite aqui" value={data.sexo} onChangeText={(v) => update({ sexo: v })} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="RAÇA/COR" placeholder="Digite aqui" value={data.racaCor} onChangeText={(v) => update({ racaCor: v })} />
        <TextField half label="ESCOLARIDADE" placeholder="Digite aqui" value={data.escolaridade} onChangeText={(v) => update({ escolaridade: v })} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="TELEFONE" placeholder="Digite aqui" value={data.telefone} onChangeText={(v) => update({ telefone: v })} keyboardType="phone-pad" />
        <TextField half label="OCUPAÇÃO" placeholder="Digite aqui" value={data.ocupacao} onChangeText={(v) => update({ ocupacao: v })} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="TEMPO ATIV. RURAL" placeholder="Digite aqui" value={data.tempoAtivRural} onChangeText={(v) => update({ tempoAtivRural: v })} />
        <TextField half label="TEMPO C/ DEFENSIVOS" placeholder="Digite aqui" value={data.tempoComDefensivos} onChangeText={(v) => update({ tempoComDefensivos: v })} />
      </View>
    </FormStepLayout>
  );
}
