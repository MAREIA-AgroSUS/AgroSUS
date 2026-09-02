import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../theme';

type Props = {
  size?: 'sm' | 'lg';
};

export default function Logo({ size = 'sm' }: Props) {
  const isLg = size === 'lg';
  return (
    <View style={styles.wrap}>
      <Svg width={isLg ? 130 : 76} height={isLg ? 34 : 20} viewBox="0 0 130 34">
        <Path
          d="M4 20 C 20 4, 34 4, 50 16 C 66 28, 80 28, 96 14 C 106 5, 116 4, 126 10"
          stroke={colors.wave}
          strokeWidth={4}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      <Text style={[styles.text, isLg && styles.textLg]}>
        mare<Text style={styles.dot}>.</Text>IA
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center' },
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
    marginTop: -2,
  },
  textLg: {
    fontSize: 34,
    marginTop: 2,
  },
  dot: {
    color: colors.primary,
  },
});
