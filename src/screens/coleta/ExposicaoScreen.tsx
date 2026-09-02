import React from 'react';
import { View } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import { useCollection } from '../../context/CollectionContext';

export default function ExposicaoScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <FormStepLayout
      step={6}
      total={9}
      title="Exposição"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('Epis')}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="DIAS / MÊS" placeholder="Digite aqui" value={data.diasMes} onChangeText={(v) => update({ diasMes: v })} keyboardType="numeric" />
        <TextField half label="HORAS / DIA" placeholder="Digite aqui" value={data.horasDia} onChangeText={(v) => update({ horasDia: v })} keyboardType="numeric" />
      </View>
      <TextField label="MESES DE MAIOR USO" placeholder="Digite aqui" value={data.mesesMaiorUso} onChangeText={(v) => update({ mesesMaiorUso: v })} />
      <TextField label="DATA ÚLTIMA APLICAÇÃO" placeholder="Digite aqui" value={data.dataUltimaAplicacao} onChangeText={(v) => update({ dataUltimaAplicacao: v })} />
      <TextField label="EQUIPAMENTOS DE APLICAÇÃO" placeholder="Digite aqui" value={data.equipamentosAplicacao} onChangeText={(v) => update({ equipamentosAplicacao: v })} />
      <TextField label="VIA DE EXPOSIÇÃO" placeholder="Digite aqui" value={data.viaExposicao} onChangeText={(v) => update({ viaExposicao: v })} />
      <TextField label="QUEM APLICA" placeholder="Digite aqui" value={data.quemAplica} onChangeText={(v) => update({ quemAplica: v })} />

      <ToggleGroup
        label="HIGIENIZA APÓS O USO?"
        value={data.higienizaAposUso}
        onChange={(v) => update({ higienizaAposUso: v })}
      />

      <TextField
        label="INTERVALO DE REENTRADA (H)"
        placeholder="Digite aqui"
        value={data.intervaloReentrada}
        onChangeText={(v) => update({ intervaloReentrada: v })}
        keyboardType="numeric"
      />
    </FormStepLayout>
  );
}
