import React from 'react';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import AlertBanner from '../../components/AlertBanner';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useCollection } from '../../context/CollectionContext';
import { colors } from '../../theme';
import { View } from 'react-native';

export default function EncaminhamentoUbsScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <AlertBanner text="Encaminhamento necessário" tone="danger" />

        <TextField label="PARTICIPANTE" placeholder="Digite aqui" value={data.nome || 'A. Souza'} onChangeText={(v) => update({ nome: v })} />
        <TextField label="RISCO DETECTADO" placeholder="Digite aqui" value={data.riscoDetectado} onChangeText={(v) => update({ riscoDetectado: v })} />
        <TextField label="MOTIVO" placeholder="Digite aqui" multiline value={data.motivoEncaminhamento} onChangeText={(v) => update({ motivoEncaminhamento: v })} />
        <TextField label="UBS DE REFERÊNCIA" placeholder="Digite aqui" value={data.ubsReferencia} onChangeText={(v) => update({ ubsReferencia: v })} />
        <TextField label="DATA" placeholder="Digite aqui" value={data.dataColeta} onChangeText={(v) => update({ dataColeta: v })} />

        <Button label="Enviar" onPress={() => navigation.navigate('Encerramento')} />
      </ScreenContainer>
    </View>
  );
}
