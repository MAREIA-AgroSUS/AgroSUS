import React from 'react';
import { Text } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import { KeyValueRow } from '../../components/Card';
import { Pill } from '../../components/StatusBadge';
import { View } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export default function DadosAutomaticosScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <Text style={[typography.h2, { marginBottom: 4 }]}>Dados coletados automaticamente</Text>
        <Text style={[typography.caption, { marginBottom: spacing.md }]}>
          Preenchidos pelo dispositivo — não editáveis pelo ACS.
        </Text>

        <KeyValueRow label="Geolocalização" value="-23.55, -46.18" />
        <KeyValueRow label="Precisão GPS" value="±5 m" />
        <KeyValueRow label="Data / hora" value="30/06/26 09:14" />
        <KeyValueRow label="ID do dispositivo" value="TAB-ACS-04" />

        <Text style={[typography.label, { marginTop: spacing.md, marginBottom: spacing.xs }]}>
          LEITURAS IOT (QUANDO DISPONÍVEIS)
        </Text>
        <KeyValueRow label="Sensor de deriva" value="—" />
        <KeyValueRow label="Temperatura / umidade" value="26°C · 64%" />

        <Text style={[typography.label, { marginTop: spacing.md, marginBottom: spacing.xs }]}>
          CALCULADOS PELO SISTEMA
        </Text>
        <KeyValueRow label="Score de exposição" value="72 / 100" valueColor={colors.riskHigh} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.inputBackground, borderWidth: 1, borderColor: colors.border, borderRadius: 8, paddingHorizontal: spacing.sm, paddingVertical: 12, marginBottom: spacing.xs }}>
          <Text style={[typography.body, { color: colors.ink }]}>Classificação de risco</Text>
          <Pill text="Alto" tone="danger" />
        </View>

        <Text style={[typography.caption, { marginTop: spacing.md }]}>
          Campos automáticos exibidos para conferência; alimentam o score e o painel da UBS.
        </Text>
      </ScreenContainer>
    </View>
  );
}
