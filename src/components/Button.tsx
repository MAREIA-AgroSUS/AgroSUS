import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  GestureResponderEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, sizing, typography } from '../theme';

type Variant = 'primary' | 'outline' | 'ghost' | 'danger';

type Props = {
  label: string;
  onPress?: (e: GestureResponderEvent) => void;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: keyof typeof Ionicons.glyphMap;
  iconRight?: keyof typeof Ionicons.glyphMap;
  fullWidth?: boolean;
  style?: any;
};

export default function Button({
  label,
  onPress,
  variant = 'primary',
  disabled,
  loading,
  iconLeft,
  iconRight,
  fullWidth = true,
  style,
}: Props) {
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';
  const isDanger = variant === 'danger';
  const isGhost = variant === 'ghost';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.base,
        isPrimary && styles.primary,
        isOutline && styles.outline,
        isDanger && styles.danger,
        isGhost && styles.ghost,
        fullWidth && { alignSelf: 'stretch' },
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isOutline || isGhost ? colors.primary : colors.white} />
      ) : (
        <View style={styles.content}>
          {iconLeft && (
            <Ionicons
              name={iconLeft}
              size={17}
              color={isOutline || isGhost ? colors.ink : colors.white}
              style={{ marginRight: 8 }}
            />
          )}
          <Text
            style={[
              typography.button,
              (isOutline || isGhost) && { color: colors.ink },
            ]}
          >
            {label}
          </Text>
          {iconRight && (
            <Ionicons
              name={iconRight}
              size={17}
              color={isOutline || isGhost ? colors.ink : colors.white}
              style={{ marginLeft: 8 }}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    height: sizing.buttonHeight,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
  },
  ghost: {
    backgroundColor: colors.transparent,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  disabled: {
    opacity: 0.5,
  },
});
