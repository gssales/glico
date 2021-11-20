import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function DashboardScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="Go to Food Finder" onPress={() => navigation.navigate('FoodFinder')} />
      <Button title="Create new register" onPress={() => navigation.navigate('EditEntry')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
