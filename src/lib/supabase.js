import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import 'react-native-url-polyfill/auto';

// Supabase 설정
const supabaseUrl = 'https://mfvcwsyxpdmuvpvaihdy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdmN3c3l4cGRtdXZwdmFpaGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDUzMDksImV4cCI6MjA2Mzk4MTMwOX0.Vf4JDrVBeeOYbPRCo7okhML1UFugJJfricAtcj5IY_Q';

// SecureStore adapter for React Native
const SecureStoreAdapter = {
  getItem: async (key) => {
    try {
      const value = await SecureStore.getItemAsync(key);
      return value;
    } catch (error) {
      console.error('SecureStore get error:', error);
      return null;
    }
  },
  setItem: async (key, value) => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error('SecureStore set error:', error);
    }
  },
  removeItem: async (key) => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error('SecureStore remove error:', error);
    }
  },
};

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: SecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// 타입 정의
export type Todo = {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
  order_index: number;
};

export type Profile = {
  id: string;
  username?: string;
  avatar_url?: string;
  is_anonymous: boolean;
  created_at: string;
};

// 데이터베이스 타입
export type Database = {
  public: {
    Tables: {
      todos: {
        Row: Todo;
        Insert: Omit<Todo, 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Todo>;
      };
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'created_at'> & {
          created_at?: string;
        };
        Update: Partial<Profile>;
      };
    };
  };
};
