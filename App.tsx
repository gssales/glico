import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SQLiteManager from './db/db';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import FoodService from './services/foodService';

export default function App() {
  const db = new SQLiteManager();
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    const stmt = "drop table if exists Food;"
    db.runQuery(stmt);
    db.createTablesFromSchema();
    (new FoodService()).populate();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
