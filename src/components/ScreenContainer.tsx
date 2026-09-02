import React from 'react';
import { View, ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { colors, sizing } from '../theme';

type Props = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
  noPadding?: boolean;
};

export default function ScreenContainer({ children, scroll = true, style, noPadding }: Props) {
  const content = (
    <View style={[!noPadding && styles.padded, style]}>{children}</View>
  );
  if (!scroll) {
    return <View style={styles.flex}>{content}</View>;
  }
  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {content}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  padded: {
    paddingHorizontal: sizing.screenPaddingH,
    paddingTop: 18,
  },
});
