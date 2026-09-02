import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import { colors, spacing, typography } from '../../theme';
import { useCollection } from '../../context/CollectionContext';

export default function ConfirmacaoEnvioScreen({ navigation }: any) {
  const { data, reset } = useCollection();

  const voltar = () => {
    reset();
    navigation.getParent()?.navigate('Agenda');
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <View style={styles.center}>
          <View style={styles.circle}>
            <Ionicons name="checkmark" size={40} color={colors.success} />
          </View>
          <Text style={[typography.h1, { marginTop: spacing.lg }]}>Coleta registrada</Text>
          <Text style={[typography.body, { textAlign: 'center', marginTop: spacing.sm }]}>
            Os dados de {data.nome || 'A. Souza'} (AGS-0207) foram salvos localmente.
          </Text>

          <View style={styles.pendingRow}>
            <View style={styles.dot} />
            <Text style={typography.bodyBold}>Pendente de sincronização</Text>
          </View>

          <Text style={[typography.caption, { fontStyle: 'italic', marginTop: spacing.sm, textAlign: 'center' }]}>
            Online · Offline · Pendente — envia ao reconectar
          </Text>

          <View style={{ marginTop: spacing.xxl, alignSelf: 'stretch' }}>
            <Button label="Voltar à lista" onPress={voltar} />
          </View>
        </View>
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    marginTop: spacing.xxxl,
  },
  circle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pendingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.warning,
    marginRight: 8,
  },
});
