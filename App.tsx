import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootContextWrap from './components/RootContext/RootContext';
import SQLiteManager from './db/db';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import FoodService from './services/foodService';

export default function App() {
  const db = new SQLiteManager();
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    populateFoodTable();
  }, []);

  async function populateFoodTable() {
    const service = new FoodService();
    const count = await service.count();
    if (count === 0) {
      const stmt = "drop table if exists Food;"
      db.runQuery(stmt);
      db.createTablesFromSchema();
      service.populate();
    }
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RootContextWrap>
          <Navigation />
          <StatusBar />
        </RootContextWrap>
      </SafeAreaProvider>
    );
  }
}
