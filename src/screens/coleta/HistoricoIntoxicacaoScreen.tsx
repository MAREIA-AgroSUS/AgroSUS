import React from 'react';
import { View } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import { useCollection } from '../../context/CollectionContext';

export default function HistoricoIntoxicacaoScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <FormStepLayout
      step={9}
      total={9}
      title="Histórico / vigilância"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('IndicadoresBoasPraticas')}
    >
      <ToggleGroup
        label="JÁ TEVE EPISÓDIO DE INTOXICAÇÃO POR AGROTÓXICO?"
        value={data.jaTeveIntoxicacao}
        onChange={(v) => update({ jaTeveIntoxicacao: v })}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="DATA DO EPISÓDIO" placeholder="Digite aqui" value={data.dataIntoxicacao} onChangeText={(v) => update({ dataIntoxicacao: v })} />
        <TextField half label="LOCAL DE ATENDIMENTO" placeholder="Digite aqui" value={data.localAtendimento} onChangeText={(v) => update({ localAtendimento: v })} />
      </View>

      <ToggleGroup
        label="HOUVE NOTIFICAÇÃO NO SINAN?"
        value={data.notificacaoSinan}
        onChange={(v) => update({ notificacaoSinan: v })}
      />
      <ToggleGroup
        label="ESTÁ SOB VIGILÂNCIA EPIDEMIOLÓGICA ATIVA?"
        value={data.sobVigilancia}
        onChange={(v) => update({ sobVigilancia: v })}
      />
    </FormStepLayout>
  );
}
