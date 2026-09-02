import React from 'react';
import { View } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import { useCollection } from '../../context/CollectionContext';

export default function PropriedadeScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <FormStepLayout
      step={2}
      total={9}
      title="Propriedade"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('Capacitacao')}
    >
      <TextField
        label="POSSE DA TERRA"
        placeholder="Proprietário/arrendatário"
        value={data.posseDaTerra}
        onChangeText={(v) => update({ posseDaTerra: v })}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="ÁREA TOTAL (HA)" placeholder="Digite aqui" value={data.areaTotal} onChangeText={(v) => update({ areaTotal: v })} keyboardType="numeric" />
        <TextField half label="ÁREA PRODUÇÃO (HA)" placeholder="Digite aqui" value={data.areaProducao} onChangeText={(v) => update({ areaProducao: v })} keyboardType="numeric" />
      </View>

      <ToggleGroup
        label="TIPO DE PRODUÇÃO"
        options={[
          { label: 'Convencional', value: 'convencional' },
          { label: 'Orgânica', value: 'organica' },
          { label: 'Mista', value: 'mista' },
        ]}
        value={data.tipoProducao}
        onChange={(v) => update({ tipoProducao: v })}
      />

      <TextField label="CULTURAS" placeholder="Digite aqui" value={data.culturas} onChangeText={(v) => update({ culturas: v })} />
      <TextField label="FONTE DE ÁGUA" placeholder="Digite aqui" value={data.fonteAgua} onChangeText={(v) => update({ fonteAgua: v })} />

      <ToggleGroup
        label="ASSISTÊNCIA TÉCNICA"
        value={data.assistenciaTecnica}
        onChange={(v) => update({ assistenciaTecnica: v })}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField half label="INSTITUIÇÃO" placeholder="Digite aqui" value={data.instituicao} onChangeText={(v) => update({ instituicao: v })} />
        <TextField half label="RESP. TÉCNICO" placeholder="Digite aqui" value={data.respTecnico} onChangeText={(v) => update({ respTecnico: v })} />
      </View>
    </FormStepLayout>
  );
}
