import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { TodoCard, ThemeToggle } from './src/components/ThemedComponents';
import { spacing } from './src/theme/colors';

// 메인 앱 컨텐츠
const AppContent = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      padding: spacing.md,
    },
    header: {
      marginBottom: spacing.lg,
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.md,
    },
  });

  // 샘플 할일 데이터
  const todos = [
    {
      id: 1,
      title: 'React Native 테마 시스템 구축',
      description: 'Tailwind 색상을 RN에 적용하기',
      completed: true,
    },
    {
      id: 2,
      title: 'Supabase 연동',
      description: '인증 및 데이터베이스 설정',
      completed: false,
    },
    {
      id: 3,
      title: '반응형 디자인 구현',
      description: '모든 화면 크기에서 테스트',
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>📋 할일 관리</Text>
          <ThemeToggle />
        </View>
        
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            onToggle={() => console.log('Toggle:', todo.id)}
            onDelete={() => console.log('Delete:', todo.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// 앱 컴포넌트 (ThemeProvider로 감싸기)
const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
