import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppHeader from '../../components/AppHeader';
import ScreenContainer from '../../components/ScreenContainer';
import RadioCard from '../../components/RadioCard';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useCollection } from '../../context/CollectionContext';
import { colors, spacing, typography } from '../../theme';

const TIPOS = [
  { value: 'cadastro_inicial', label: 'Cadastro Inicial' },
  { value: 'acompanhamento', label: 'Acompanhamento' },
  { value: 'retorno_encaminhamento', label: 'Retorno de encaminhamento' },
];

export default function TipoColetaScreen({ navigation }: any) {
  const { data, update } = useCollection();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <View style={styles.headRow}>
          <Text style={typography.bodyBold}>Nova coleta</Text>
          <Text style={typography.caption}>AGS-0207</Text>
        </View>

        {TIPOS.map((t) => (
          <RadioCard
            key={t.value}
            label={t.label}
            selected={data.tipoColeta === t.value}
            onPress={() => update({ tipoColeta: t.value })}
          />
        ))}

        <Text style={[typography.label, { marginTop: spacing.md, marginBottom: spacing.xs }]}>
          PREENCHIMENTO AUTOMÁTICO
        </Text>
        <TextField label="UBS" value={data.ubs} onChangeText={(v) => update({ ubs: v })} placeholder="Digite aqui" />
        <TextField
          label="ACS RESPONSÁVEL"
          value={data.acsResponsavel}
          onChangeText={(v) => update({ acsResponsavel: v })}
          placeholder="Digite aqui"
        />
        <TextField
          label="DATA"
          value={data.dataColeta}
          onChangeText={(v) => update({ dataColeta: v })}
          placeholder="Digite aqui"
        />

        <Button label="Avançar →" onPress={() => navigation.navigate('Identificacao')} />
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  headRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    paddingBottom: spacing.sm,
  },
});
