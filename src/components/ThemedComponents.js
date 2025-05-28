import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { spacing, borderRadius, fontSize, fontWeight, shadows } from '../theme/colors';

// 할일 카드 컴포넌트 예시
export const TodoCard = ({ title, description, completed, onToggle, onDelete }) => {
  const { colors, isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      marginBottom: spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
      ...Platform.select({
        ios: shadows.ios.sm,
        android: shadows.android.sm,
      }),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.xs,
    },
    title: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: completed ? colors.mutedForeground : colors.cardForeground,
      textDecorationLine: completed ? 'line-through' : 'none',
      flex: 1,
    },
    description: {
      fontSize: fontSize.base,
      color: colors.mutedForeground,
      marginTop: spacing.xs,
    },
    actions: {
      flexDirection: 'row',
      gap: spacing.sm,
    },
    button: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borderRadius.md,
      minWidth: 44, // 터치 타겟 최소 크기
      minHeight: 44,
      justifyContent: 'center',
      alignItems: 'center',
    },
    completeButton: {
      backgroundColor: completed ? colors.accent : colors.primary,
    },
    deleteButton: {
      backgroundColor: colors.destructive,
    },
    buttonText: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      color: colors.primaryForeground,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {description && (
        <Text style={styles.description}>{description}</Text>
      )}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.completeButton]}
          onPress={onToggle}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {completed ? '완료됨' : '완료'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={onDelete}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// 테마 토글 버튼 예시
export const ThemeToggle = () => {
  const { colors, isDarkMode, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.secondary,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.full,
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      ...Platform.select({
        ios: shadows.ios.md,
        android: shadows.android.md,
      }),
    },
    text: {
      color: colors.secondaryForeground,
      fontSize: fontSize.base,
      fontWeight: fontWeight.medium,
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={toggleTheme}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>
        {isDarkMode ? '🌙 다크 모드' : '☀️ 라이트 모드'}
      </Text>
    </TouchableOpacity>
  );
};

// 입력 필드 예시
export const ThemedInput = ({ placeholder, value, onChangeText, ...props }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    input: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.input,
      borderRadius: borderRadius.md,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      fontSize: fontSize.base,
      color: colors.foreground,
      minHeight: 44, // 터치 타겟 최소 크기
    },
  });

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.mutedForeground}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};
