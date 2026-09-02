import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

export type Column = {
  key: string;
  label: string;
  width?: number;
  type?: 'text' | 'radio';
};

type Props = {
  columns: Column[];
  rows: Record<string, any>[];
  onCellChange?: (rowIndex: number, key: string, value: any) => void;
  highlightKey?: string; // column key to visually highlight when truthy (e.g. "pós-aplicação")
};

export default function DataTable({ columns, rows, onCellChange, highlightKey }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.headerRow}>
        {columns.map((col) => (
          <View key={col.key} style={[styles.cell, { flex: col.width ?? 1 }]}>
            <Text style={styles.headerText}>{col.label}</Text>
          </View>
        ))}
      </View>
      {rows.map((row, ri) => (
        <View key={ri} style={styles.dataRow}>
          {columns.map((col) => {
            const value = row[col.key];
            const isHighlighted = highlightKey === col.key && value;
            if (col.type === 'radio') {
              return (
                <TouchableOpacity
                  key={col.key}
                  style={[
                    styles.cell,
                    { flex: col.width ?? 1 },
                    isHighlighted && styles.cellHighlight,
                  ]}
                  onPress={() => onCellChange?.(ri, col.key, !value)}
                >
                  <View style={[styles.dot, value && styles.dotActive]} />
                </TouchableOpacity>
              );
            }
            return (
              <View key={col.key} style={[styles.cell, { flex: col.width ?? 1 }]}>
                <TextInput
                  value={value ?? ''}
                  onChangeText={(t) => onCellChange?.(ri, col.key, t)}
                  placeholder="—"
                  placeholderTextColor={colors.textMuted}
                  style={styles.cellInput}
                />
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
  dataRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  cell: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255,255,255,0.25)',
  },
  cellHighlight: {
    backgroundColor: colors.riskHighBg,
  },
  headerText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
  },
  cellInput: {
    fontSize: 12,
    color: colors.ink,
    textAlign: 'center',
    width: '100%',
    paddingVertical: 2,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.ink,
    borderColor: colors.ink,
  },
});
