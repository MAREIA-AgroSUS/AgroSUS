import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, sizing } from '../theme';
import Logo from './Logo';

export default function AppHeader({ onMenuPress }: { onMenuPress?: () => void }) {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Logo size="sm" />
      <TouchableOpacity
        hitSlop={12}
        onPress={onMenuPress ?? (() => navigation.navigate('Perfil'))}
        accessibilityLabel="Abrir menu"
      >
        <Ionicons name="menu" size={sizing.iconLg} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: sizing.headerHeight,
    paddingHorizontal: sizing.screenPaddingH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.headerBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
});
