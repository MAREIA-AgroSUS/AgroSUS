import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';
import ScreenContainer from '../components/ScreenContainer';
import StatusBadge from '../components/StatusBadge';
import { colors, radius, spacing, typography } from '../theme';
import { produtores } from '../data/mockData';

const alertas = [
  { id: 'a1', titulo: 'Sintomas pós-aplicação', produtor: 'João da Silva · AGS-0207', risco: 'alto' as const, quando: 'Hoje, 09:20' },
  { id: 'a2', titulo: 'EPI incompleto identificado', produtor: 'Roberto Lima · AGS-0193', risco: 'moderado' as const, quando: 'Ontem, 16:40' },
  { id: 'a3', titulo: 'Bloco de coleta incompleto', produtor: 'Marta Dias · AGS-0158', risco: 'baixo' as const, quando: '28/06, 11:05' },
];

export default function AlertasScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <Text style={[typography.h2, { marginBottom: spacing.md }]}>Alertas</Text>
        {alertas.map((a) => (
          <View key={a.id} style={styles.card}>
            <View style={styles.iconWrap}>
              <Ionicons name="warning-outline" size={20} color={colors.riskHigh} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={typography.bodyBold}>{a.titulo}</Text>
              <Text style={typography.caption}>{a.produtor}</Text>
              <Text style={[typography.caption, { marginTop: 2 }]}>{a.quando}</Text>
            </View>
            <StatusBadge risk={a.risco} size="sm" />
          </View>
        ))}
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: radius.md,
    padding: spacing.sm,
    marginBottom: spacing.sm,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.riskHighBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
});
