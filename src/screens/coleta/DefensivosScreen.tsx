import React from 'react';
import { View, Text } from 'react-native';
import FormStepLayout from '../../components/FormStepLayout';
import TextField from '../../components/TextField';
import ToggleGroup from '../../components/ToggleGroup';
import Button from '../../components/Button';
import { useCollection } from '../../context/CollectionContext';
import { colors, radius, spacing, typography } from '../../theme';

export default function DefensivosScreen({ navigation }: any) {
  const { data, update } = useCollection();

  const setProdutoField = (idx: number, field: string, value: string) => {
    const novos = [...data.produtos];
    novos[idx] = { ...novos[idx], [field]: value };
    update({ produtos: novos });
  };

  const addProduto = () => {
    update({
      produtos: [
        ...data.produtos,
        { nomeComercial: '', principioAtivo: '', classeUso: '', classeTox: '', numeroRegistro: '' },
      ],
    });
  };

  return (
    <FormStepLayout
      step={4}
      total={9}
      title="Defensivos"
      onBack={() => navigation.goBack()}
      onNext={() => navigation.navigate('Rastreabilidade')}
    >
      <ToggleGroup
        label="POSSUI RECEITUÁRIO AGRONÔMICO?"
        value={data.possuiReceituario}
        onChange={(v) => update({ possuiReceituario: v })}
      />
      <TextField label="VIGÊNCIA" placeholder="Digite aqui" value={data.vigemcoa} onChangeText={(v) => update({ vigemcoa: v })} />

      <Text style={[typography.label, { marginBottom: spacing.xs }]}>PRODUTOS UTILIZADOS</Text>
      <View style={{ borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, overflow: 'hidden', marginBottom: spacing.sm }}>
        <View style={{ flexDirection: 'row', backgroundColor: colors.primary }}>
          {['Nome com.', 'Princ. ativo', 'Classe uso', 'Cl. tox.', 'Nº reg.'].map((h) => (
            <Text key={h} style={{ flex: 1, color: colors.white, fontSize: 10, fontWeight: '700', padding: 6, textAlign: 'center' }}>
              {h}
            </Text>
          ))}
        </View>
        {data.produtos.map((p, idx) => (
          <View key={idx} style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: colors.border }}>
            {(['nomeComercial', 'principioAtivo', 'classeUso', 'classeTox', 'numeroRegistro'] as const).map((field) => (
              <TextField
                key={field}
                value={(p as any)[field]}
                onChangeText={(v) => setProdutoField(idx, field, v)}
                placeholder="—"
                style={{ height: 36, fontSize: 11, textAlign: 'center', backgroundColor: colors.white, borderWidth: 0, borderRadius: 0, marginTop: 0 }}
              />
            ))}
          </View>
        ))}
      </View>

      <Button label="+ Adicionar produtos" variant="outline" onPress={addProduto} style={{ marginBottom: spacing.md }} />
    </FormStepLayout>
  );
}
