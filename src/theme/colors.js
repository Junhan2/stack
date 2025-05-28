// Tailwind 색상 시스템을 React Native용으로 변환
export const lightColors = {
  // 배경 색상
  background: '#f8fafc',
  foreground: '#1e293b',
  
  // 카드
  card: '#ffffff',
  cardForeground: '#1e293b',
  
  // 팝오버
  popover: '#ffffff',
  popoverForeground: '#1e293b',
  
  // 주요 색상
  primary: '#6366f1',
  primaryForeground: '#ffffff',
  
  // 보조 색상
  secondary: '#e5e7eb',
  secondaryForeground: '#374151',
  
  // 음소거/비활성
  muted: '#f3f4f6',
  mutedForeground: '#6b7280',
  
  // 강조
  accent: '#e0e7ff',
  accentForeground: '#374151',
  
  // 경고/삭제
  destructive: '#ef4444',
  destructiveForeground: '#ffffff',
  
  // 테두리 및 입력
  border: '#d1d5db',
  input: '#d1d5db',
  ring: '#6366f1',
  
  // 차트 색상 (통계나 그래프에 활용)
  chart1: '#6366f1',
  chart2: '#4f46e5',
  chart3: '#4338ca',
  chart4: '#3730a3',
  chart5: '#312e81',
  
  // 사이드바 (드로어 메뉴에 활용)
  sidebar: '#f3f4f6',
  sidebarForeground: '#1e293b',
  sidebarPrimary: '#6366f1',
  sidebarPrimaryForeground: '#ffffff',
  sidebarAccent: '#e0e7ff',
  sidebarAccentForeground: '#374151',
  sidebarBorder: '#d1d5db',
  sidebarRing: '#6366f1',
};

export const darkColors = {
  // 배경 색상
  background: '#0f172a',
  foreground: '#e2e8f0',
  
  // 카드
  card: '#1e293b',
  cardForeground: '#e2e8f0',
  
  // 팝오버
  popover: '#1e293b',
  popoverForeground: '#e2e8f0',
  
  // 주요 색상
  primary: '#818cf8',
  primaryForeground: '#0f172a',
  
  // 보조 색상
  secondary: '#2d3748',
  secondaryForeground: '#d1d5db',
  
  // 음소거/비활성
  muted: '#1e293b',
  mutedForeground: '#9ca3af',
  
  // 강조
  accent: '#374151',
  accentForeground: '#d1d5db',
  
  // 경고/삭제
  destructive: '#ef4444',
  destructiveForeground: '#0f172a',
  
  // 테두리 및 입력
  border: '#4b5563',
  input: '#4b5563',
  ring: '#818cf8',
  
  // 차트 색상
  chart1: '#818cf8',
  chart2: '#6366f1',
  chart3: '#4f46e5',
  chart4: '#4338ca',
  chart5: '#3730a3',
  
  // 사이드바
  sidebar: '#1e293b',
  sidebarForeground: '#e2e8f0',
  sidebarPrimary: '#818cf8',
  sidebarPrimaryForeground: '#0f172a',
  sidebarAccent: '#374151',
  sidebarAccentForeground: '#d1d5db',
  sidebarBorder: '#4b5563',
  sidebarRing: '#818cf8',
};

// 그림자 스타일 (RN용)
export const shadows = {
  // iOS 그림자
  ios: {
    xs: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
    },
  },
  // Android 그림자
  android: {
    xs: { elevation: 2 },
    sm: { elevation: 4 },
    md: { elevation: 6 },
    lg: { elevation: 8 },
    xl: { elevation: 12 },
  },
};

// 반응형 크기 (RN에서는 Dimensions 활용)
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

// 테두리 반경
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999,
};

// 폰트 크기
export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
};

// 폰트 굵기 (RN에서는 string으로 사용)
export const fontWeight = {
  thin: '100',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};
