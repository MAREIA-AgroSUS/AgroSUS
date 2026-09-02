import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import { Pill } from '../../components/StatusBadge';
import { colors, spacing, typography } from '../../theme';

const ITEMS = [
  { label: '1. Identificação', status: 'completo' },
  { label: '2. Propriedade', status: 'completo' },
  { label: '3. Capacitação', status: 'completo' },
  { label: '4. Defensivos', status: 'completo' },
  { label: '5. Rastreabilidade', status: 'incompleto' },
  { label: '6. Exposição', status: 'completo' },
  { label: '7. EPIs', status: 'completo' },
  { label: '8. Armazenamento', status: 'completo' },
  { label: '9. Exp. familiar/ambiental', status: 'completo' },
  { label: 'Saúde e sintomas', status: 'completo' },
  { label: 'Histórico / Boas práticas', status: 'completo' },
];

export default function ResumoScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <Text style={[typography.h1, { marginBottom: spacing.lg }]}>Revisão da coleta</Text>

        {ITEMS.map((item) => (
          <View key={item.label} style={styles.row}>
            <Text style={typography.bodyBold}>{item.label}</Text>
            <Pill
              text={item.status}
              tone={item.status === 'completo' ? 'success' : 'neutral'}
            />
          </View>
        ))}

        <View style={{ marginTop: spacing.xl }}>
          <Button label="Avançar →" onPress={() => navigation.navigate('ResultadoAutomatico')} />
        </View>
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
});
