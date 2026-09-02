import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AppHeader from '../components/AppHeader';
import ScreenContainer from '../components/ScreenContainer';
import TextField from '../components/TextField';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { colors, spacing, typography } from '../theme';
import { produtores } from '../data/mockData';

export default function ProdutoresScreen({ navigation }: any) {
  const [busca, setBusca] = useState('');
  const filtered = produtores.filter((p) =>
    p.id.toLowerCase().includes(busca.toLowerCase()) ||
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer scroll={false} noPadding>
        <View style={{ paddingHorizontal: spacing.lg, paddingTop: spacing.md }}>
          <View style={styles.headRow}>
            <Text style={typography.h2}>Olá, Maria S.</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={typography.caption}>UBS Jundiapeba</Text>
              <Text style={typography.caption}>30/06/26</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <TextField
            placeholder="Busca por ID"
            value={busca}
            onChangeText={setBusca}
          />
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: spacing.lg, paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.row}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Coleta', { screen: 'TipoColeta' })}
            >
              <View>
                <Text style={typography.bodyBold}>{item.nome}</Text>
                <Text style={typography.caption}>{item.ultimaColeta}</Text>
              </View>
              <StatusBadge risk={item.risco} />
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <View style={{ marginTop: spacing.md }}>
              <Button
                label="+ Novo Cadastro"
                variant="outline"
                onPress={() => navigation.navigate('Coleta', { screen: 'TipoColeta' })}
              />
            </View>
          }
        />
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  headRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
});
