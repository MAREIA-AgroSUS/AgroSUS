import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';
import ScreenContainer from '../components/ScreenContainer';
import { colors, radius, spacing, typography } from '../theme';

const items: { icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { icon: 'person-outline', label: 'Meus dados' },
  { icon: 'sync-outline', label: 'Sincronização' },
  { icon: 'cloud-offline-outline', label: 'Dados offline' },
  { icon: 'settings-outline', label: 'Configurações' },
  { icon: 'help-circle-outline', label: 'Ajuda e suporte' },
  { icon: 'log-out-outline', label: 'Sair' },
];

export default function PerfilScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <View style={styles.profileHead}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={32} color={colors.white} />
          </View>
          <Text style={typography.h2}>Maria S.</Text>
          <Text style={typography.caption}>ACS · UBS Jundiapeba</Text>
        </View>

        {items.map((it, idx) => (
          <TouchableOpacity
            key={it.label}
            style={styles.row}
            onPress={() => it.label === 'Sair' && navigation.getParent()?.replace('Login')}
          >
            <Ionicons name={it.icon} size={20} color={colors.ink} />
            <Text style={[typography.body, { color: colors.ink, marginLeft: spacing.sm, flex: 1 }]}>
              {it.label}
            </Text>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        ))}
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHead: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
});
