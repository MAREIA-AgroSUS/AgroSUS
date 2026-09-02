import React from 'react';
import { View, Text } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useCollection } from '../../context/CollectionContext';
import { colors, spacing, typography } from '../../theme';

export default function EncerramentoScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <Text style={[typography.h1, { marginBottom: spacing.sm }]}>Consentimento e assinaturas</Text>
        <Text style={[typography.body, { marginBottom: spacing.md }]}>
          Declaro ter sido informado(a) sobre os objetivos da coleta e concordo com o registro dos
          dados, conforme TCLE apresentado em separado.
        </Text>

        <TextField
          label="ASSINATURA DO PARTICIPANTE"
          placeholder="Digite aqui"
          value={data.assinaturaParticipante}
          onChangeText={(v) => update({ assinaturaParticipante: v })}
          style={{ height: 72 }}
        />
        <TextField
          label="ASSINATURA DO ACS"
          placeholder="Digite aqui"
          value={data.assinaturaAcs}
          onChangeText={(v) => update({ assinaturaAcs: v })}
          style={{ height: 72 }}
        />
        <TextField
          label="DATA"
          placeholder="Digite aqui"
          value={data.dataAssinatura}
          onChangeText={(v) => update({ dataAssinatura: v })}
        />

        <Button label="Concluir coleta" onPress={() => navigation.navigate('ConfirmacaoEnvio')} />
      </ScreenContainer>
    </View>
  );
}
