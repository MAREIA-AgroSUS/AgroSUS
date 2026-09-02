import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import { colors, radius, spacing, typography } from '../theme';
import { dashboardStats, produtores } from '../data/mockData';

export default function DashboardScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader />
      <ScreenContainer>
        <View style={styles.headRow}>
          <Text style={typography.h2}>Olá, Maria S.</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={typography.caption}>UBS Jundiapeba</Text>
            <Text style={typography.caption}>30/06/26</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.statsGrid}>
          <StatCard value={dashboardStats.visitasHoje} label="VISITAS HOJE" />
          <StatCard value={dashboardStats.pendentes} label="PENDENTES" />
          <StatCard value={dashboardStats.produtores} label="PRODUTORES" />
          <StatCard value={dashboardStats.alertasAbertos} label="ALERTAS ABERTOS" danger />
        </View>

        <Text style={[typography.label, { marginBottom: spacing.sm }]}>AGENDA DE HOJE</Text>
        {produtores.slice(0, 3).map((p, idx) => (
          <TouchableOpacity
            key={p.id}
            style={[styles.agendaRow, idx === 2 && { borderBottomWidth: 0 }]}
            onPress={() => navigation.navigate('Coleta', { screen: 'TipoColeta' })}
            activeOpacity={0.7}
          >
            <View>
              <Text style={typography.bodyBold}>
                {p.nome.split(' ')[0][0]}. {p.nome.split(' ').slice(-1)[0]} · {p.id}
              </Text>
              <Text style={typography.caption}>
                {p.horario} · {p.localidade}
              </Text>
            </View>
            <StatusBadge risk={p.risco} />
          </TouchableOpacity>
        ))}

        <View style={{ marginTop: spacing.lg }}>
          <Button
            label="Iniciar visita"
            iconLeft="play"
            onPress={() => navigation.navigate('Coleta', { screen: 'TipoColeta' })}
          />
        </View>
        <View style={styles.rowButtons}>
          <Button
            label="Produtores"
            variant="outline"
            fullWidth={false}
            style={{ flex: 1, marginRight: spacing.sm }}
            onPress={() => navigation.navigate('Produtores')}
          />
          <Button
            label="Histórico"
            variant="outline"
            fullWidth={false}
            style={{ flex: 1 }}
            onPress={() => {}}
          />
        </View>
      </ScreenContainer>
    </View>
  );
}

function StatCard({ value, label, danger }: { value: number; label: string; danger?: boolean }) {
  return (
    <View style={styles.statCard}>
      <Text style={[typography.h1, danger && { color: colors.riskHigh }]}>{value}</Text>
      <Text style={typography.label}>{label}</Text>
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  statCard: {
    width: '48.5%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  agendaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  rowButtons: {
    flexDirection: 'row',
    marginTop: spacing.sm,
  },
});
