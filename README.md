# Stack - Minimalist Todo App with Community

A minimalist todo app that combines personal productivity with community-driven motivation. Built with React Native, Expo, and Supabase.

## Features

### 🎯 Core Features
- **Anonymous Todo Management**: Start using immediately without signup
- **Community Viewing**: Browse community posts without authentication
- **Social Authentication**: Sign up with Google or GitHub to unlock full features
- **Real-time Sync**: All data synced across devices with Supabase

### 📱 Todo Features
- Create, update, and delete todos
- Mark todos as complete
- Clean, minimalist interface
- Works offline with local storage

### 👥 Community Features (Requires Authentication)
- Share daily achievements
- Track contribution streaks
- Create and join private channels
- React and comment on posts

## Tech Stack

- **Frontend**: React Native with Expo
- **Backend**: Supabase (PostgreSQL, Auth, Realtime)
- **State Management**: Zustand + React Query
- **Navigation**: React Navigation
- **Styling**: Custom theme system
- **Icons**: Lucide React Native

## Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI
- iOS Simulator or Android Emulator (or Expo Go app)

### Installation

```bash
# Clone the repository
git clone https://github.com/Junhan2/stack.git
cd stack

# Install dependencies
npm install

# Start the development server
npm start
```

### Running the app

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Project Structure

```
src/
├── types/          # TypeScript type definitions
├── services/       # External services (Supabase, Auth)
├── hooks/          # Custom React hooks
├── contexts/       # React contexts (Auth)
├── screens/        # Screen components
├── components/     # Reusable components
├── navigation/     # Navigation configuration
├── constants/      # Theme, colors, typography
└── store/          # Global state management
```

## Environment Setup

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
