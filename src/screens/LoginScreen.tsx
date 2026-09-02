import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';
import Logo from '../components/Logo';
import TextField from '../components/TextField';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import { colors, spacing, typography } from '../theme';

export default function LoginScreen({ navigation }: any) {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AppHeader onMenuPress={() => {}} />
      <ScreenContainer>
        <View style={styles.logoWrap}>
          <Logo size="lg" />
          <Text style={styles.subtitle}>AgroSUS · Acesso do Agente</Text>
        </View>

        <TextField
          label="CPF ou MATRÍCULA"
          placeholder="000.000.000-00"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />
        <TextField
          label="SENHA"
          placeholder="********"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <View style={{ marginTop: spacing.xs }}>
          <Button label="Entrar" onPress={() => navigation.replace('MainTabs')} />
        </View>

        <Text style={styles.forgot}>Esqueci minha senha</Text>

        <View style={styles.offlineRow}>
          <Ionicons name="lock-closed-outline" size={16} color={colors.textMuted} />
          <Text style={styles.offlineText}>Funciona offline após o primeiro acesso</Text>
        </View>
      </ScreenContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logoWrap: {
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
  },
  subtitle: {
    ...typography.body,
    color: colors.ink,
    marginTop: spacing.sm,
  },
  forgot: {
    ...typography.bodyBold,
    color: colors.ink,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  offlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xxxl,
  },
  offlineText: {
    ...typography.caption,
    marginLeft: 6,
  },
});
