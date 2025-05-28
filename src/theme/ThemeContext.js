import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightColors, darkColors } from './colors';

// 테마 컨텍스트 생성
const ThemeContext = createContext();

// 테마 프로바이더 컴포넌트
export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [isLoading, setIsLoading] = useState(true);

  // 저장된 테마 설정 불러오기
  useEffect(() => {
    loadThemePreference();
  }, []);

  // 시스템 테마 변경 감지
  useEffect(() => {
    const loadedTheme = AsyncStorage.getItem('@theme_preference');
    if (!loadedTheme) {
      // 사용자가 수동으로 설정하지 않았으면 시스템 테마 따라가기
      setIsDarkMode(systemColorScheme === 'dark');
    }
  }, [systemColorScheme]);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('@theme_preference');
      if (savedTheme !== null) {
        setIsDarkMode(savedTheme === 'dark');
      }
    } catch (error) {
      console.error('테마 설정 불러오기 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTheme = async () => {
    try {
      const newTheme = !isDarkMode;
      setIsDarkMode(newTheme);
      await AsyncStorage.setItem('@theme_preference', newTheme ? 'dark' : 'light');
    } catch (error) {
      console.error('테마 설정 저장 실패:', error);
    }
  };

  const theme = {
    isDarkMode,
    colors: isDarkMode ? darkColors : lightColors,
    toggleTheme,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// 테마 훅
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 테마별 스타일 생성 헬퍼
export const createThemedStyles = (lightStyles, darkStyles) => {
  return (isDarkMode) => isDarkMode ? darkStyles : lightStyles;
};
